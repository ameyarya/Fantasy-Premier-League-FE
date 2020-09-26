import React from "react";
import {getAllDetails, getAllPlayerDetails} from "../services/StatsServices";
import {connect} from "react-redux";

class PlayerSummaryListContainer extends React.Component {

    componentDidMount() {
        this.props.getAllDetails()
    }

    state = {
        playerId: this.props.playerId,
        playerInfo: [],
        teams: [],
        initialised: false,
        statsInitialised: false,
        teamName: '',
        position: '',
        goals: 0,
        assists: 0,
        appearances: 0
    }

    findPlayerInfo() {
        if (this.props.allDetails.length !== 0 && !this.state.initialised) {
            const element = this.props.allDetails.elements.find(
                element => element.id === parseInt(this.state.playerId, 10));
            const name = this.props.allDetails.teams[element.team - 1].name
            this.setState({
                              playerInfo: element,
                              teams: this.props.allDetails.teams,
                              teamName: name,
                              position: this.props.allDetails.element_types[element.element_type
                                                                            - 1].singular_name,
                              initialised: true
                          })
        }

        if (this.props.playerStats.length !== 0 && !this.state.statsInitialised) {
            let totalVal = 0;
            let assists = 0;
            let apps = 0;
            for (let i = 0; i < this.props.playerStats.history.length; i++) {
                let element = this.props.playerStats.history[i];
                apps = element.minutes > 0 ? apps + 1 : apps;
            }
            for (let i = 0; i < this.props.playerStats.history_past.length; i++) {
                totalVal += this.props.playerStats.history_past[i].goals_scored;
                assists += this.props.playerStats.history_past[i].assists;
            }
            this.setState({
                              goals: totalVal, assists: assists, statsInitialised: true,
                              appearances: apps
                          })
        }
    }

    render() {
        console.log(this.props.playerStats)
        console.log(this.props.allDetails)
        this.findPlayerInfo()
        console.log(this.state.playerInfo)
        console.log(this.state.teams)
        return (
            <ul className="list-group">
                <br/>
                <li className="list-group-item">
                    <label className="float-left">Club</label>
                    <label className="float-right font-weight-bold">{this.state.teamName}</label>
                </li>
                <li className="list-group-item">
                    <label className="float-left">Position</label>
                    <label className="float-right font-weight-bold">{this.state.position}</label>
                </li>
                <br/>
                <h2>Premier League Record</h2>
                <li className="list-group-item">
                    <label className="float-left">Appearances(Subs)</label>
                    <label className="float-right font-weight-bold">{this.state.appearances}</label>
                </li>
                <li className="list-group-item">
                    <label className="float-left">Goals</label>
                    <label className="float-right font-weight-bold">{this.state.goals}</label>
                </li>
                <li className="list-group-item">
                    <label className="float-left">Assists</label>
                    <label className="float-right font-weight-bold">{this.state.assists}</label>
                </li>
            </ul>
        );
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
(PlayerSummaryListContainer)
