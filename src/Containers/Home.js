import React from "react";
import StatsCenter from "./StatsCenter";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import LoginContainer from "./LoginContainer";
import SquadSelectionCenter from "./SquadSelectionCenter";
import RegisterContainer from "./RegisterContainer";
import PlayerStatsConnector from "./PlayerStatsConnector";
import Profile from "../Components/Profile";
import PrizeWinnersContainer from "./PrizeWinnersContainer";
import HelpContainer from "./HelpContainer";
import HomePageContainer from "./HomePageContainer";
import SuperUserContainer from "./SuperUserContainer";
import PrivacyPolicyContainer from "./PrivacyPolicyContainer";
import OtherUserProfile from "../Components/OtherUserProfile";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    searchPlayer = (newSearchTitle, playerList) => {
        let res = playerList.filter(element => {
            return (element.first_name.toLowerCase().includes(newSearchTitle.toLowerCase()) ||
                    element.web_name.toLowerCase().includes(newSearchTitle.toLowerCase())
                    || (element.first_name.toLowerCase() + " "
                        + element.web_name.toLowerCase()).includes(
                    newSearchTitle.toLowerCase()))

        })
        return res
    }

    render() {
        return (
            <div>
                <Router>
                    <Route
                        path={"/squad_selection"}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <SquadSelectionCenter
                                        {...props}
                                        linkName='squad_selection'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path={"/winners"}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <PrizeWinnersContainer
                                        {...props}
                                        linkName='winners'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path="/stats"
                        exact={true}
                        render={() =>
                            <div>
                                <div className={'container-fluid'}>
                                    <StatsCenter
                                        history={this.props.history}
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path="/player-details/:playerId/:fullName/overview"
                        exact={true}
                        render={(props) =>
                            <PlayerStatsConnector
                                {...props}
                                history={this.props.history}
                                playerId={props.match.params.playerId}
                                fullName={props.match.params.fullName}
                                pageType="overview"
                            />
                        }>
                    </Route>
                    <Route
                        path="/player-details/:playerId/:fullName/stats"
                        exact={true}
                        render={(props) =>
                            <PlayerStatsConnector
                                {...props}
                                history={this.props.history}
                                playerId={props.match.params.playerId}
                                fullName={props.match.params.fullName}
                                pageType="stats"
                            />
                        }>
                    </Route>
                    <Route
                        path={"/login"}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <LoginContainer
                                        {...props}
                                        linkName='login'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path={"/register"}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <RegisterContainer
                                        {...props}
                                        linkName='register'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path={"/help"}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <HelpContainer
                                        {...props}
                                        linkName='help'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path={"/profile"}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <Profile
                                        {...props}
                                        linkName='profile'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path={["/home", "/"]}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <HomePageContainer
                                        {...props}
                                        linkName='home'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path={"/superuser"}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <SuperUserContainer
                                        {...props}
                                        linkName='superuser'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path={"/privacy-policy"}
                        exact={true}
                        render={(props) =>
                            <div>
                                <div className={'container-fluid'}>
                                    <PrivacyPolicyContainer
                                        {...props}
                                        linkName='privacy-policy'
                                        searchPlayer={this.searchPlayer}/>
                                </div>
                            </div>
                        }>
                    </Route>
                    <Route
                        path="/profile/:userId"
                        exact={true}
                        render={(props) =>
                            <OtherUserProfile
                                {...props}
                                history={this.props.history}
                                userId={props.match.params.userId}
                            />
                        }>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default Home;
