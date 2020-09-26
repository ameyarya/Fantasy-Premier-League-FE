import React from "react";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import FantasyDraftNavigationComponent from "../Components/FantasyDraftNavigationComponent";
import {getAllDetails} from "../services/StatsServices";
import {connect} from "react-redux";
import {profile} from "../services/UserServices";

class HelpComponent extends React.Component {

    state = {
        playerList: [],
        teams: [],
        profile: ''
    }

    constructor(props) {
        super(props)
        this.props.getAllDetails()
    }

    async componentDidMount() {
        await this.props.getAllDetails()
        profile()
            .then(profile => this.setState({
                profile: profile
            }))
        this.setState({
                          playerList: this.props.allDetails.elements,
                          teams: this.props.allDetails.teams
                      })
    }

    render() {
        return (
            <div>
                <NavigationBarComponent history={this.props.history}
                                        players={this.props.allDetails.elements}
                                        searchPlayer={this.props.searchPlayer}
                                        profile={this.state.profile}
                                        showSearch={true}/>
                <FantasyDraftNavigationComponent history={this.props.history}
                                                 linkName={this.props.linkName}
                                                 profile={this.state.profile}/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-5">
                        <h2>Help</h2>
                        <p>Read our privacy policy from
                            <a href="/privacy-policy"> here</a>.
                        </p>
                    </div>
                    <div className="col-1"/>
                </div>
                <br/>
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-5">
                        <h4>FAQs</h4>
                        <h5>I can't sign in. What do I need to do?</h5>
                        <p>
                            Please ensure you are using your registered e-mail address and correct
                            password. Note that
                            the password is case sensitive.
                        </p>
                        <h5>I have set up a team, but I can't see my History or renew my leagues
                            from previous seasons.
                            Can you link my new account to my old one?</h5>
                        <p>
                            Unfortunately, we cannot link your history from an old account to a new
                            one. If you have set
                            up a team for this season using a different email address, you will not
                            be able to view your
                            History from previous seasons on that account.
                            In order to see previous seasons' scores, you will need to sign in on
                            the homepage using the
                            registered email address and password combination from the previous
                            seasons and set up a
                            team using that account.
                        </p>
                        <h5>Can I have more than one team?</h5>
                        <p>
                            In the interest of fair play each person may only enter one team.
                        </p>
                        <h5>Can I make changes to my squad after entering the game?</h5>
                        <p>Yes, unlimited free transfers can be made before the next deadline.</p>
                        <h5>Is there a print-friendly list of players I can view?</h5>
                        <p>We have a full player list you can view and print.</p>
                        <h5>Can I change my team name?</h5>
                        <p>Yes, you can change the name of your team any number of times.</p>
                        <br/>
                        <br/>
                    </div>

                    <div className="col-1"/>
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
(HelpComponent)
