import React from "react";
import PlayerSummaryListContainer from "./PlayerSummaryListContainer";
import PlayerTabsContainer from "./PlayerTabsContainer";
import PlayerOverview from "../Components/PlayerOverview";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import {getAllDetails, getAllPlayerDetails} from "../services/StatsServices";
import {connect} from "react-redux";
import PlayerStatsComponent from "../Components/PlayerStatsComponent";

class PlayerStatsContainer extends React.Component{

    constructor(props) {
        super(props)
        this.searchPlayer = this.searchPlayer.bind(this)
    }

    state = {
        elements: []
    }

    searchPlayer = (newSearchTitle) => {
        this.props.allDetails.elements.find((element) => {
            if (element.first_name === newSearchTitle || element.web_name === newSearchTitle ||element.first_name + " " + element.web_name === newSearchTitle) {
                //this.props.history.push(`/players/${element.id}/${element.first_name + "-" + element.web_name}/overview`)

            };
        })

    }

    getPlayers(playerList) {
        let topScorers = playerList.slice()
        return topScorers.splice(0, 628)
    }

    componentDidMount() {
        this.props.getAllPlayerDetails(this.props.playerId);
    }

    render() {
        return(
            <div className="container-fluid">
                <NavigationBarComponent
                    searchPlayer={this.searchPlayer}
                    players={this.props.allDetails.elements}
                    getPlayers={this.getPlayers}
                    showSearch={true}
                />
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-9">
                        <br/>
                        <div>
                            <h1 className="wbdv-course-title">
                                {this.props.fullName}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div>
                            <PlayerSummaryListContainer
                                history={this.props.history}
                                playerId={this.props.playerId}
                                fullName={this.props.fullName}
                                playerStats={this.props.playerStats}
                            />
                        </div>
                    </div>
                    <div className="col-8">

                        <br/>
                        <div className="container">
                            <div>
                                <PlayerTabsContainer
                                    history={this.props.history}
                                    playerId={this.props.playerId}
                                    fullName={this.props.fullName}
                                    playerStats={this.props.playerStats}
                                    selectedTabId={this.props.pageType !== "stats" ? 0 : 1}
                                    />
                            </div>
                            <div>
                                {this.props.pageType !== "stats" ?
                                    <PlayerOverview
                                        history={this.props.history}
                                        playerId={this.props.playerId}
                                        fullName={this.props.fullName}
                                        playerStats={this.props.playerStats}
                                        allDetails={this.props.allDetails}
                                    /> :
                                 <PlayerStatsComponent
                                     history={this.props.history}
                                     playerId={this.props.playerId}
                                     fullName={this.props.fullName}
                                     playerStats={this.props.playerStats}
                                     allDetails={this.props.allDetails}
                                 />
                                }
                            </div>
                            <div>
                                <div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const stateToPropertyMapper = (state) => ({
    playerStats: state.playerStats.playerStats,
    allDetails: state.allDetails.allDetails
})

const dispatchToPropertyMapper = (dispatcher) => ({
    getAllDetails: () =>
        getAllDetails()
            .then(allDetails => dispatcher({
                                               type: "GET_ALL_DETAILS",
                                               allDetails: allDetails
                                           })),
    getAllPlayerDetails: (playerId) =>
        getAllPlayerDetails(playerId)
            .then(playerStats => dispatcher({
                                               type: "GET_PLAYER_STATS",
                                               playerStats: playerStats
                                           }))
})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(PlayerStatsContainer)

