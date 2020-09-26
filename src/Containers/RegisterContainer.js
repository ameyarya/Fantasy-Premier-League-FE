import * as React from "react";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import {register} from "../services/UserServices";
import {createUser} from "../services/UserServices";
import {Link} from "react-router-dom";
import FantasyDraftNavigationComponent from "../Components/FantasyDraftNavigationComponent";

class RegisterContainer extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    constructor(props){
        super(props);
        this.handleRegister = this.handleRegister.bind(this)
    }

    addUser = async () => {
        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        };
        await createUser(newUser);
        this.alertFunction();
    };

    handleRegister = (user) => {
        register(user)
            .then(newUser => {
                if (newUser) {
                    this.props.history.push('/profile')
                } else {
                    alert("User already exists. Try a different email.")
                    return
                }
            })
        alert("Registering...")
        this.props.history.push('/profile')
    };

    alertFunction = () => {
        alert("Registered")
    };

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0
        && this.state.firstName.length > 0 && this.state.lastName.length > 0;
    }

    render() {
        return (
            <div>
                <NavigationBarComponent history={this.props.history}
                                        searchPlayer={this.props.searchPlayer}
                                        profile={this.state.profile}
                />
                <FantasyDraftNavigationComponent history={this.props.history}
                                                 linkName={this.props.linkName}/>
                <br/>
                <br/>
                <div className={"row"}>
                    <div className="container">
                        <h1>Register</h1>
                        <form action="#">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="usernameFld">
                                    First Name: </label>
                                <div className="col-sm-10">
                                    <input className="form-control wbdv-field wbdv-username"
                                           id="usernameFld"
                                           value={this.state.firstName}
                                           onChange={(e) => this.setState({firstName: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="usernameFld">
                                    Last Name: </label>
                                <div className="col-sm-10">
                                    <input className="form-control wbdv-field wbdv-username"
                                           id="usernameFld"
                                           value={this.state.lastName}
                                           onChange={(e) => this.setState({lastName: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="usernameFld">
                                    Email: </label>
                                <div className="col-sm-10">
                                    <input className="form-control wbdv-field wbdv-username"
                                           id="usernameFld"
                                           value={this.state.email}
                                           onChange={(e) => this.setState({email: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="passwordFld">
                                    Password: </label>
                                <div className="col-sm-10">
                                    <input className="form-control wbdv-field wbdv-password" id="passwordFld"
                                           type="password"
                                           value={this.state.password}
                                           onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"/>
                                <div className="col-sm-10">
                                    <button className="btn btn-success btn-block"
                                            id="registerBtn"
                                            onClick={() => this.handleRegister(this.state)}
                                            disabled={!this.validateForm()}
                                    >
                                        Register
                                    </button>
                                    <div className="row">
                                        <div className="col-6">
                                            Already registered?
                                            <Link to={`/login`}>
                                                <a className="wbdv-link wbdv-link wbdv-login"
                                                   href="#"> Login</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        )
    }

}

export default RegisterContainer
