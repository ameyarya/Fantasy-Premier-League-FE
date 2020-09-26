import React from "react";
import "../Components/Pitch.css";

class GKComponent extends React.Component {
    state = {
        position: 1,
        activeForGKP1: false,
        activeForGKP2: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.teamListGK !== this.props.teamListGK && this.props.teamListGK.length === 2) {
            this.setState({
                              activeForGKP1: true,
                              activeForGKP2: true
                          })
        }
    }

    render() {
        return (
            <div className={"addPlayerStrip"}>
                <div className="addPlayerBlock1">
                </div>
                <div className="addPlayerBlock1">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForGKP1 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForGKP1: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD GKP</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForGKP1 &&
                         <h6 className="playerDescription title">ADD GKP</h6>
                        }
                        {
                            this.props.playerAdded && this.state.activeForGKP1
                            && this.props.teamListGK.length &&
                            <h6 className="playerDescription title">{this.props.teamListGK[0]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock1">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForGKP2 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForGKP1) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForGKP2: true});
                                }}>
                        </button>
                        {!this.props.playerAdded && !this.state.activeForGKP2 &&
                         <h6 className="playerDescription title">ADD GKP</h6>
                        }
                        {!this.props.playerAdded && this.state.activeForGKP2 &&
                         <h6 className="playerDescription title">ADD GKP</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForGKP2 &&
                         <h6 className="playerDescription title">ADD GKP</h6>
                        }
                        {this.props.playerAdded && this.state.activeForGKP2
                         && this.props.teamListGK.length &&
                         <h6 className="playerDescription title">{this.props.teamListGK[1]}</h6>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default GKComponent;
