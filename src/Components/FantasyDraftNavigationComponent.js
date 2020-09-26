import React from "react";
import "../Components/FantasyDraftNavigationComponent.css";
import {profile, logout} from "../services/UserServices";

class FantasyDraftNavigationComponent extends React.Component {

    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }

    logout = () => {
        profile().then(user => console.log(user))
        logout()
            .then(status => {
                status.status === 200 ?
                this.props.history.push('/login') : console.log(status.statusText)
            })
    }

    state = {
        selectedSegment: this.props.linkName
    }

    render() {
        return (
            <div className="image-div">
                <div className="imageWrapper">
                    <h1><strong>Fantasy Premier League</strong></h1>
                </div>
                <div className="navForSlider">
                    <ul className="nav nav-tabs">
                        <li className="nav-item navSliderPills"
                            onClick={() => {
                                this.setState(
                                    {
                                        selectedSegment: 'home'
                                    })
                                this.props.history.push(`/home`)
                            }
                            }>
                            <a className={`nav-link
                                            ${(this.state.selectedSegment === 'home')
                                              ? 'active text-black' : 'text-white'}`}>Home</a>
                        </li>
                        <li className="nav-item navSliderPills"
                            onClick={() => {
                                this.props.history.push(`/squad_selection`)
                                this.setState(
                                    {
                                        selectedSegment: 'squad_selection'
                                    })
                            }
                            }>
                            <a className={`nav-link
                                            ${(this.state.selectedSegment === 'squad_selection')
                                              ? 'active text-black' : 'text-white'}`}>Squad
                                Selection</a>
                        </li>
                        <li className="nav-item navSliderPills"
                            onClick={() => {
                                this.setState(
                                    {
                                        selectedSegment: 'winners'
                                    })
                                this.props.history.push(`/winners`)
                            }
                            }>
                            <a className={`nav-link
                                            ${(this.state.selectedSegment === 'winners')
                                              ? 'active text-black' : 'text-white'}`}>Prize
                                Winners</a>
                        </li>
                        <li className="nav-item navSliderPills"
                            onClick={() => {
                                this.setState(
                                    {
                                        selectedSegment: 'help'
                                    })
                                this.props.history.push(`/help`)
                            }
                            }>
                            <a className={`nav-link
                                            ${(this.state.selectedSegment === 'help')
                                              ? 'active text-black' : 'text-white'}`}>Help</a>
                        </li>
                        <li className="nav-item navSliderPills"
                            onClick={() => {
                                this.setState(
                                    {
                                        selectedSegment: 'profile'
                                    })
                                this.props.history.push(`/profile`)
                            }
                            }>
                            <a className={`nav-link
                                            ${(this.state.selectedSegment === 'profile')
                                              ? 'active text-black' : 'text-white'}`}>Profile</a>
                        </li>
                        {this.props.profile && <li className="nav-item navSliderPills">
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true"
                               onClick={this.logout}>Sign Out</a>
                        </li>}
                        {!this.props.profile && <li className="nav-item navSliderPills"
                                                    onClick={() => {
                                                        this.setState({
                                                                          selectedSegment: 'login'
                                                                      })
                                                        this.props.history.push(`/login`)
                                                    }
                                                    }>
                            <a className={`nav-link
                                            ${(this.state.selectedSegment === 'login')
                                              ? 'active text-black' : 'text-white'}`}>Login</a>
                        </li>}
                        {this.props.superuser && <li className="nav-item navSliderPills"
                                                     onClick={() => {
                                                         this.setState(
                                                             {
                                                                 selectedSegment: 'superuser'
                                                             })
                                                         this.props.history.push(`/superuser`)
                                                     }
                                                     }>
                            <a className={`nav-link
                                            ${(this.state.selectedSegment === 'superuser')
                                              ? 'active text-black' : 'text-white'}`}>Users</a>
                        </li>}
                    </ul>
                </div>
                <div className="playerImage">

                </div>
            </div>
        )
    }
}

export default FantasyDraftNavigationComponent;
