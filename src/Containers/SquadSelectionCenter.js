import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import SquadSelectionContainer from "./SquadSelectionContainer";
import StatsReducer from "../reducers/StatsReducer";

const rootReducer = combineReducers({
                                        allDetails: StatsReducer
                                    })

const store = createStore(rootReducer)

class SquadSelectionCenter extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <SquadSelectionContainer history={this.props.history}
                                             linkName={this.props.linkName}
                                             searchPlayer={this.props.searchPlayer}/>
                </div>
            </Provider>)
    }
}

export default SquadSelectionCenter;
