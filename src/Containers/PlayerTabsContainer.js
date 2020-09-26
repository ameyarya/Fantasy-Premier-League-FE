import {Link} from "react-router-dom";
import React from "react";
import "../Containers/PlayerTabsContainer.css"

class PlayerTabsContainer extends React.Component {

    state = {
        selectedTabId: this.props.selectedTabId,
        playerId: this.props.playerId,
        fullName: this.props.fullName
    }

    render() {
        return (
            <ul className="nav nav-tabs">
                <li className={`nav-item player-tabs`}
                    key={0}>
                    <a className={`nav-link tab-links
                                            ${(this.state.selectedTabId === 0)
                                              ? 'active' : ''}`}>
                        <Link
                            to={`/player-details/${this.state.playerId}/${this.state.fullName}/overview`}>
                            <span>Overview</span>
                        </Link>
                    </a>
                </li>
                <li className={`nav-item player-tabs`}
                    key={1}>
                    <a className={`nav-link tab-links
                                            ${(this.state.selectedTabId === 1)
                                              ? 'active' : ''}`}>
                        <Link
                            to={`/player-details/${this.state.playerId}/${this.state.fullName}/stats`}>
                            <span>Stats</span>
                        </Link>

                    </a>

                </li>

            </ul>)

    }
}

export default PlayerTabsContainer
