import React from "react";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import FantasyDraftNavigationComponent from "../Components/FantasyDraftNavigationComponent";
import {getAllTeams, getTeamUserId} from "../services/TeamServices";
import {connect} from "react-redux";
import {getAllDetails} from "../services/StatsServices";
import {profile} from "../services/UserServices";
import {Link} from "react-router-dom";

class PrizeWinnersComponent extends React.Component {

    state = {
        allTeams: [],
        gameWeeks: ["Game Week 1", "Game Week 2", "Game Week 3", "Game Week 4", "Game Week 5",
                    "Game Week 6", "Game Week 7", "Game Week 8", "Game Week 9", "Game Week 10",
                    "Game Week 11", "Game Week 12", "Game Week 13", "Game Week 14", "Game Week 15",
                    "Game Week 16", "Game Week 17", "Game Week 18", "Game Week 19", "Game Week 20",
                    "Game Week 21", "Game Week 22", "Game Week 23", "Game Week 24", "Game Week 25",
                    "Game Week 26", "Game Week 27", "Game Week 28", "Game Week 29", "Game Week 30",
                    "Game Week 31", "Game Week 32", "Game Week 33", "Game Week 34", "Game Week 35",
                    "Game Week 36", "Game Week 37", "Game Week 38"],
        gameWeek: "Game Week 1",
        profile: '',
        val: 0,
        userId: []
    }

    sortByPriceDesc() {
        this.setState(prevState => {
            this.props.allTeams.sort((a, b) => (b.gameWeek.gameWeek2) - (a.gameWeek.gameWeek2))
        });
    }

    constructor(props) {
        super(props)
        this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
        this.props.getAllTeams()
    }

