import React from "react";
import "../Components/Pitch.css";

class AbovePitchComponent extends React.Component {
    state = {
        edit: false,
        teamName: ''
    }

    render() {
        return (
            <div>
                <div id="squadSelectionHeader">
                    <h4 className="title"> Squad Selection</h4>
                </div>
                <div className="selectionButtons row">
                    <button className="block btn btn-primary btn-lg" onClick={() => {
                        this.props.reset()
                    }}>
                        Reset
                    </button>
                </div>
                <div className="scoreCardOuter">
                    <div className="scoreCardInner">
                        <div className="scoreBoardPanel">
                            <h6 className="title score">
                                Players Selected
                            </h6>
                            <div className="title">
                                <h3>
                                    {this.props.squadSize}/15
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="scoreCardInner">
                        <div className="scoreBoardPanel">
                            <h6 className="title score">
                                Money Remaining
                            </h6>
                            <div className="title">
                                <h3>
                                    {this.props.balance}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.props.teamName && !this.state.edit &&
                         <div className={"row"}>
                             <h1 className={"col-10"}>{this.props.teamName}</h1>
                             <button type="button" className={"btn btn-link"}
                                     onClick={() => {
                                         this.setState({edit: true})
                                     }}
                             >Edit team name
                             </button>
                         </div>
                        }
                        {this.props.teamName && this.state.edit &&
                         <div className={"row"}>
                             <input className={"col-5 m-1 form-control"}
                                    onChange={(e) => this.setState({
                                                                       teamName: e.target.value
                                                                   })}
                             />
                             <button type="button" className={"btn btn-link"}
                                     onClick={() => {
                                         this.props.editTeamName(this.state.teamName)
                                         this.setState({edit: false})
                                     }}
                             >Update team name
                             </button>
                             <button type="button" className={"btn btn-link"}
                                     onClick={() => {
                                         this.setState({edit: false})
                                     }}
                             >Cancel
                             </button>
                         </div>
                        }
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default AbovePitchComponent;
