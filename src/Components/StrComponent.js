import React from "react";
import "../Components/Pitch.css";

class StrComponent extends React.Component {
    state = {
        position: 4,
        activeForStr1: false,
        activeForStr2: false,
        activeForStr3: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.teamListStr !== this.props.teamListStr && this.props.teamListStr.length
            === 3) {
            this.setState({
                              activeForStr1: true,
                              activeForStr2: true,
                              activeForStr3: true
                          })
        }
    }

    render() {
        return (
            <div className={"addPlayerStrip"}>
                <div className={"addPlayerBlock2"}>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForStr1 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForStr1: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD FWD</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForStr1 &&
                         <h6 className="playerDescription title">ADD FWD</h6>
                        }
                        {this.props.playerAdded && this.state.activeForStr1
                         && this.props.teamListStr.length &&
                         <h6 className="playerDescription title">{this.props.teamListStr[0]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForStr2 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForStr1) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForStr2: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD FWD</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForStr2 &&
                         <h6 className="playerDescription title">ADD FWD</h6>
                        }
                        {this.props.playerAdded && this.state.activeForStr2
                         && this.props.teamListStr.length &&
                         <h6 className="playerDescription title">{this.props.teamListStr[1]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForStr3 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForStr1 || !this.state.activeForStr2) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForStr3: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD FWD</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForStr3 &&
                         <h6 className="playerDescription title">ADD FWD</h6>
                        }
                        {this.props.playerAdded && this.state.activeForStr3
                         && this.props.teamListStr.length &&
                         <h6 className="playerDescription title">{this.props.teamListStr[2]}</h6>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default StrComponent;
