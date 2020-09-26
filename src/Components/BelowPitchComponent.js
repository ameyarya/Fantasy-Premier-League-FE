import React from "react";
import "../Components/Pitch.css";

class BelowPitchComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="saveButton">
                    {this.props.updateSquad && <button
                        className="saveBtn btn btn-primary btn-lg title"
                        onClick={() => this.props.updateTeam()}>
                        Update squad
                    </button>}
                    {!this.props.updateSquad && <button
                        className="saveBtn btn btn-primary btn-lg title"
                        onClick={() => this.props.enterSquad()}>
                        Enter squad
                    </button>}
                </div>
                {console.log(this.props.simulate)}
                {this.props.simulate && this.props.updateSquad && <div className="saveButton">
                    <button className="saveBtn btn btn-primary btn-lg title"
                            onClick={() => {
                                let message = "Once you run the simulation, the squad with which you run the simulation"
                                              + "will be considered your entry for the game weeks that have been "
                                              + "completed. You will be able to update your squad after the simulation "
                                              + "but the updated squad will be applicable only for the upcoming game weeks."
                                              + "Are you sure you want to run the simulation?"
                                if (window.confirm(message)) {
                                    this.props.simulateGameWeeks()
                                }
                            }
                            }>
                        Simulate
                    </button>
                </div>}
                {this.props.gameWeekPoints &&
                 <table className={"table"}>
                     <thead className={"thead-dark"}>
                     <tr>
                         <th scope={"col"}>GameWeekID</th>
                         <th scope={"col"}>Points earned</th>
                     </tr>
                     </thead>
                     <tbody>
                     {Object.keys(this.props.gameWeekPoints).map(gameWeek =>
                                                                     gameWeek !== 'gameWeekID'
                                                                     && this.props.gameWeekPoints[gameWeek]
                                                                     !== null
                                                                     && <tr>
                                                                         <th scope={"row"}>{gameWeek}</th>
                                                                         <td>{this.props.gameWeekPoints[gameWeek]}</td>
                                                                     </tr>
                     )}
                     </tbody>
                 </table>}
            </div>
        )
    }
}

export default BelowPitchComponent;
