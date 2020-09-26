import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import StatsReducer from "../reducers/StatsReducer";
import HelpComponent from "../Components/HelpComponent";

const rootReducer = combineReducers({
                                        allDetails: StatsReducer
                                    })

const store = createStore(rootReducer)

class HelpContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <HelpComponent history={this.props.history}
                                   searchPlayer={this.props.searchPlayer}
                                   linkName={this.props.linkName}/>
                </div>
            </Provider>)
    }
}

export default HelpContainer;
