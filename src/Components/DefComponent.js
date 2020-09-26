import React from "react";
import "../Components/Pitch.css";

class DefComponent extends React.Component {
    state = {
        position: 2,
        activeForDef1: false,
        activeForDef2: false,
        activeForDef3: false,
        activeForDef4: false,
        activeForDef5: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.teamListDef !== this.props.teamListDef && this.props.teamListDef.length
            === 5) {
            this.setState({
                              activeForDef1: true,
                              activeForDef2: true,
                              activeForDef3: true,
                              activeForDef4: true,
                              activeForDef5: true
                          })
        }
    }

    render() {
        return (
            <div className={"addPlayerStrip"}>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForDef1 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForDef1: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForDef1 &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && this.state.activeForDef1
                         && this.props.teamListDef.length &&
                         <h6 className="playerDescription title">{this.props.teamListDef[0]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForDef2 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForDef1) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForDef2: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForDef2 &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && this.state.activeForDef2
                         && this.props.teamListDef.length &&
                         <h6 className="playerDescription title">{this.props.teamListDef[1]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForDef3 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForDef2 || !this.state.activeForDef1) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForDef3: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForDef3 &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && this.state.activeForDef3
                         && this.props.teamListDef.length &&
                         <h6 className="playerDescription title">{this.props.teamListDef[2]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForDef4 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForDef3 || !this.state.activeForDef2
                                        || !this.state.activeForDef1) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForDef4: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForDef4 &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && this.state.activeForDef4
                         && this.props.teamListDef.length &&
                         <h6 className="playerDescription title">{this.props.teamListDef[3]}</h6>
                        }
                    </div>
                </div>
                <div className="addPlayerBlock2">
                    <div className="addPlayerDiv">
                        <button className={`${this.state.activeForDef5 && this.props.playerAdded
                                              ? 'addedPlayer' : 'addPlayer'}`}
                                onClick={() => {
                                    if (!this.state.activeForDef3 || !this.state.activeForDef2
                                        || !this.state.activeForDef1 || !this.state.activeForDef4) {
                                        alert("Disabled, please add previous player(s) first!")
                                    }
                                    this.props.setPosition(this.state.position);
                                    this.setState({activeForDef5: true});
                                }}>
                        </button>
                        {!this.props.playerAdded &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && !this.state.activeForDef5 &&
                         <h6 className="playerDescription title">ADD DEF</h6>
                        }
                        {this.props.playerAdded && this.state.activeForDef5
                         && this.props.teamListDef.length &&
                         <h6 className="playerDescription title">{this.props.teamListDef[4]}</h6>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DefComponent;