    async componentDidMount() {
        await this.props.getAllDetails()
        await this.props.getAllTeams()
        this.setState({
                          allTeams: this.props.allTeams
                      })
        {
            this.props.allTeams &&
            this.props.allTeams.filter(
                team => team.gameWeek !== null).map(team => {
                                                        getTeamUserId(team.teamId)
                                                            .then(val => this.setState({
                                                                                           userId: this.state.userId.concat(val)
                                                                                       }))
                                                    }
            )
        }

        profile()
            .then(profile => this.setState({
                                               profile: profile
                                           }))
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
                <h2>Prize Winners</h2>
                <br/>
                <div className="row">
                    <div className="col-3"/>
                    <div className="col-5">
                        <h3> Gameweek Winners</h3>
                        <select id="filter" className="FieldRenderers_Select form-control title"
                                onChange={(e) => {
                                    this.setState({
                                                      gameWeek: e.target.value
                                                  })

                                }}>
                            <optgroup label="By GameWeek">
                                {this.state.gameWeeks.map(gameWeek => (
                                    <option value={gameWeek} aria-selected="false">
                                        {gameWeek}
                                    </option>
                                ))}
                            </optgroup>
                        </select>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3"/>
                    <div className="col-2 grid-label text-xs-center">
                        <label className="col-form-label">
                            Rank
                        </label>
                    </div>
                    <div className="col-2 grid-label text-xs-center">
                        <label className="col-form-label">
                            Team
                        </label>
                    </div>
                    <div className="col-2 grid-label text-xs-center">
                        <label className="col-form-label">
                            GW Pts
                        </label>
                    </div>
                </div>
                {console.log(this.props.allTeams)}
                {this.props.allTeams &&
                 this.props.allTeams.filter(
                     team => team.gameWeek !== null)
                     .sort((a, b) =>
                               this.state.gameWeek === "Game Week 1" ?
                               (b.gameWeek.gameWeek1) - (a.gameWeek.gameWeek1) :
                               this.state.gameWeek === "Game Week 2" ?
                               (b.gameWeek.gameWeek2) - (a.gameWeek.gameWeek2) :
                               this.state.gameWeek === "Game Week 3" ?
                               (b.gameWeek.gameWeek3) - (a.gameWeek.gameWeek3) :
                               this.state.gameWeek === "Game Week 4" ?
                               (b.gameWeek.gameWeek4) - (a.gameWeek.gameWeek4) :
                               this.state.gameWeek === "Game Week 5" ?
                               (b.gameWeek.gameWeek5) - (a.gameWeek.gameWeek5) :
                               this.state.gameWeek === "Game Week 6" ?
                               (b.gameWeek.gameWeek6) - (a.gameWeek.gameWeek6) :
                               this.state.gameWeek === "Game Week 7" ?
                               (b.gameWeek.gameWeek7) - (a.gameWeek.gameWeek7) :
                               this.state.gameWeek === "Game Week 8" ?
                               (b.gameWeek.gameWeek8) - (a.gameWeek.gameWeek8) :
                               this.state.gameWeek === "Game Week 9" ?
                               (b.gameWeek.gameWeek9) - (a.gameWeek.gameWeek9) :
                               this.state.gameWeek === "Game Week 10" ?
                               (b.gameWeek.gameWeek10) - (a.gameWeek.gameWeek10) :
                               this.state.gameWeek === "Game Week 11" ?
                               (b.gameWeek.gameWeek11) - (a.gameWeek.gameWeek11) :
                               this.state.gameWeek === "Game Week 12" ?
                               (b.gameWeek.gameWeek12) - (a.gameWeek.gameWeek12) :
                               this.state.gameWeek === "Game Week 13" ?
                               (b.gameWeek.gameWeek13) - (a.gameWeek.gameWeek13) :
                               this.state.gameWeek === "Game Week 14" ?
                               (b.gameWeek.gameWeek14) - (a.gameWeek.gameWeek14) :
                               this.state.gameWeek === "Game Week 15" ?
                               (b.gameWeek.gameWeek15) - (a.gameWeek.gameWeek15) :
                               this.state.gameWeek === "Game Week 16" ?
                               (b.gameWeek.gameWeek16) - (a.gameWeek.gameWeek16) :
                               this.state.gameWeek === "Game Week 17" ?
                               (b.gameWeek.gameWeek17) - (a.gameWeek.gameWeek17) :
                               this.state.gameWeek === "Game Week 18" ?
                               (b.gameWeek.gameWeek18) - (a.gameWeek.gameWeek18) :
                               this.state.gameWeek === "Game Week 19" ?
                               (b.gameWeek.gameWeek19) - (a.gameWeek.gameWeek19) :
                               this.state.gameWeek === "Game Week 20" ?
                               (b.gameWeek.gameWeek20) - (a.gameWeek.gameWeek20) :
                               this.state.gameWeek === "Game Week 21" ?
                               (b.gameWeek.gameWeek21) - (a.gameWeek.gameWeek21) :
                               this.state.gameWeek === "Game Week 22" ?
                               (b.gameWeek.gameWeek22) - (a.gameWeek.gameWeek22) :
                               this.state.gameWeek === "Game Week 23" ?
                               (b.gameWeek.gameWeek23) - (a.gameWeek.gameWeek23) :
                               this.state.gameWeek === "Game Week 24" ?
                               (b.gameWeek.gameWeek24) - (a.gameWeek.gameWeek24) :
                               this.state.gameWeek === "Game Week 25" ?
                               (b.gameWeek.gameWeek25) - (a.gameWeek.gameWeek25) :
                               this.state.gameWeek === "Game Week 26" ?
                               (b.gameWeek.gameWeek26) - (a.gameWeek.gameWeek26) :
                               this.state.gameWeek === "Game Week 27" ?
                               (b.gameWeek.gameWeek27) - (a.gameWeek.gameWeek27) :
                               this.state.gameWeek === "Game Week 28" ?
                               (b.gameWeek.gameWeek28) - (a.gameWeek.gameWeek28) :
                               this.state.gameWeek === "Game Week 29" ?
                               (b.gameWeek.gameWeek29) - (a.gameWeek.gameWeek29) :
                               this.state.gameWeek === "Game Week 30" ?
                               (b.gameWeek.gameWeek30) - (a.gameWeek.gameWeek30) :
                               this.state.gameWeek === "Game Week 31" ?
                               (b.gameWeek.gameWeek31) - (a.gameWeek.gameWeek31) :
                               this.state.gameWeek === "Game Week 32" ?
                               (b.gameWeek.gameWeek32) - (a.gameWeek.gameWeek32) :
                               this.state.gameWeek === "Game Week 33" ?
                               (b.gameWeek.gameWeek33) - (a.gameWeek.gameWeek33) :
                               this.state.gameWeek === "Game Week 34" ?
                               (b.gameWeek.gameWeek34) - (a.gameWeek.gameWeek34) :
                               this.state.gameWeek === "Game Week 35" ?
                               (b.gameWeek.gameWeek35) - (a.gameWeek.gameWeek35) :
                               this.state.gameWeek === "Game Week 36" ?
                               (b.gameWeek.gameWeek36) - (a.gameWeek.gameWeek36) :
                               this.state.gameWeek === "Game Week 37" ?
                               (b.gameWeek.gameWeek37) - (a.gameWeek.gameWeek37) :
                               (b.gameWeek.gameWeek38) - (a.gameWeek.gameWeek38))
                     .map((team, index) =>
                              <div className="row">
                                  <div className="col-3"/>
                                  <div className="col-2">
                                      <label
                                          className="col-form-label text-xs-center">
                                          {index + 1}
                                      </label>
                                  </div>
                                  <div className="col-2">
                                      <label
                                          className="col-form-label text-xs-center">
                                          <Link to={`/profile/${this.state.userId[index]}`}>
                                              {team.teamName}
                                          </Link>
                                      </label>
                                  </div>
                                  <div className="col-2">
                                      <label
                                          className="col-form-label text-xs-center">
                                          {this.state.gameWeek === "Game Week 1" ?
                                           team.gameWeek.gameWeek1 :
                                           this.state.gameWeek === "Game Week 2" ?
                                           team.gameWeek.gameWeek2 :
                                           this.state.gameWeek === "Game Week 3" ?
                                           team.gameWeek.gameWeek3 :
                                           this.state.gameWeek === "Game Week 4" ?
                                           team.gameWeek.gameWeek4 :
                                           this.state.gameWeek === "Game Week 5" ?
                                           team.gameWeek.gameWeek5 :
                                           this.state.gameWeek === "Game Week 6" ?
                                           team.gameWeek.gameWeek6 :
                                           this.state.gameWeek === "Game Week 7" ?
                                           team.gameWeek.gameWeek7 :
                                           this.state.gameWeek === "Game Week 8" ?
                                           team.gameWeek.gameWeek8 :
                                           this.state.gameWeek === "Game Week 9" ?
                                           team.gameWeek.gameWeek9 :
                                           this.state.gameWeek === "Game Week 10" ?
                                           team.gameWeek.gameWeek10 :
                                           this.state.gameWeek === "Game Week 11" ?
                                           team.gameWeek.gameWeek11 :
                                           this.state.gameWeek === "Game Week 12" ?
                                           team.gameWeek.gameWeek12 :
                                           this.state.gameWeek === "Game Week 13" ?
                                           team.gameWeek.gameWeek13 :
                                           this.state.gameWeek === "Game Week 14" ?
                                           team.gameWeek.gameWeek14 :
                                           this.state.gameWeek === "Game Week 15" ?
                                           team.gameWeek.gameWeek15 :
                                           this.state.gameWeek === "Game Week 16" ?
                                           team.gameWeek.gameWeek16 :
                                           this.state.gameWeek === "Game Week 17" ?
                                           team.gameWeek.gameWeek17 :
                                           this.state.gameWeek === "Game Week 18" ?
                                           team.gameWeek.gameWeek18 :
                                           this.state.gameWeek === "Game Week 19" ?
                                           team.gameWeek.gameWeek19 :
                                           this.state.gameWeek === "Game Week 20" ?
                                           team.gameWeek.gameWeek20 :
                                           this.state.gameWeek === "Game Week 21" ?
                                           team.gameWeek.gameWeek21 :
                                           this.state.gameWeek === "Game Week 22" ?
                                           team.gameWeek.gameWeek22 :
                                           this.state.gameWeek === "Game Week 23" ?
                                           team.gameWeek.gameWeek23 :
                                           this.state.gameWeek === "Game Week 24" ?
                                           team.gameWeek.gameWeek24 :
                                           this.state.gameWeek === "Game Week 25" ?
                                           team.gameWeek.gameWeek25 :
                                           this.state.gameWeek === "Game Week 26" ?
                                           team.gameWeek.gameWeek26 :
                                           this.state.gameWeek === "Game Week 27" ?
                                           team.gameWeek.gameWeek27 :
                                           this.state.gameWeek === "Game Week 28" ?
                                           team.gameWeek.gameWeek28 :
                                           this.state.gameWeek === "Game Week 29" ?
                                           team.gameWeek.gameWeek29 :
                                           this.state.gameWeek === "Game Week 30" ?
                                           team.gameWeek.gameWeek30 :
                                           this.state.gameWeek === "Game Week 31" ?
                                           team.gameWeek.gameWeek31 :
                                           this.state.gameWeek === "Game Week 32" ?
                                           team.gameWeek.gameWeek32 :
                                           this.state.gameWeek === "Game Week 33" ?
                                           team.gameWeek.gameWeek33 :
                                           this.state.gameWeek === "Game Week 34" ?
                                           team.gameWeek.gameWeek34 :
                                           this.state.gameWeek === "Game Week 35" ?
                                           team.gameWeek.gameWeek35 :
                                           this.state.gameWeek === "Game Week 36" ?
                                           team.gameWeek.gameWeek36 :
                                           this.state.gameWeek === "Game Week 37" ?
                                           team.gameWeek.gameWeek37 :
                                           team.gameWeek.gameWeek38}
                                      </label>
                                  </div>
                              </div>
                     )
                }
                <br/>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    allDetails: state.allDetails.allDetails,
    allTeams: state.allTeams.allTeams
})

const dispatchToPropertyMapper = (dispatcher) => ({
    getAllDetails: () =>
        getAllDetails()
            .then(allDetails => dispatcher({
                                               type: "GET_ALL_DETAILS",
                                               allDetails: allDetails
                                           })),
    getAllTeams: () =>
        getAllTeams()
            .then(allTeams => dispatcher({
                                             type: "GET_ALL_TEAMS",
                                             allTeams: allTeams
                                         }))

})

export default connect
(stateToPropertyMapper, dispatchToPropertyMapper)
(PrizeWinnersComponent)
