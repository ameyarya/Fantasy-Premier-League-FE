import React from "react";
import "../Components/Pitch.css";
import PlayerListComponent from "../Components/PlayerListComponent";

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

class PlayerSelectionContainer extends React.Component {
    criterion = {
        'total_points': 'Total points',
        'now_cost': 'Price',
        'minutes': 'Minutes played',
        'goals_scored': 'Goals scored',
        'assists': 'Assists',
        'clean_sheets': 'Clean sheets',
        'goals_conceded': 'Goals conceded',
        'own_goals': 'Own goals',
        'penalties_saved': 'Penalties saved',
        'penalties_missed': 'Penalties missed',
        'yellow_cards': 'Yellow cards',
        'red_cards': 'Red cards',
        'saves': 'Saves',
        'bonus': 'Bonus',
        'bps': 'Bonus Points System',
        'influence': 'Influence',
        'creativity': 'Creativity',
        'threat': 'Threat',
        'ict_index': 'ICT Index',
        'form': 'Form',
        'dreamteam_count': 'Times in Dream Team',
        'value_form': 'Value (form)',
        'value_season': 'Value (season)',
        'points_per_game': 'Points per match',
        'transfers_in': 'Transfers in',
        'transfers_out': 'Transfers out',
        'cost_change_start': 'Price rise',
        'cost_change_start_fall': 'Price fall',
        'cost_change_event': 'Price rise (round)',
        'cost_change_event_fall': 'Price fall (round)'
    }

    state = {
        newSearchTitle: '',
        player: {
            first_name: '',
            second_name: '',
            id: ''
        },
        results: [],
        initialState: true,
        criteria: 'total_points',
        position: '',
        team: '',
        price_range: '',
        posts: [],
        currentPage: 1,
        postsPerPage: 5,
        indexOfLastPost: 5,
        indexOfFirstPost: 0,
        GKPCount: 71,
        DefCount: 210,
        MidCount: 261,
        StrCount: 86,
        targetValue: ''
    }

