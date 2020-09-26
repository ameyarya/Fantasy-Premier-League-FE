import React from "react";
import "../Components/Pitch.css";
import Pagination from "./Pagination";

class PlayerListComponent extends React.Component {

    state = {
        position: ''
    }

    componentDidUpdate(prevProps) {
        if (prevProps.playerAdded !== this.props.playerAdded) {
            this.setState({playerAdded: this.props.playerAdded});
        }
        console.log('Calling ocmponent')

    }

    render() {
        return (
            <div>
                <div className="tableWrap">
                    <table className="table table-bordered table-striped tableBorder title">
                        <thead className="table-warning">
                        <tr>
                            <th>
                                &nbsp;
                            </th>
                            <th>
                                <button className="tableButtons">
                                    Goalkeepers
                                </button>
                            </th>
                            <th>£</th>
                            <th>**</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.getGKList().map(player => (
                            <tr>
                                <td>
                                    <button className="tableButtons">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <g fill-rule="evenodd">
                                                <path
                                                    d="M14.9002 18.7465L14.6742 19.7215C14.0002 20.0205 13.4002 20.1715 13.0252 20.3215 12.6502 20.4715 12.1252 20.5465 11.6002 20.5465 10.7752 20.5465 10.1002 20.3215 9.6502 19.9465 9.2002 19.5715 8.9752 19.0465 8.9752 18.3715 8.9752 18.1455 8.9752 17.8465 9.0502 17.6215 9.0502 17.3955 9.1252 17.0965 9.2002 16.7215L10.1002 13.6455C10.1752 13.3465 10.2502 13.0465 10.3252 12.8215 10.4002 12.5965 10.4002 12.2965 10.4002 12.0715 10.4002 11.6965 10.3252 11.3965 10.1752 11.2465 10.0252 11.0965 9.7252 11.0215 9.2752 11.0215 9.0502 11.0215 8.8252 11.0215 8.6002 11.0965 8.3752 11.1715 8.1502 11.2465 8.0002 11.3215L8.2252 10.3465C8.8252 10.1215 9.3502 9.8965 9.8752 9.7465 10.4002 9.5965 10.8502 9.5215 11.3752 9.5215 12.2002 9.5215 12.8752 9.7465 13.3252 10.1215 13.7752 10.4965 14.0002 11.0215 14.0002 11.6965 14.0002 11.8465 13.8502 13.0465 13.7752 13.2705L12.9502 16.3465C12.8752 16.5715 12.7992 16.8715 12.7252 17.1715 12.6502 17.4715 12.6502 17.6965 12.6502 17.8465 12.6502 18.2215 12.7252 18.5205 12.9502 18.6715 13.1002 18.8215 13.4752 18.8955 13.9242 18.8955 14.1502 18.8955 14.7502 18.8215 14.9002 18.7465M15.0389 5.9999C15.0389 7.1039 14.1429 7.9999 13.0389 7.9999 11.9349 7.9999 11.0389 7.1039 11.0389 5.9999 11.0389 4.8959 11.9349 3.9999 13.0389 3.9999 14.1429 3.9999 15.0389 4.8959 15.0389 5.9999"
                                                    fill="currentColor"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button className="tableButtons"
                                            onClick={() => {
                                                this.props.setPlayerAdded(true);
                                                this.props.setPosition('');
                                                this.props.setPlayerName(player.web_name,
                                                                         player.now_cost / 10,
                                                                         player.id);
                                            }}>
                                        {player.web_name}
                                    </button>
                                </td>
                                <td>
                                    {player.now_cost / 10}
                                </td>
                                <td>
                                    {this.props.criteria === 'now_cost' && player['now_cost'] / 10}
                                    {this.props.criteria !== 'now_cost'
                                     && player[this.props.criteria]}
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                    <Pagination
                        postsPerPage={this.props.postsPerPage}
                        totalPosts={this.props.GKPCount}
                        paginate={this.props.paginate}
                    />
                </div>

                <div className="tableWrap">
                    <table className="table table-bordered table-striped tableBorder title">
                        <thead className="table-success">
                        <tr>
                            <th>
                                &nbsp;
                            </th>
                            <th>
                                <button className="tableButtons">
                                    Defenders
                                </button>
                            </th>
                            <th>£</th>
                            <th>**</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.getDefList().map(player => (
                            <tr>
                                <td>
                                    <button className="tableButtons">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <g fill-rule="evenodd">
                                                <path
                                                    d="M14.9002 18.7465L14.6742 19.7215C14.0002 20.0205 13.4002 20.1715 13.0252 20.3215 12.6502 20.4715 12.1252 20.5465 11.6002 20.5465 10.7752 20.5465 10.1002 20.3215 9.6502 19.9465 9.2002 19.5715 8.9752 19.0465 8.9752 18.3715 8.9752 18.1455 8.9752 17.8465 9.0502 17.6215 9.0502 17.3955 9.1252 17.0965 9.2002 16.7215L10.1002 13.6455C10.1752 13.3465 10.2502 13.0465 10.3252 12.8215 10.4002 12.5965 10.4002 12.2965 10.4002 12.0715 10.4002 11.6965 10.3252 11.3965 10.1752 11.2465 10.0252 11.0965 9.7252 11.0215 9.2752 11.0215 9.0502 11.0215 8.8252 11.0215 8.6002 11.0965 8.3752 11.1715 8.1502 11.2465 8.0002 11.3215L8.2252 10.3465C8.8252 10.1215 9.3502 9.8965 9.8752 9.7465 10.4002 9.5965 10.8502 9.5215 11.3752 9.5215 12.2002 9.5215 12.8752 9.7465 13.3252 10.1215 13.7752 10.4965 14.0002 11.0215 14.0002 11.6965 14.0002 11.8465 13.8502 13.0465 13.7752 13.2705L12.9502 16.3465C12.8752 16.5715 12.7992 16.8715 12.7252 17.1715 12.6502 17.4715 12.6502 17.6965 12.6502 17.8465 12.6502 18.2215 12.7252 18.5205 12.9502 18.6715 13.1002 18.8215 13.4752 18.8955 13.9242 18.8955 14.1502 18.8955 14.7502 18.8215 14.9002 18.7465M15.0389 5.9999C15.0389 7.1039 14.1429 7.9999 13.0389 7.9999 11.9349 7.9999 11.0389 7.1039 11.0389 5.9999 11.0389 4.8959 11.9349 3.9999 13.0389 3.9999 14.1429 3.9999 15.0389 4.8959 15.0389 5.9999"
                                                    fill="currentColor"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button className="tableButtons"
                                            onClick={() => {
                                                this.props.setPlayerAdded(true);
                                                this.props.setPosition(this.state.position);
                                                this.props.setPlayerName(player.web_name,
                                                                         player.now_cost / 10,
                                                                         player.id);
                                            }}>
                                        {player.web_name}
                                    </button>
                                </td>
                                <td>
                                    {player.now_cost / 10}
                                </td>
                                <td>
                                    {this.props.criteria === 'now_cost' && player['now_cost'] / 10}
                                    {this.props.criteria !== 'now_cost'
                                     && player[this.props.criteria]}
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                    <Pagination
                        postsPerPage={this.props.postsPerPage}
                        totalPosts={this.props.DefCount}
                        paginate={this.props.paginate}
                    />
                </div>

                <div className="tableWrap">
                    <table className="table table-bordered table-striped tableBorder title">
                        <thead className="table-primary">
                        <tr>
                            <th>
                                &nbsp;
                            </th>
                            <th>
                                <button className="tableButtons">
                                    Midfielders
                                </button>
                            </th>
                            <th>£</th>
                            <th>**</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.getMidList().map(player => (
                            <tr>
                                <td>
                                    <button className="tableButtons">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <g fill-rule="evenodd">
                                                <path
                                                    d="M14.9002 18.7465L14.6742 19.7215C14.0002 20.0205 13.4002 20.1715 13.0252 20.3215 12.6502 20.4715 12.1252 20.5465 11.6002 20.5465 10.7752 20.5465 10.1002 20.3215 9.6502 19.9465 9.2002 19.5715 8.9752 19.0465 8.9752 18.3715 8.9752 18.1455 8.9752 17.8465 9.0502 17.6215 9.0502 17.3955 9.1252 17.0965 9.2002 16.7215L10.1002 13.6455C10.1752 13.3465 10.2502 13.0465 10.3252 12.8215 10.4002 12.5965 10.4002 12.2965 10.4002 12.0715 10.4002 11.6965 10.3252 11.3965 10.1752 11.2465 10.0252 11.0965 9.7252 11.0215 9.2752 11.0215 9.0502 11.0215 8.8252 11.0215 8.6002 11.0965 8.3752 11.1715 8.1502 11.2465 8.0002 11.3215L8.2252 10.3465C8.8252 10.1215 9.3502 9.8965 9.8752 9.7465 10.4002 9.5965 10.8502 9.5215 11.3752 9.5215 12.2002 9.5215 12.8752 9.7465 13.3252 10.1215 13.7752 10.4965 14.0002 11.0215 14.0002 11.6965 14.0002 11.8465 13.8502 13.0465 13.7752 13.2705L12.9502 16.3465C12.8752 16.5715 12.7992 16.8715 12.7252 17.1715 12.6502 17.4715 12.6502 17.6965 12.6502 17.8465 12.6502 18.2215 12.7252 18.5205 12.9502 18.6715 13.1002 18.8215 13.4752 18.8955 13.9242 18.8955 14.1502 18.8955 14.7502 18.8215 14.9002 18.7465M15.0389 5.9999C15.0389 7.1039 14.1429 7.9999 13.0389 7.9999 11.9349 7.9999 11.0389 7.1039 11.0389 5.9999 11.0389 4.8959 11.9349 3.9999 13.0389 3.9999 14.1429 3.9999 15.0389 4.8959 15.0389 5.9999"
                                                    fill="currentColor"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button className="tableButtons"
                                            onClick={() => {
                                                this.props.setPlayerAdded(true);
                                                this.props.setPosition(this.state.position);
                                                this.props.setPlayerName(player.web_name,
                                                                         player.now_cost / 10,
                                                                         player.id);
                                            }}>
                                        {player.web_name}
                                    </button>
                                </td>
                                <td>
                                    {player.now_cost / 10}
                                </td>
                                <td>
                                    {this.props.criteria === 'now_cost' && player['now_cost'] / 10}
                                    {this.props.criteria !== 'now_cost'
                                     && player[this.props.criteria]}
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                    <Pagination
                        postsPerPage={this.props.postsPerPage}
                        totalPosts={this.props.MidCount}
                        paginate={this.props.paginate}

                    />
                </div>

                <div className="tableWrap">
                    <table className="table table-bordered table-striped tableBorder title">
                        <thead className="table-danger">
                        <tr>
                            <th>
                                &nbsp;
                            </th>
                            <th>
                                <button className="tableButtons">
                                    Forwards
                                </button>
                            </th>
                            <th>£</th>
                            <th>**</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.getStrList().map(player => (
                            <tr>
                                <td>
                                    <button className="tableButtons">
                                        <svg width="24" height="24" viewBox="0 0 24 24">
                                            <g fill-rule="evenodd">
                                                <path
                                                    d="M14.9002 18.7465L14.6742 19.7215C14.0002 20.0205 13.4002 20.1715 13.0252 20.3215 12.6502 20.4715 12.1252 20.5465 11.6002 20.5465 10.7752 20.5465 10.1002 20.3215 9.6502 19.9465 9.2002 19.5715 8.9752 19.0465 8.9752 18.3715 8.9752 18.1455 8.9752 17.8465 9.0502 17.6215 9.0502 17.3955 9.1252 17.0965 9.2002 16.7215L10.1002 13.6455C10.1752 13.3465 10.2502 13.0465 10.3252 12.8215 10.4002 12.5965 10.4002 12.2965 10.4002 12.0715 10.4002 11.6965 10.3252 11.3965 10.1752 11.2465 10.0252 11.0965 9.7252 11.0215 9.2752 11.0215 9.0502 11.0215 8.8252 11.0215 8.6002 11.0965 8.3752 11.1715 8.1502 11.2465 8.0002 11.3215L8.2252 10.3465C8.8252 10.1215 9.3502 9.8965 9.8752 9.7465 10.4002 9.5965 10.8502 9.5215 11.3752 9.5215 12.2002 9.5215 12.8752 9.7465 13.3252 10.1215 13.7752 10.4965 14.0002 11.0215 14.0002 11.6965 14.0002 11.8465 13.8502 13.0465 13.7752 13.2705L12.9502 16.3465C12.8752 16.5715 12.7992 16.8715 12.7252 17.1715 12.6502 17.4715 12.6502 17.6965 12.6502 17.8465 12.6502 18.2215 12.7252 18.5205 12.9502 18.6715 13.1002 18.8215 13.4752 18.8955 13.9242 18.8955 14.1502 18.8955 14.7502 18.8215 14.9002 18.7465M15.0389 5.9999C15.0389 7.1039 14.1429 7.9999 13.0389 7.9999 11.9349 7.9999 11.0389 7.1039 11.0389 5.9999 11.0389 4.8959 11.9349 3.9999 13.0389 3.9999 14.1429 3.9999 15.0389 4.8959 15.0389 5.9999"
                                                    fill="currentColor"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button className="tableButtons"
                                            onClick={() => {
                                                this.props.setPlayerAdded(true);
                                                this.props.setPlayerName(player.web_name,
                                                                         player.now_cost / 10,
                                                                         player.id);
                                            }}>
                                        {player.web_name}
                                    </button>
                                </td>
                                <td>
                                    {player.now_cost / 10}
                                </td>
                                <td>
                                    {this.props.criteria === 'now_cost' && player['now_cost'] / 10}
                                    {this.props.criteria !== 'now_cost'
                                     && player[this.props.criteria]}
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                    <Pagination
                        postsPerPage={this.props.postsPerPage}
                        totalPosts={this.props.StrCount}
                        paginate={this.props.paginate}
                    />
                </div>
            </div>

        )
    }
}

export default PlayerListComponent;
