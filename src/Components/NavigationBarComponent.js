import React from "react";
import "../Components/NavigationBarComponent.css";
import SearchSuggestions from "./SearchSuggestions";

class NavigationBarComponent extends React.Component {

    state = {
        newSearchTitle: '',
        player: {
            first_name: '',
            second_name: '',
            id: ''
        },
        results: []
    }

    constructor(props) {
        super(props)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.newSearchTitle !== prevState.newSearchTitle) {
            this.updateForm()
        }
    }

    render() {
        return (
            <div className="navContainer">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <span>
                        <i className="fa-3x fa fa-futbol-o"/>
                        &nbsp;&nbsp;
                    </span>
                    <a className="navbar-brand" href="/squad_selection">Premier League</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/stats">Stats</a>
                            </li>
                            {this.props.profile && <li className="nav-item"
                                                       onClick={() => {
                                                           this.setState(
                                                               {
                                                                   selectedSegment: 'superuser'
                                                               })
                                                           this.props.history.push(`/superuser`)
                                                       }
                                                       }>
                                <a className="nav-link" href="/superuser">Users</a>
                            </li>}
                        </ul>
                    </div>
                    <div className={"form-group"}>
                        {!this.props.showSearch &&
                         <input className={"form-control"}
                                onChange={(e) => {
                                    this.setState({
                                                      newSearchTitle: e.target.value,
                                                      results: []
                                                  })
                                    this.updateForm()
                                }}
                                value={this.state.newSearchTitle}
                                placeholder="Player Name"/>}
                        {!this.props.showSearch &&
                         < SearchSuggestions results={this.state.results.splice(0, 10)}/>
                        }
                    </div>
                </nav>
            </div>
        )
    }

    updateForm = () => {
        let newSearchTitle = this.state.newSearchTitle
        let res = []
        if (newSearchTitle !== '') {
            res = this.props.searchPlayer(newSearchTitle, this.props.players)

        }

        this.setState({
                          results: res
                      })
    }
}

export default NavigationBarComponent;
