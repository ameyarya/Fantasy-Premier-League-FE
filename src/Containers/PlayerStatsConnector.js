import React from "react";
import StatsReducer from "../reducers/StatsReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import PlayerStats from "./PlayerStatsContainer"
import PlayerStatsReducer from "../reducers/PlayerStatsReducer";

const rootReducer = combineReducers({
                                        allDetails: StatsReducer,
                                        playerStats: PlayerStatsReducer
                                    })

const store = createStore(rootReducer)

class PlayerStatsConnector extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <div>
                    <PlayerStats
                        playerId={this.props.playerId}
                        fullName={this.props.fullName}
                        pageType={this.props.pageType}
                        history={this.props.history}
                    />
                </div>
            </Provider>
        )
    }
}

export default PlayerStatsConnector
