import React from "react";
import {Link} from "react-router-dom";

class TopFantasyPoints extends React.Component {

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
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKPLu6yr4XpPwTasWWuPqRXOLsGoZ1Uwe46kHCRYTgXYtatwR4"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Top Fantasy Points</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        {this.props.players && this.props.getTopFantasyPoints(this.props.players)
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
                                                 {player.total_points}
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

export default TopFantasyPoints;
