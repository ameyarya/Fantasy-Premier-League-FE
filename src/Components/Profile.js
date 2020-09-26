import React from "react";
import {updateUser, profile, deleteUser, logout} from "../services/UserServices";
import NavigationBarComponent from "./NavigationBarComponent";
import FantasyDraftNavigationComponent from "./FantasyDraftNavigationComponent";

class Profile extends React.Component {

    state = {
        profile: '',
        firstName: '',
        lastName: '',
        password: '*****',
        email: '',
        role: ''
    }

    constructor(props) {
        super(props);
        this.updateUserProfile = this.updateUserProfile.bind(this)
    }

    componentDidMount() {
        profile()
            .then(profile => {
                      if (profile) {
                          this.setState({
                                            profile: profile,
                                            firstName: profile.firstName,
                                            lastName: profile.lastName,
                                            role: profile.role,
                                        })
                      } else {
                          alert("You need to be logged in to access this page")
                          this.props.history.push("/login")
                      }
                  }
            )
    }

    updateUserProfile = async () => {
        let pword = this.state.profile.password
        if (this.state.password.length === 0) {
            alert("Password cannot be empty")
            return
        }
        if (this.state.firstName.length === 0) {
            alert("First name cannot be empty")
            return
        }
        if (this.state.lastName.length === 0) {
            alert("Last name cannot be empty")
            return
        }
        if (this.state.password !== this.state.profile.password
            && this.state.password !== "*****") {
            pword = this.state.password
        }
        const newUser = {
            email: this.state.profile.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: pword,
            role: this.state.role
        };
        await updateUser(newUser);
    };

    deleteUserProfile = async () => {
        let message = "Are you sure you want to delete the account?"
        if (window.confirm(message)) {
            logout()
                .then(status => {
                    status.status === 200 ? deleteUser(this.state.profile.userID)
                                              .then(status => {
                                                  status.status === 200 ?
                                                  this.props.history.push('/home') :
                                                  this.props.history.push('/profile')
                                              })
                                          :
                    console.log(status.statusText)
                })
        }
    };

    render() {
        return (
            <div>
                <NavigationBarComponent
                    history={this.props.history}
                    profile={this.state.profile}
                    showSearch={true}/>
                <FantasyDraftNavigationComponent
                    linkName={this.props.linkName}
                    history={this.props.history}
                    profile={this.state.profile}/>
                <br/>
                <br/>
                <div className={"container-fluid"}>
                    <div className="row">
                        <div className="col-5">
                            <h4>You are logged in as : {this.state.firstName}</h4>
                        </div>
                    </div>
                    <br/>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="email1" className={"col-2"}>Email address</label>
                            <input type="email" className="form-control col-10" id="email1"
                                   value={this.state.profile.email}/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="fname" className={"col-2"}>First Name</label>
                            <input type="text" className="form-control col-10"
                                   id="fname"
                                   value={this.state.firstName}
                                   onChange={(e) => this.setState({firstName: e.target.value})}/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lname" className={"col-2"}>Last Name</label>
                            <input type="text" className="form-control col-10"
                                   id="lname"
                                   value={this.state.lastName}
                                   onChange={(e) => this.setState({lastName: e.target.value})}/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="pword" className={"col-2"}>Password</label>
                            <input type="password" className="form-control col-10"
                                   id="pword"
                                   value={this.state.password}
                                   onChange={(e) => this.setState({password: e.target.value})}/>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="role" className={"col-2"}>Role</label>
                            <label htmlFor="role" className={"col-2"}>{this.state.role === null ?
                                                                       "User"
                                                                                                : this.state.role}</label>
                        </div>
                        <div className="form-group row">
                            <div className="col-5"/>
                            <button type="submit" className="btn btn-primary btn-success"
                                    onClick={() => this.updateUserProfile()}>Update profile
                            </button>
                            <br/>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <div className="col-5"/>
                            <button type="submit" className="btn btn-primary btn-danger"
                                    onClick={() => this.deleteUserProfile()}>Delete Account
                            </button>
                            <br/>
                        </div>
                        <br/>
                        <br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Profile;
