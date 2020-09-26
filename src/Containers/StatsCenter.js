import React from "react";
import StatsReducer from "../reducers/StatsReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import StatsDashboard from "./StatsDashboard";

const rootReducer = combineReducers({
                                        allDetails: StatsReducer
                                    })

const store = createStore(rootReducer)

const StatsCenter = ({match, history, searchPlayer}) =>
    <Provider store={store}>
        <div>
            <StatsDashboard history={history}
                            searchPlayer={searchPlayer}/>
        </div>
    </Provider>

export default StatsCenter
