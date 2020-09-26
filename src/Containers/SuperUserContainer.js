import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import StatsReducer from "../reducers/StatsReducer";
import NavigationBarComponent from "../Components/NavigationBarComponent";
import FantasyDraftNavigationComponent from "../Components/FantasyDraftNavigationComponent";
import {deleteUser, profile, superuser} from "../services/UserServices";

const rootReducer = combineReducers({
                                        allDetails: StatsReducer
                                    })

const store = createStore(rootReducer)

class SuperUserContainer extends React.Component {

    state = {
        profile: '',
        userID: '',
        firstName: '',
        lastName: '',
        password: '*****',
        email: '',
        role: '',
        superuser: false,
        users: []
    }

    constructor(props) {
        super(props)
    }

    async componentDidMount() {
        await profile()
            .then(profile => {
                      this.setState({
                                        profile: profile,
                                        userID: profile.userID,
                                        firstName: profile.firstName,
                                        lastName: profile.lastName,
                                        role: profile.role
                                    })
                  }
            )
        const currUser = {
            email: this.state.profile.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            role: this.state.role
        };
        await superuser(currUser)
            .then(users => {
                      this.setState({
                                        users: users
                                    })
                  }
            )
    }

    deleteUser = async (user) => {
        alert("Are you sure you want to delete this user?");
        const status = await deleteUser(user.userID);
        console.log("user deleted: " + status);
        const currUser = {
            email: this.state.profile.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            role: this.state.role
        };
        const users = await superuser(currUser);
        this.setState({
                          users: users
                      })
    };

    render() {
        let listItems = null;
        if (this.state.role === 'Admin') {
            this.state.superuser = true;
            listItems = this.state.users.map((user) =>
                <li className="list-group-item">
                    <div className="d-flex d-flex justify-content-between">
                        <div className="col-sm-1">{user.firstName}</div>
                        <div className="col-sm-1">{user.lastName}</div>
                        <div className="col-sm-1">{user.email}</div>
                        <div className="col-sm-1"><i className="fa fa-fw fa-lg fa-trash"
                                                     onClick={() => this.deleteUser(user)}/></div>
                    </div>
                </li>
            );
        }
        return (
            <Provider store={store}>
                <div>
                    <NavigationBarComponent history={this.props.history}
                                            searchPlayer={this.props.searchPlayer}
                                            profile={this.state.profile}
                    />
                    <FantasyDraftNavigationComponent history={this.props.history}
                                                     linkName={this.props.linkName}
                                                     profile={this.state.profile}
                    />
                    <br/>
                    <br/>
                    <div className={"container-fluid"}>
                        <h4>Your role is : {this.state.role}</h4>
                        {!this.state.superuser &&
                        <p>You need to be logged in as an Admin to see all
                            users.<br/></p>}
                        {this.state.superuser &&
                         <ul className="list-group">
                             <li className="list-group-item list-group-item-success">
                                 <div className="d-flex d-flex justify-content-between">
                                     <div className="col-sm-1"><b>FirstName</b></div>
                                     <div className="col-sm-1"><b>LastName</b></div>
                                     <div className="col-sm-1"><b>Email</b></div>
                                     <div className="col-sm-1"><b>Delete</b></div>
                                 </div>
                             </li>
                             {listItems}
                         </ul>}
                    </div>
                </div>
            </Provider>)
    }
}

export default SuperUserContainer;
