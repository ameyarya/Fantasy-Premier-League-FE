import React from "react";
import {Link} from "react-router-dom";

class TopAssistProviders extends React.Component {

    state = {
        selectedPlayerId: '',
        player: {
            first_name: '',
            id: ''
        }
    }

    render() {
        return (
            <div className={"container-fluid"}>
                <div className="card">
                    <img
                        src="data:image/jpeg;base64,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"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Assists</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.props.players && this.props.getTopAssistProviders(this.props.players)
                            .map(player =>
                                     <li className="list-group-item" key={player.id}
                                         onClick={() => {
                                             const playerId = player.id
                                             //this.props.history.push(`/players/${playerId}/${player.first_name
                                             // + "-" + player.web_name}/overview`)
                                             this.setState(
                                                 {
                                                     selectedPlayerId: playerId
                                                 })
                                         }
                                         }>
                                         <div className={"row"}>
                                             <div className="col-md-9">
                                                 <Link
                                                     to={`/player-details/${player.id}/${player.first_name
                                                                                         + "-"
                                                                                         + player.web_name}/overview`}>
                                                     {player.first_name + " " + player.web_name}
                                                 </Link>
                                             </div>
                                             <div className="col-md-3">
                                                 {player.assists}
                                             </div>
                                         </div>
                                     </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopAssistProviders;