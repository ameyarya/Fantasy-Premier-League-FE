import React from 'react'
import {Link} from "react-router-dom";

const SearchSuggestions = (props) => {
    const options = props.results.map(player => (
        <label className={"bg-light container-fluid"}>
            <Link to={`/player-details/${player.id}/${player.first_name + "-"
                                                      + player.web_name}/overview`}>
                {player.first_name + " " + player.web_name}
            </Link>
        </label>
    ))
    return <div>{options}</div>
}

export default SearchSuggestions
