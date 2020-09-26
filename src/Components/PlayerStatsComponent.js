import React from "react";

class PlayerStatsComponent extends React.Component {

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
        labels: [],
        appearances: 0,
        wins: 0,
        losses: 0,
        red_cards: 0,
        yellow_cards: 0,
        minutes: 0,
        goals_conceded: 0,
        own_goals: 0,
        penalties_missed: 0,
        total_points: 0
    }

    findPlayerInfo() {

        if (this.props.playerStats.length !== 0 && !this.state.statsInitialised) {
            let totalVal = 0;
            let goals = 0;
            let wins = 0;
            let losses = 0;
            let total_points = 0;
            let rc = 0;
            let yc = 0;
            let minutes = 0;
            let clean_sheets = 0;
            let goals_conceded = 0;
            let own_goals = 0;
            let pens_saved = 0;
            let pens_missed = 0;
            let assists = 0;

            for (let i = 0; i < this.props.playerStats.history.length; i++) {
                let element = this.props.playerStats.history[i];
                totalVal = element.minutes > 0 ? totalVal + 1 : totalVal;
                goals += element.goals_scored;
                assists += element.assists;
                total_points += element.total_points;
                rc += element.red_cards;
                yc += element.yellow_cards;
                minutes += element.minutes;
                clean_sheets += element.clean_sheets;
                own_goals += element.own_goals;
                goals_conceded += element.goals_conceded;
                pens_saved += element.penalties_saved;
                pens_missed += element.penalties_missed;
                wins =
                    element.was_home ? element.team_h_score > element.team_a_score ? wins + 1 : wins
                                     :
                    element.team_h_score < element.team_a_score ? wins + 1 : wins
                losses =
                    element.was_home ? element.team_h_score < element.team_a_score ? losses + 1
                                                                                   : losses :
                    element.team_h_score > element.team_a_score ? losses + 1 : losses
            }
            this.setState({
                              appearances: totalVal,
                              statsInitialised: true,
                              wins: wins,
                              losses: losses,
                              goals: goals,
                              penalties_saved: pens_saved,
                              penalties_missed: pens_missed,
                              own_goals: own_goals,
                              red_cards: rc,
                              yellow_cards: yc,
                              total_points: total_points,
                              goals_conceded: goals_conceded,
                              clean_sheets: clean_sheets,
                              minutes: minutes,
                              assists: assists
                          })
        }
    }

    render() {
        this.findPlayerInfo()
        return (
            <div className={"container-fluid"}>
                <br/>
                <div className="row">
                    <div className="col-3"/>
                    <div className="col-6">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th className="text-center">Appearances</th>
                                <th className="text-center">Goals</th>
                                <th className="text-center">Wins</th>
                                <th className="text-center">Losses</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="text-center">{this.state.appearances}</td>
                                <td className="text-center">{this.state.goals}</td>
                                <td className="text-center">{this.state.wins}</td>
                                <td className="text-center">{this.state.losses}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-3"/>
                </div>
                <br/>
                <div className="row-cols-8">
                    <ul className="list-group">
                        <li className="list-group-item"><h2>Season Stats</h2></li>
                        <li className="list-group-item">
                            <label className="float-left">Goals scored </label>
                            <label
                                className="float-right font-weight-bold">{this.state.goals}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Goals per match </label>
                            <label className="float-right font-weight-bold">{parseFloat(
                                ((this.state.goals / this.state.appearances))).toFixed(15)}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Goals conceded </label>
                            <label
                                className="float-right font-weight-bold">{this.state.goals_conceded}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Assists</label>
                            <label
                                className="float-right font-weight-bold">{this.state.assists}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Assists per 90 minutes</label>
                            <label className="float-right font-weight-bold">{parseFloat(
                                (this.state.assists / (this.state.minutes
                                 / this.state.appearances))).toFixed(15)}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Total points</label>
                            <label
                                className="float-right font-weight-bold">{this.state.total_points}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Penalties missed</label>
                            <label
                                className="float-right font-weight-bold">{this.state.penalties_missed}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Penalties saved</label>
                            <label
                                className="float-right font-weight-bold">{this.state.penalties_saved}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Red cards</label>
                            <label
                                className="float-right font-weight-bold">{this.state.red_cards}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Yellow cards</label>
                            <label
                                className="float-right font-weight-bold">{this.state.yellow_cards}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Minutes played</label>
                            <label
                                className="float-right font-weight-bold">{this.state.minutes}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Clean sheets</label>
                            <label
                                className="float-right font-weight-bold">{this.state.clean_sheets}</label>
                        </li>
                        <li className="list-group-item">
                            <label className="float-left">Own goals</label>
                            <label
                                className="float-right font-weight-bold">{this.state.own_goals}</label>
                        </li>
                    </ul>
                    <br/>
                </div>
            </div>
        )
    }
}

export default PlayerStatsComponent;
