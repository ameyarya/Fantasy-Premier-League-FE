import React from "react";
import {getUserData} from "../services/UserServices";
import NavigationBarComponent from "./NavigationBarComponent";
import {getAllDetails} from "../services/StatsServices";
import {Link} from "react-router-dom";

class OtherUserProfile extends React.Component {

    state = {
        response: '',
        allDetails: '',
        playerInfo: [],
        initialised: false,
        teams: [],
        position: '',
        teamName: []
    }

    constructor(props) {
        super(props);
        this.findPlayerInfo = this.findPlayerInfo.bind(this)
    }

    componentDidMount() {
        getUserData(this.props.userId).then(response => this.setState({
                                                                          response: response
                                                                      }))
        getAllDetails().then(allDetails => this.setState({
                                                             allDetails: allDetails
                                                         }))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.response !== this.state.response) {
            this.findPlayerInfo()
        }
    }

    findPlayerInfo() {
        if (this.state.allDetails.length !== 0 && !this.state.initialised && this.state.response) {
            {
                const playerArr = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
                const teamName = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
                this.state.response
                && this.state.response.myTeam.playerList.split(',').map((player, index) => {

                    const element = this.state.allDetails.elements.find(
                        element => element.id === parseInt(player, 10));
                    const name = this.state.allDetails.teams[element.team - 1].name
                    playerArr[index] = element
                    teamName[index] = name
                })

                this.setState({
                                  playerInfo: playerArr,
                                  teams: this.state.allDetails.teams,
                                  teamName: teamName,
                                  //position:
                                  // this.state.allDetails.element_types[element.element_type-1].singular_name,
                                  initialised: true
                              })
            }

        }
    }

    render() {
        this.findPlayerInfo()
        return (
            <div>
                <NavigationBarComponent history={this.props.history}
                                        showSearch={true}/>
                {console.log(this.state.allDetails)}
                <br/>
                <div className={"container-fluid"}>
                    <br/>
                    <br/>
                    <div className="row">
                        <div className="col-3"/>
                        <div className="col-6">
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th className="text-center">First Name</th>
                                    <th className="text-center">Last Name</th>
                                    <th className="text-center">Team Name</th>
                                    <th className="text-center">Bank Balance</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="text-center">{this.state.response
                                                                 && this.state.response.firstName}</td>
                                    <td className="text-center">{this.state.response
                                                                 && this.state.response.lastName}</td>
                                    <td className="text-center">{this.state.response
                                                                 && this.state.response.myTeam.teamName}</td>
                                    <td className="text-center">{this.state.response
                                                                 && this.state.response.myTeam.bankBalance}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-3"/>
                    </div>
                    <div className="row">
                        <div className="col-3"/>
                        <table className={"table col-6"}>
                            <thead className={"thead-dark"}>
                            <tr>
                                <th scope={"col"}>Players</th>
                                <th scope={"col"}>Team</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.response
                             && this.state.response.myTeam.playerList.split(',')
                                 .map((player, index) =>
                                          <tr>
                                              <th scope={"row"}>
                                                  {/*<Link to={`/player-details/${player.id}/${this.state.playerInfo[index].first_name + "-" + player.web_name}/overview`}>*/}
                                                  {this.state.playerInfo[index] &&
                                                   <Link
                                                       to={`/player-details/${this.state.playerInfo[index].id}/${this.state.playerInfo[index].first_name
                                                                                                                 + "-"
                                                                                                                 + this.state.playerInfo[index].second_name}/overview`}>
                                                       {this.state.playerInfo[index].first_name
                                                        + " " +
                                                        this.state.playerInfo[index].second_name}
                                                   </Link>}

                                              </th>
                                              <td>{this.state.teamName[index]}</td>
                                          </tr>
                                 )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default OtherUserProfile;


