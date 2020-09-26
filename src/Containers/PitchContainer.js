import React from "react";
import AbovePitchComponent from "../Components/AbovePitchComponent";
import "../Components/Pitch.css";
import GKComponent from "../Components/GKComponent";
import DefComponent from "../Components/DefComponent";
import MidComponent from "../Components/MidComponent";
import StrComponent from "../Components/StrComponent";
import BelowPitchComponent from "../Components/BelowPitchComponent";

class PitchContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"selectionBody"}>
                <div className={"squadSelection"}>
                    <AbovePitchComponent balance={this.props.balance}
                                         squadSize={this.props.squadSize}
                                         reset={this.props.reset}
                                         teamName={this.props.teamName}
                                         editTeamName={this.props.editTeamName}
                    />
                    <div className="pitchOuterDiv">
                        <div className="pitch">
                            <GKComponent setPosition={this.props.setPosition}
                                         playerAdded={this.props.playerAdded}
                                         setPlayerAdded={this.props.setPlayerAdded}
                                         playerName={this.props.playerName}
                                         teamListGK={this.props.teamListGK}
                            />
                            <DefComponent setPosition={this.props.setPosition}
                                          playerAdded={this.props.playerAdded}
                                          playerName={this.props.playerName}
                                          teamListDef={this.props.teamListDef}/>
                            <MidComponent setPosition={this.props.setPosition}
                                          playerAdded={this.props.playerAdded}
                                          playerName={this.props.playerName}
                                          teamListMid={this.props.teamListMid}/>
                            <StrComponent setPosition={this.props.setPosition}
                                          playerAdded={this.props.playerAdded}
                                          playerName={this.props.playerName}
                                          teamListStr={this.props.teamListStr}/>
                        </div>
                    </div>
                    <BelowPitchComponent enterSquad={this.props.enterSquad}
                                         simulate={this.props.simulate}
                                         simulateGameWeeks={this.props.simulateGameWeeks}
                                         gameWeekPoints={this.props.gameWeekPoints}
                                         updateSquad={this.props.updateSquad}
                                         updateTeam={this.props.updateTeam}/>
                </div>
            </div>
        )
    }
}

export default PitchContainer;
