import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import StatsReducer from "../reducers/StatsReducer";
import PrizeWinnersComponent from "../Components/PrizeWinnersComponent";
import TeamsReducer from "../reducers/TeamsReducer";

const rootReducer = combineReducers({
                                        allDetails: StatsReducer,
                                        allTeams: TeamsReducer
                                    })

const store = createStore(rootReducer)

class PrizeWinnersContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <PrizeWinnersComponent history={this.props.history}
                                           searchPlayer={this.props.searchPlayer}
                                           linkName={this.props.linkName}/>
                </div>
            </Provider>)
    }
}

export default PrizeWinnersContainer;
