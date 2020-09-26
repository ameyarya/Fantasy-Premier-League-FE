import React from "react";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import FantasyDraftNavigationComponent from "../Components/FantasyDraftNavigationComponent";
import {getAllDetails} from "../services/StatsServices";
import {connect} from "react-redux";

class PrivacyPolicyComponent extends React.Component {

    state = {
        playerList: [],
        teams: []
    }

    constructor(props) {
        super(props)
        this.props.getAllDetails()
    }

    async componentDidMount() {
        await this.props.getAllDetails()
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
                                                 linkName={this.props.linkName}/>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-5">
                        <h2>Privacy Policy</h2>
                    </div>
                    <div className="col-1"/>
                </div>
                <br/>
                <div className="row">
                    <div className="col-1"/>
                    <div className="col-5">
                        <h5>Last Updated: 4/18/2020</h5>
                        <br/>
                        <p>
                            We take your privacy and are committed to protecting your personal data.
                            This refers to any
                            information about you from which you can be identified. This Privacy
                            Policy explains what
                            personal data we collect from you when you: access our website
                            <a href="http://fpl-react.herokuapp.com/home"
                               target="_blank"> here</a> and the data
                            protection practices that we adhere to. We
                            refer to these products and services collectively as the "Services."
                        </p>
                        <p>
                            We will ensure that the personal data we hold about you is, at all
                            times:
                            <ol>
                                <li>Used fairly, lawfully, and transparently</li>
                                <li>Collected for limited, specific purposes only</li>
                                <li>Adequate, relevant to and limited to what is necessary for those
                                    purposes
                                </li>
                                <li>Kept accurate and up-to-date</li>
                                <li>Not kept for longer than is necessary</li>
                                <li>Held securely</li>
                            </ol>
                        </p>
                        <strong>
                            PLEASE READ THIS PRIVACY POLICY CAREFULLY TO UNDERSTAND HOW WE HANDLE
                            YOUR
                            INFORMATION. IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, PLEASE DO NOT
                            USE THE
                            SERVICES.
                        </strong>
                        <br/>
                        <br/>
                        <strong>
                            THE INFORMATION WE COLLECT:
                        </strong>
                        <p>
                            We collect the information in the following ways:
                        </p>
                        <p>
                            <ol>
                                <li><u>Registration Information</u>: When you register for an
                                    account on the Services,
                                    we
                                    collect
                                    your first name , last name , email address (which becomes your
                                    username), password
                                    and team name for the team you make. Please note that some
                                    elements of the Services
                                    will not be available if you do not provide the required
                                    information. We may also
                                    ask or
                                    allow you to submit other optional information.
                                </li>
                                <li><u>User Information</u>: We collect your usage and preference
                                    details related to
                                    your use
                                    of the
                                    Services such as language, game-play statistics, scores,
                                    rankings, time spent
                                    playing, game
                                    profile, preferences (including favorite Clubs), feedback and
                                    other data that you
                                    provide
                                    to us as part of your account.
                                </li>
                            </ol>
                            <strong>HOW WE USE THE INFORMATION COLLECTED:</strong>

                            <p>
                                We use the information that we collect through our Services for a
                                variety of purposes,
                                including
                                the following business and commercial purposes:
                            </p>
                            <ol>
                                <li><u>Delivering the Services</u>: We use the User Data so that we
                                    can deliver the
                                    Services to
                                    you
                                    in an effective, efficient and accurate way. This is for us to
                                    analyze your
                                    interests in a
                                    club
                                    or player based on which we can suggest proper recommendations.
                                    This can help you
                                    pick
                                    a player for the team based on the resources available. Based on
                                    the information
                                    collected, we also intend to show highlights, interviews and
                                    newsletters of the
                                    favorite
                                    club/player on the home page so that you don’t spend time to
                                    peruse through the
                                    papers
                                    and web to get your news bites. In short, this will help us
                                    amplify the user
                                    experience by
                                    targeted marketing.
                                </li>
                                <li><u>Competitions and Promotions</u>: We use the Registration
                                    Data, particularly the
                                    name and
                                    contact details to inform you of news, offers, events,
                                    promotions and upcoming
                                    competitions. We also send you updates of how your team has
                                    performed in the
                                    previous
                                    tournaments and any alteration in your resources.
                                </li>
                            </ol>
                            <strong>YOUR RIGHTS:</strong>
                            <ol>
                                <li><u>Request access</u>: This enables you to receive a copy of the
                                    personal
                                    information we
                                    hold
                                    about you and to check that we are using it lawfully, provided
                                    always that this does
                                    not
                                    adversely affect the rights and freedoms of other people.
                                </li>
                                <li><u>Request correction</u>: If any of the information we hold
                                    about you is incorrect
                                    or
                                    incomplete
                                    we will act promptly to rectify this, including where you have
                                    requested us to do
                                    so.
                                </li>
                                <li><u>Request deletion</u>: This enables you to ask us to delete or
                                    remove personal
                                    data when
                                    there is no good reason for us continuing to use it. In addition
                                    to this, you also
                                    have the
                                    right to delete your own account and this will wipe the data we
                                    have on you.
                                </li>
                                <li><u>Consent on information sharing</u>: We do NOT intend to share
                                    your information to
                                    any
                                    third-party vendors. In future, if we do share the information,
                                    we will always
                                    communicate with you to ask for your consent.
                                </li>
                            </ol>
                            <p>If you have any questions about this Privacy Policy or how we handle
                                your personal data,
                                please
                                contact us using the following contact details:</p>
                            <ul>
                                <li>Mohammad Owais: <a
                                    href="mailto:ahmed.moham@northeastern.edu">ahmed.moham@northeastern.edu</a>
                                </li>
                                <li>Anurag Shubham: <a
                                    href="mailto:shubham.a@northeastern.edu">shubham.a@northeastern.edu</a>
                                </li>
                                <li>Amey Arya: <a
                                    href="mailto:arya.am@northeastern.edu">arya.am@northeastern.edu</a>
                                </li>
                                <li>Nikhita Singh: <a
                                    href="mailto:singh.nikhi@northeastern.edu">singh.nikhi@northeastern.edu</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="col-1"/>
                <br/>
                <br/>
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
(PrivacyPolicyComponent)
