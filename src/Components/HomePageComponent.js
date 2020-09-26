import React from "react";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import FantasyDraftNavigationComponent from "../Components/FantasyDraftNavigationComponent";
import {getAllDetails} from "../services/StatsServices";
import {connect} from "react-redux";
import {profile} from "../services/UserServices";

class HomePageComponent extends React.Component {

    state = {
        playerList: [],
        teams: [],
        profile: null
    }

    constructor(props) {
        super(props)
        this.props.getAllDetails()
    }

    async componentDidMount() {
        await this.props.getAllDetails()
        profile()
            .then(profile => {
                      if (profile) {
                          this.setState({
                                            profile: profile
                                        })
                      }
                  }
            )
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
                        <h3>Welcome to Fantasy Premier League</h3>
                    </div>
                    <div className="col-1"/>
                </div>
                <br/>
                {!this.state.profile &&
                 <div className="row">
                     <div className="col-3"/>
                     <div className="col-6">
                         <div className="card h-100 text-white">
                             <div className="card-body text-center">
                                 <h5 className="card-title text-success">Register to Play Fantasy
                                     Premier League</h5>
                                 <p className="card-text text-black-50">
                                     With over 6 million players, Fantasy Premier League is the
                                     biggest Fantasy Football
                                     game in the world. It’s FREE to play and you can win great
                                     prizes!
                                 </p>
                                 <button className="block btn btn-success btn-md"
                                         onClick={() => {
                                             this.setState(
                                                 {
                                                     selectedSegment: 'register'
                                                 })
                                             this.props.history.push(`/register`)
                                         }
                                         }>
                                     Register Now!
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>
                }
                {this.state.profile &&
                 <div className="row">
                     <div className="col-3"/>
                     <div className="col-6">
                         <div className="card h-100 text-white">
                             <div className="card-body text-center">
                                 <h5 className="card-title text-success">Pick Your Squad</h5>
                                 <p className="card-text text-black-50">
                                     Use your budget of £100m to pick a squad of 15 players from the
                                     Premier League.
                                 </p>
                                 <br/>
                                 <button className="block btn btn-success btn-md"
                                         onClick={() => {
                                             this.setState(
                                                 {
                                                     selectedSegment: 'squad_selection'
                                                 })
                                             this.props.history.push(`/squad_selection`)
                                         }
                                         }>
                                     Pick Your Squad Now!
                                 </button>
                             </div>
                         </div>
                     </div>
                 </div>}
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
(HomePageComponent)
