import React from "react";
import TopGoalScorers from "../Components/TopGoalScorers";
import TopAssistProviders from "../Components/TopAssistProviders";
import TopMinutesPlayed from "../Components/TopMinutesPlayed";
import TopFantasyPoints from "../Components/TopFantasyPoints";
import {getAllDetails} from "../services/StatsServices";
import {connect} from "react-redux";
import NavigationBarComponent from "../Components/NavigationBarComponent";

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

class StatsDashboard extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getAllDetails()
    }

    getTopScorers(playerList) {
        let topScorers = playerList.slice()
        topScorers.sort(playerComparer('goals_scored'))
        return topScorers.slice(0, 10)
    }

    getTopAssistProviders(playerList) {
        let topProviders = playerList.slice()
        topProviders.sort(playerComparer('assists'))
        return topProviders.slice(0, 10)
    }

    getTopMinutes(playerList) {
        let topMinutes = playerList.slice()
        topMinutes.sort(playerComparer('minutes'))
        return topMinutes.slice(0, 10)
    }

    getTopFantasyPoints(playerList) {
        let topFantasyPoints = playerList.slice()
        topFantasyPoints.sort(playerComparer('total_points'))
        return topFantasyPoints.slice(0, 10)
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <NavigationBarComponent
                    searchPlayer={this.props.searchPlayer}
                    players={this.props.allDetails.elements}
                />
                <br/>
                <div className={"row"}>
                    <div className={"col-sm-3"}>
                        <TopGoalScorers
                            history={this.props.history}
                            players={this.props.allDetails.elements}
                            getTopScorers={this.getTopScorers}
                        />
                        <br/>
                    </div>
                    <div className={"col-sm-3"}>
                        <TopAssistProviders
                            history={this.props.history}
                            players={this.props.allDetails.elements}
                            getTopAssistProviders={this.getTopAssistProviders}/>
                        <br/>
                    </div>
                    <div className={"col-sm-3"}>
                        <TopMinutesPlayed
                            history={this.props.history}
                            players={this.props.allDetails.elements}
                            getTopMinutes={this.getTopMinutes}/>
                        <br/>
                    </div>
                    <div className={"col-sm-3"}>
                        <TopFantasyPoints
                            history={this.props.history}
                            players={this.props.allDetails.elements}
                            getTopFantasyPoints={this.getTopFantasyPoints}/>
                        <br/>
                    </div>
                </div>
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
(StatsDashboard)
