import React from "react";
import {Link} from "react-router-dom";

class TopGoalScorers extends React.Component {

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
                        src="https://image.shutterstock.com/image-photo/soccer-ball-260nw-95315320.jpg"
                        className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Goals</h5>
                    </div>
                    <ol className="list-group list-group-flush">
                        {this.props.players && this.props.getTopScorers(this.props.players)
                            .map(player =>
                                     <li className="list-group-item" key={player.id}
                                         onClick={() => {
                                             const playerId = player.id
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
                                                 {player.goals_scored}
                                             </div>
                                         </div>
                                     </li>)
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default TopGoalScorers;
