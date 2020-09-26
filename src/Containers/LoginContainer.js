import * as React from "react";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import {login, profile, validateUser} from "../services/UserServices";
import {Link} from "react-router-dom";
import FantasyDraftNavigationComponent from "../Components/FantasyDraftNavigationComponent";

class LoginContainer extends React.Component {

    state = {
            email: '',
            password: '',
    };

    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin = (user) => {
        login(user)
            .then(currentUser => {
                if(currentUser) {
                    this.props.history.push('/profile')
                }
                else{
                    alert("Either the username or password is incorrect")
                }
            }
        )
        this.props.history.push('/profile')
        alert("Logging you in")
    }

    render() {
        return (
            <div>
                <NavigationBarComponent history={this.props.history}
                                        searchPlayer={this.props.searchPlayer}
                                        showSearch={true}/>
                <FantasyDraftNavigationComponent history={this.props.history}
                                                 linkName={this.props.linkName}/>
                <br/>
                <br/>
                <div className={"row"}>
                    <div className="container">
                        <h1>Login</h1>
                        <form action="#">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="username">
                                    Email: </label>
                                <div className="col-sm-10">
                                    <input
                                        value={this.state.email}
                                        onChange={(e) => this.setState({
                                                                           email: e.target.value
                                                                       })}
                                        className={`form-control`}
                                        placeholder="email address"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" htmlFor="password">
                                    Password: </label>
                                <div className="col-sm-10">
                                    <input
                                        value={this.state.password}
                                        onChange={(e) => this.setState({
                                                                           password: e.target.value
                                                                       })}
                                        className={`form-control`}
                                        type="password"
                                        placeholder="password"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label"/>
                                <div className="col-sm-10">
                                    <button className="btn btn-success btn-block"
                                            //disabled={!this.validateForm()}
                                            onClick = {() => this.handleLogin(this.state)}
                                    >
                                        Sign in
                                    </button>
                                    <div className="row">
                                        <div className="col-6">
                                            <a className="wbdv-link wbdv-forgot-password" href="#">Forgot Password?</a>
                                        </div>
                                        <div className="col-6">
                                            <Link to={`/register`}>
                                                <a className="wbdv-link wbdv-register float-right"
                                                   href="#">Register</a>
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

export default LoginContainer