    constructor(props) {
        super(props);
        this.setGKPCount = this.setGKPCount.bind(this)
        this.setDefCount = this.setDefCount.bind(this)
        this.setMidCount = this.setMidCount.bind(this)
        this.setStrCount = this.setStrCount.bind(this)
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.newSearchTitle !== prevState.newSearchTitle) {
            this.updateForm()
        }
        if (prevState.position !== this.state.position) {
            this.filterByPosition(this.state.position)
        }
        if (this.state.team !== prevState.team) {
            this.filterByTeam()
        }
        if (this.state.price_range !== prevState.price_range) {
            this.filterByPriceRange()
        }
        if (prevProps.playerAdded !== this.props.playerAdded) {
            this.setState({playerAdded: this.props.playerAdded});
        }
    }

    paginate = (pageNumber) => {
        if (pageNumber === undefined) {
            pageNumber = 1
        }
        let lp = pageNumber * this.state.postsPerPage
        let fp = lp - this.state.postsPerPage
        console.log("Calling the paginate function with " + pageNumber)
        console.log(this.state.indexOfLastPost - this.state.postsPerPage)
        this.setState({
                          currentPage: pageNumber,
                          indexOfLastPost: lp,
                          indexOfFirstPost: fp
                      })

    }

    setGKPCount = (count) => {
        this.setState({
                          GKPCount: count
                      })
    }

    setDefCount = (count) => {
        this.setState({
                          DefCount: count
                      })
    }

    setMidCount = (count) => {
        this.setState({
                          MidCount: count
                      })
    }

    setStrCount = (count) => {
        this.setState({
                          StrCount: count
                      })
    }
    getGKList = () => {
        if (this.state.initialState) {
            let res = this.props.players.filter(player => {
                return (player.element_type === 1)
            })
            if (res.length != this.state.GKPCount) {
                this.setGKPCount(res.length)
            }
            res.sort(playerComparer(this.state.criteria))
            return res.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        } else {
            let res = this.state.results.filter(player => {
                return (player.element_type === 1)
            })
            if (res.length != this.state.GKPCount) {
                this.setGKPCount(res.length)
            }
            res.sort(playerComparer(this.state.criteria))
            return res.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)

        }
    }

    getDefList = () => {
        if (this.state.initialState) {
            let res = this.props.players.filter(player => {
                return (player.element_type === 2)
            })
            if (res.length != this.state.DefCount) {
                this.setDefCount(res.length)
            }
            res.sort(playerComparer(this.state.criteria))
            return res.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        } else {
            let res = this.state.results.filter(player => {
                return (player.element_type === 2)
            })
            if (res.length != this.state.DefCount) {
                this.setDefCount(res.length)
            }
            res.sort(playerComparer(this.state.criteria))
            return res.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        }
    }

    getMidList = () => {
        if (this.state.initialState) {
            let res = this.props.players.filter(player => {
                return (player.element_type === 3)
            })
            if (res.length != this.state.MidCount) {
                this.setMidCount(res.length)
            }
            res.sort(playerComparer(this.state.criteria))
            return res.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        } else {
            let res = this.state.results.filter(player => {
                return (player.element_type === 3)
            })
            if (res.length != this.state.MidCount) {
                this.setMidCount(res.length)
            }
            res.sort(playerComparer(this.state.criteria))
            return res.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        }
    }

    getStrList = () => {
        if (this.state.initialState) {
            let res = this.props.players.filter(player => {
                return (player.element_type === 4)
            })
            if (res.length != this.state.StrCount) {
                this.setStrCount(res.length)
            }
            res.sort(playerComparer(this.state.criteria))
            return res.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        } else {
            let res = this.state.results.filter(player => {
                return (player.element_type === 4)
            })
            if (res.length != this.state.StrCount) {
                this.setStrCount(res.length)
            }
            res.sort(playerComparer(this.state.criteria))
            return res.slice(this.state.indexOfFirstPost, this.state.indexOfLastPost)
        }
    }

    render() {
        return (
            <div className={"playerSelection"}>
                <div className="playerSelectionHeading">
                    <h3 className="title">Player Selection</h3>
                </div>
                <form className={"ElementList"}>
                    <div className={"FieldRenderers"}>
                        <label htmlFor="filter">
                            <span className="FieldRenderers_FieldLabel title">
                                View
                            </span>
                        </label>
                        <div>
                            <select
                                value={this.state.position === '' && this.state.team === '' ? 'p'
                                                                                            : this.state.targetValue}
                                id="filter" className="FieldRenderers_Select form-control title"
                                onChange={(e) => {
                                    if (e.target.value.includes('p')) {
                                        let pos = ''
                                        switch (e.target.value) {
                                            case "p1":
                                                pos = '1'
                                                break
                                            case "p2":
                                                pos = '2'
                                                break
                                            case "p3":
                                                pos = '3'
                                                break
                                            case "p4":
                                                pos = '4'
                                                break
                                        }
                                        console.log(pos)
                                        this.setState({
                                                          position: pos,
                                                          targetValue: e.target.value
                                                      })
                                    } else {
                                        this.setState({
                                                          team: e.target.value,
                                                          position: '',
                                                          targetValue: e.target.value

                                                      })
                                    }
                                }}>
                                <optgroup label="Global">
                                    <option selected="selected" value="p" aria-selected="true">
                                        All players
                                    </option>
                                </optgroup>
                                <optgroup label="By Position">
                                    <option value="p1" aria-selected="false">
                                        Goalkeepers
                                    </option>
                                    <option value="p2" aria-selected="false">
                                        Defenders
                                    </option>
                                    <option value="p3" aria-selected="false">
                                        Midfielders
                                    </option>
                                    <option value="p4" aria-selected="false">
                                        Forwards
                                    </option>
                                </optgroup>
                                <label htmlFor="filter">
                                <span className="FieldRenderers_FieldLabel title">
                                </span>
                                </label>
                                <optgroup label="By Team">
                                    <option value="" aria-selected="false">
                                        All Teams
                                    </option>
                                    {this.props.teams.map(team => (
                                        <option value={team.code} aria-selected="false">
                                            {team.name}
                                        </option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                    </div>
                    <div className="FieldRenderers">
                        <label htmlFor="sort">
                            <span className="FieldRenderers_FieldLabel title">
                                Sorted by
                            </span>
                        </label>
                        <div>
                            <select id="sort" className="FieldRenderers_Select form-control title"
                                    onChange={(e) => {
                                        this.setState({
                                                          criteria: e.target.value
                                                      })
                                    }}>
                                {Object.entries(this.criterion).map(([key, value]) => (
                                    <option value={key} aria-selected={"false"}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="FieldRenderers title">
                        <label htmlFor="search">
                            <span className="FieldRenderers_FieldLabel">
                                Search
                            </span>
                        </label>
                        <div>
                            <input type="search" id="search" name="search" className="form-control"
                                   onChange={

                                       (e) => {
                                           this.setState({
                                                             newSearchTitle: e.target.value,
                                                             results: []
                                                         })
                                           this.updateForm()
                                       }}
                                   value={this.state.newSearchTitle}
                                   placeholder="Player Name"/>
                        </div>
                    </div>
                    <div className="FieldRenderers">
                        <label htmlFor="maxCost">
                                    <span className="FieldRenderers_FieldLabel title">
                                        Max cost
                                    </span>
                            <br/>
                        </label>
                        <div>
                            <select id="maxCost" className="form-control title" onChange={(e) => {
                                this.setState({
                                                  price_range: e.target.value
                                              })
                            }
                            }>
                                <option value="" aria-selected="true">All</option>
                                <option value="lt5" aria-selected="true">Less than 5</option>
                                <option value="lt10" aria-selected="false">Less than 10</option>
                                <option value="gt10" aria-selected="false">Less than 15</option>
                            </select>
                        </div>
                    </div>
                </form>
                <PlayerListComponent getGKList={this.getGKList}
                                     GKPCount={this.state.GKPCount}
                                     getDefList={this.getDefList}
                                     DefCount={this.state.DefCount}
                                     getStrList={this.getStrList}
                                     StrCount={this.state.StrCount}
                                     getMidList={this.getMidList}
                                     MidCount={this.state.MidCount}
                                     criteria={this.state.criteria}
                                     playerAdded={this.props.playerAdded}
                                     setPlayerAdded={this.props.setPlayerAdded}
                                     setPlayerName={this.props.setPlayerName}
                                     position={this.props.position}
                                     setPosition={this.props.setPosition}
                                     paginate={this.paginate}
                                     postsPerPage={this.state.postsPerPage}
                                     updateTotal={this.props.updateTotal}
                                     updatePlayerCount={this.props.updatePlayerCount}
                />
            </div>
        )
    }

    updateForm = () => {
        this.setState({
                          position: ''
                      })
        let newSearchTitle = this.state.newSearchTitle
        let res = []
        if (newSearchTitle !== '') {
            res = this.props.searchPlayer(newSearchTitle, this.props.players)
        }
        this.setState({
                          results: res,
                          initialState: false
                      })
    }

    filterByPosition = () => {
        if (this.state.position == '') {
            this.setState({
                              results: this.props.players
                          })
        } else {
            let pos = this.state.position
            let res = this.props.players.filter(player => {
                return (player.element_type == pos)
            })
            res.sort(playerComparer(this.state.criteria))
            this.setState({
                              results: res,
                              initialState: false
                          })
        }
    }

    filterByTeam = () => {
        if (this.state.team == '') {
            this.setState({
                              results: this.props.players
                          })
        } else {
            let res = this.props.players.filter(player => {
                return (player.team_code == this.state.team)
            })
            res.sort(playerComparer(this.state.criteria))
            this.setState({
                              results: res,
                              initialState: false
                          })
        }
    }

    filterByPriceRange = () => {
        let res = []
        switch (this.state.price_range) {
            case "":
                if (this.state.results.length === 0) {
                    this.setState({
                                      results: this.props.players
                                  })
                }
                break;
            case "lt5":
                res = this.props.players.filter(player => {
                    return (player.now_cost / 10 <= 5)
                })
                this.setState({
                                  results: res,
                                  initialState: false
                              })
                break
            case "lt10":
                res = this.props.players.filter(player => {
                    return (player.now_cost / 10 >= 5 && player.now_cost / 10 <= 10)
                })
                this.setState({
                                  results: res,
                                  initialState: false
                              })
                break
            case "gt10":
                res = this.props.players.filter(player => {
                    return (player.now_cost / 10 >= 10)
                })
                this.setState({
                                  results: res,
                                  initialState: false
                              })
                break
            default:
                return
        }
    }
}

export default PlayerSelectionContainer;
