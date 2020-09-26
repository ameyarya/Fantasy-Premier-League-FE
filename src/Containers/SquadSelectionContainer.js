import React from "react";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import FantasyDraftNavigationComponent from "../Components/FantasyDraftNavigationComponent";
import PitchContainer from "./PitchContainer";
import PlayerSelectionContainer from "./PlayerSelectionContainer";
import {getAllDetails} from "../services/StatsServices";
import {connect} from "react-redux";
import {
    profile,
    createTeam,
    getTeam,
    simulateGameWeeks,
    updateTeam
} from "../services/UserServices";

function playerComparer(criteria) {
    return function (player1, player2) {
        if (player1[criteria] < player2[criteria]) {
            return 1
        } else if (player1[criteria] > player2[criteria]) {
            return -1
        }
        return 0
    }
}

class SquadSelectionContainer extends React.Component {
    state = {
        playerList: [],
        teams: [],
        profile: '',
        position: '',
        playerAdded: false,
        teamList: {
            GK: [],
            Def: [],
            Mid: [],
            Str: []
        },
        total: 100,
        capacity: 0,
        playerIdString: '',
        storedTeam: {},
        simulate: true,
        updateSquad: false
    }

    constructor(props) {
        super(props)
        this.props.getAllDetails()
        this.setPosition = this.setPosition.bind(this)
        this.setPlayerAdded = this.setPlayerAdded.bind(this)
        this.setPlayerName = this.setPlayerName.bind(this)
        this.updatedTotal = this.updatedTotal.bind(this)
        this.updatedPlayerCount = this.updatedPlayerCount.bind(this)
        this.reset = this.reset.bind(this)
        this.enterSquad = this.enterSquad.bind(this)
        this.updatedPlayerIdString = this.updatedPlayerIdString.bind(this)
        this.loadFromMemory = this.loadFromMemory.bind(this)
        this.simulateGameWeeks = this.simulateGameWeeks.bind(this)
        this.updateTeam = this.updateTeam.bind(this)
        this.editTeamName = this.editTeamName.bind(this)
    }

