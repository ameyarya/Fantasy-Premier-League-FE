import React from "react";
import "../Components/Pitch.css";

class MidComponent extends React.Component {
    state = {
        position: 3,
        activeForMid1: false,
        activeForMid2: false,
        activeForMid3: false,
        activeForMid4: false,
        activeForMid5: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.teamListMid !== this.props.teamListMid && this.props.teamListMid.length
            === 5) {
            this.setState({
                              activeForMid1: true,
                              activeForMid2: true,
                              activeForMid3: true,
                              activeForMid4: true,
                              activeForMid5: true
                          })
        }
    }

    render() {
        return (
            <div className={"addPlayerStrip"}>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForMid1 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForMid1: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForMid1 &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && this.state.activeForMid1
                         && this.props.teamListMid.length &&
                         <h6 className="playerDescription title">{this.props.teamListMid[0]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForMid2 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForMid1) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForMid2: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForMid2 &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && this.state.activeForMid2
                         && this.props.teamListMid.length &&
                         <h6 className="playerDescription title">{this.props.teamListMid[1]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForMid3 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForMid1 || !this.state.activeForMid2) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForMid3: true});
                                }}>
                        </button>
                        {console.log("1" + this.props.playerAdded)}
                        {console.log("2" + this.state.activeForMid1)}
                        {console.log("3" + this.state.activeForMid2)}
                        {console.log("4" + this.state.activeForMid3)}
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForMid3 &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && this.state.activeForMid3
                         && this.props.teamListMid.length &&
                         <h6 className="playerDescription title">{this.props.teamListMid[2]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForMid4 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForMid1 || !this.state.activeForMid2
                                        || !this.state.activeForMid3) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForMid4: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForMid4 &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && this.state.activeForMid4
                         && this.props.teamListMid.length &&
                         <h6 className="playerDescription title">{this.props.teamListMid[3]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForMid5 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForMid1 || !this.state.activeForMid2
                                        || !this.state.activeForMid3 || !this.state.activeForMid4) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForMid5: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForMid5 &&
                         <h6 className="playerDescription title">ADD MID</h6>
                        }
                        {this.props.playerAdded && this.state.activeForMid5
                         && this.props.teamListMid.length &&
                         <h6 className="playerDescription title">{this.props.teamListMid[4]}</h6>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MidComponent;
