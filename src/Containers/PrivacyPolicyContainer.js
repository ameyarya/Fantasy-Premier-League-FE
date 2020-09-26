import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import StatsReducer from "../reducers/StatsReducer";
import PrivacyPolicyComponent from "../Components/PrivacyPolicyComponent";

const rootReducer = combineReducers({
                                        allDetails: StatsReducer
                                    })

const store = createStore(rootReducer)

class PrivacyPolicyContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <PrivacyPolicyComponent history={this.props.history}
                                            searchPlayer={this.props.searchPlayer}
                                            linkName={this.props.linkName}/>
                </div>
            </Provider>)
    }
}

export default PrivacyPolicyContainer;