    async componentDidMount() {
        await this.props.getAllDetails()
        this.setState({
                          playerList: this.props.allDetails.elements,
                          teams: this.props.allDetails.teams
                      })
        profile()
            .then(profile => {
                if (profile) {
                    this.setState({
                                      profile: profile
                                  })
                    getTeam(this.state.profile.userID)
                        .then(team =>{
                            if(team){
                                this.setState({
                                                            storedTeam: team,
                                                            updateSquad: true
                                                        })
                                }
                        })
                } else {
                    alert("You need to be logged in to access this page")
                    this.props.history.push('/login')
                }
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.position !== this.state.position) {
            this.filterByPosition()
        }
        if (prevState.profile !== this.state.profile && this.state.profile.myTeam !== null) {
            getTeam(this.state.profile.userID)
                .then(team => this.setState({
                                                storedTeam: team,
                                                updateSquad: true
                                            }))
        }
        if (prevState.storedTeam !== this.state.storedTeam) {
            console.log(this.state.storedTeam.gameWeek)
            this.loadFromMemory()
            if (this.state.storedTeam.gameWeek !== null) {
                this.setState({
                                  simulate: false
                              })
            }
        }
        if(prevState.simulate !== this.state.simulate && this.state.simulate === false){
            getTeam(this.state.profile.userID)
                .then(team => {
                          if (team) {
                              this.setState({
                                                storedTeam: team,
                                                updateSquad: true
                                            })
                          }
                      }
                )
        }
    }

    setPosition = (pos) => {
        this.setState({position: pos})
    }

    setPlayerAdded = (value) => {
        this.setState({playerAdded: value})
    }

    setPlayerName = (name, cost, id) => {
        if (this.state.position === 1) {
            if (this.state.teamList.GK.includes(name)) {
                alert('Cannot insert. Player already in the team. Try Another Player.')
            } else if (this.state.total - cost < 0) {
                alert('Cannot insert. Your balance is too low. Try another player')
            } else {
                this.state.teamList.GK.push(name)
                this.updatedTotal(cost)
                this.updatedPlayerCount()
                this.updatedPlayerIdString(id)
            }
        }
        if (this.state.position === 2) {
            if (this.state.teamList.Def.includes(name)) {
                alert('Cannot insert. Player already in the team. Try Another Player.')
            } else if (this.state.total - cost < 0) {
                alert('Cannot insert. Your balance is too low. Try another player')
            } else {
                this.state.teamList.Def.push(name)
                this.updatedTotal(cost)
                this.updatedPlayerCount()
                this.updatedPlayerIdString(id)
            }
        }
        if (this.state.position === 3) {
            if (this.state.teamList.Mid.includes(name)) {
                alert('Cannot insert. Player already in the team. Try Another Player.')
            } else if (this.state.total - cost < 0) {
                alert('Cannot insert. Your balance is too low. Try another player')
            } else {
                this.state.teamList.Mid.push(name)
                this.updatedTotal(cost)
                this.updatedPlayerCount()
                this.updatedPlayerIdString(id)
            }
        }
        if (this.state.position === 4) {
            if (this.state.teamList.Str.includes(name)) {
                alert('Cannot insert. Player already in the team. Try Another Player.')
            } else if (this.state.total - cost < 0) {
                alert('Cannot insert. Your balance is too low. Try another player')
            } else {
                this.state.teamList.Str.push(name)
                this.updatedTotal(cost)
                this.updatedPlayerCount()
                this.updatedPlayerIdString(id)
            }
        }
    }

    filterByPosition = (position = this.state.position) => {
        if (position == '') {
            this.setState({
                              playerList: this.props.allDetails.elements
                          })

        } else {
            let res = this.state.playerList.filter(player => {
                return (player.element_type == position)
            })
            res.sort(playerComparer('total_points'))
            this.setState({
                              playerList: res
                          })
        }
    }

    updatedTotal = (cost) => {
        let newCost = (this.state.total - cost).toFixed(2)
        this.setState({
                          total: newCost
                      })
    }

    updatedPlayerCount = () => {
        let newPlayerCount = this.state.capacity + 1
        this.setState({
                          capacity: newPlayerCount
                      }
        )
    }

    updatedPlayerIdString = (playerId) => {
        let res = ''
        if (this.state.playerIdString.length !== 0) {
            res = this.state.playerIdString + ',' + playerId
        } else {
            res = playerId
        }
        this.setState({
                          playerIdString: res
                      })
    }

    reset = () => {
        this.setState({
                          playerAdded: false,
                          teamList: {
                              GK: [],
                              Def: [],
                              Mid: [],
                              Str: []
                          },
                          total: 100,
                          capacity: 0,
                          playerIdString: ''
                      })
    }

    enterSquad = async () => {
        if (this.state.capacity < 15) {
            alert("Please complete your squad")
            return
        }
        const teamName = prompt("Enter a name for your team")
        if (teamName === null) {
            alert("Team name cannot be empty")
            return
        }
        let team = {
            "teamName": teamName,
            "bankBalance": this.state.total,
            "playerList": this.state.playerIdString
        }
        let response = await createTeam(this.state.profile.userID, team)
        alert("Your squad has been entered")
        this.setState({
            storedTeam: {
                "teamName": teamName,
                "bankBalance": this.state.total,
                "playerList": this.state.playerIdString,
                "gameWeek": null,
                "teamId": response['teamId']
            },
            updateSquad: true,
            simulate: true
        })
    }

    editTeamName = async (tname) => {
        let team = {
            "teamName": tname,
            "bankBalance": -99,
            "playerList": "empty"
        }
        this.setState({
                          storedTeam: {
                              ...this.state.storedTeam,
                              "teamName": tname
                          }
                      })
        await updateTeam(this.state.profile.userID, team)
    }

    updateTeam = async () => {
        if (this.state.capacity < 15) {
            alert("Please complete your squad")
            return
        }
        let team = {
            "teamName": this.state.storedTeam.teamName,
            "bankBalance": this.state.total,
            "playerList": this.state.playerIdString
        }
        alert("Updating your squad. This may take a couple of moments.")
        await updateTeam(this.state.profile.userID, team)
    }

    simulateGameWeeks = async () => {
        alert("Running your simulation. This may take a few moments.")
        console.log("Running the simulation")
        await simulateGameWeeks(this.state.storedTeam.teamId)
        this.setState({
                          simulate: false
                      })
    }

    loadFromMemory = () => {
        this.setState({
                          total: this.state.storedTeam.bankBalance,
                          capacity: 15,
                          playerIdString: this.state.storedTeam.playerList,
                          playerAdded: true
                      })
        let listOfPlayers = this.state.storedTeam.playerList.split(',')
        let allPlayers = this.props.allDetails.elements
        let GKs = []
        let Defs = []
        let Mids = []
        let Strs = []
        for (let id = 0; id < listOfPlayers.length; id++) {
            let player = allPlayers.filter(player => {
                return (player.id == listOfPlayers[id])
            })
            player = player[0]
            switch (player.element_type) {
                case 1:
                    GKs.push(player.web_name)
                    break
                case 2:
                    Defs.push(player.web_name)
                    break
                case 3:
                    Mids.push(player.web_name)
                    break
                case 4:
                    Strs.push(player.web_name)
                    break
                default:
                    break
            }
        }
        let tempTeamList = {
            GK: GKs,
            Def: Defs,
            Mid: Mids,
            Str: Strs
        }
        this.setState({
                          teamList: tempTeamList
                      })
    }

    render() {
        return (
            <div>
                <NavigationBarComponent players={this.props.allDetails.elements}
                                        searchPlayer={this.props.searchPlayer}
                                        history={this.props.history}
                                        profile={this.state.profile}
                                        showSearch={true}/>
                <FantasyDraftNavigationComponent
                    linkName={this.props.linkName}
                    history={this.props.history}
                    profile={this.state.profile}/>
                <PitchContainer players={this.state.playerList}
                                searchPlayer={this.props.searchPlayer}
                                teams={this.state.teams}
                                position={this.state.position}
                                setPosition={this.setPosition}
                                playerAdded={this.state.playerAdded}
                                filterByPosition={this.filterByPosition}
                                setPlayerAdded={this.setPlayerAdded}
                                playerName={this.state.playerName}
                                teamListGK={this.state.teamList.GK}
                                teamListDef={this.state.teamList.Def}
                                teamListMid={this.state.teamList.Mid}
                                teamListStr={this.state.teamList.Str}
                                setPlayerName={this.setPlayerName}
                                balance={this.state.total}
                                squadSize={this.state.capacity}
                                reset={this.reset}
                                enterSquad={this.enterSquad}
                                simulate={this.state.simulate}
                                simulateGameWeeks={this.simulateGameWeeks}
                                gameWeekPoints={this.state.storedTeam.gameWeek}
                                updateSquad={this.state.updateSquad}
                                updateTeam={this.updateTeam}
                                teamName={this.state.storedTeam.teamName}
                                editTeamName={this.editTeamName}
                />
                <PlayerSelectionContainer
                    players={this.state.playerList}
                    searchPlayer={this.props.searchPlayer}
                    teams={this.state.teams}
                    position={this.state.position}
                    setPosition={this.setPosition}
                    filterByPosition={this.filterByPosition}
                    playerAdded={this.state.playerAdded}
                    setPlayerAdded={this.setPlayerAdded}
                    playerName={this.state.playerName}
                    setPlayerName={this.setPlayerName}
                />
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    allDetails: state.allDetails.allDetails
})

const dispatchToPropertyMapper = (dispatcher) => ({
    getAllDetails: () =>
        getAllDetails()
            .then(allDetails => dispatcher({
                                               type: "GET_ALL_DETAILS",
                                               allDetails: allDetails
                                           })),
})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(SquadSelectionContainer)
