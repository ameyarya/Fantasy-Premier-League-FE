import * as React from "react";
import "../Components/PlayerOverview.css"

class PlayerOverview extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        playerId: this.props.playerId,
        playerInfo: [],
        teamName: '',
        teams: [],
        initialised: false,
        statsInitialised: false,
        position: '',
        goals: 0,
        assists: 0,
        clean_sheets: 0,
        penalties_saved: 0,
        labels: []
    }

    findPlayerInfo() {
        if (this.props.allDetails.length !== 0 && !this.state.initialised) {
            const element = this.props.allDetails.elements.find(
                element => element.id === parseInt(this.state.playerId, 10));
            const name = this.props.allDetails.teams[element.team - 1].name
            this.setState({
                              playerInfo: element,
                              teams: this.props.allDetails.teams,
                              teamName: name,
                              position: this.props.allDetails.element_types[element.element_type
                                                                            - 1].singular_name,
                              initialised: true
                          })
        }

        if (this.props.playerStats.length !== 0 && !this.state.statsInitialised) {
            let totalVal = 0;
            let assists = 0;
            for (let i = 0; i < this.props.playerStats.history_past.length; i++) {
                totalVal += this.props.playerStats.history_past[i].goals_scored;
                assists += this.props.playerStats.history_past[i].assists;
            }
            let arr = [];
            if (this.state.position === "Midfielder" || this.state.position === "Forward") {
                arr = ["Goals", "Assists"]
            } else if (this.state.position === "Goalkeeper") {
                arr = ["Clean Sheets", "Penalties Saved"]
            } else {
                arr = ["Clean Sheets", "Goals"]
            }
            this.setState({
                              goals: totalVal, assists: assists, statsInitialised: true,
                              labels: arr
                          })
        }
    }

    render() {
        this.findPlayerInfo()
        return (
            <div className="container-fluid">
                <br/>
                <br/>
                <div className="row">
                    <h2>Premier League Playing Career</h2>
                </div>
                <div className="row">
                    <div className="col-3 grid-label">
                        <label className="col-form-label text-nowrap">
                            Season
                        </label>
                    </div>
                    <div className="col-3 grid-label">
                        <label className="col-form-label text-nowrap">
                            Club
                        </label>
                    </div>
                    <div className="col-2 grid-label">
                        <label className="col-form-label text-nowrap">
                            Total Points
                        </label>
                    </div>
                    <div className="col-2 grid-label">
                        <label className="col-form-label text-nowrap">
                            {this.state.labels[0]}
                        </label>
                    </div>
                    <div className="col-2 grid-label">
                        <label className="col-form-label text-nowrap">
                            {this.state.labels[1]}
                        </label>
                    </div>
                </div>
                {this.props.playerStats.length !== 0 && this.props.playerStats.history_past.map(
                    past =>
                        <div className="row">
                            <div className="col-3">
                                <label className="col-form-label text-center text-nowrap">
                                    {past.season_name}
                                </label>
                            </div>
                            <div className="col-3">
                                <label className="col-form-label text-center text-nowrap">
                                    {this.state.teamName}
                                </label>
                            </div>
                            <div className="col-2">
                                <label className="col-form-label text-center text-nowrap">
                                    {past.total_points}
                                </label>
                            </div>
                            <div className="col-2">
                                <label className="col-form-label text-center text-nowrap">
                                    {this.state.position === "Midfielder" || this.state.position
                                     === "Forward" ? past.goals_scored : this.state.position
                                                                         === "Defender" ?
                                                                         past.clean_sheets
                                                                                        : past.clean_sheets}
                                </label>
                            </div>
                            <div className="col-2">
                                <label className="col-form-label text-center text-nowrap">
                                    {this.state.position === "Midfielder" || this.state.position
                                     === "Forward" ? past.assists : this.state.position
                                                                    === "Defender" ?
                                                                    past.goals_scored
                                                                                   : past.penalties_saved}
                                </label>
                            </div>
                        </div>)}
                <br/>
            </div>
        )
    }

}

export default PlayerOverview
