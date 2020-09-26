import React from 'react';
import "../Components/Pitch.css";

class Pagination extends React.Component {

    state = {
        pageNumbers: [],
        page: 0,
    }

    constructor(props) {
        super(props);
        this.props.paginate(1)
    }

    componentDidMount() {
        let temp = []
        for (let i = 1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++) {
            temp.push(i)
        }
        this.setState({
                          page: temp[0],
                          pageNumbers: temp
                      })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.totalPosts)
        if ((this.props.totalPosts !== prevProps.totalPosts)) {
            let temp = []

            for (let i = 1; i <= Math.ceil(this.props.totalPosts / this.props.postsPerPage); i++) {
                temp.push(i)
            }
            this.setState({
                              page: temp[0],
                              pageNumbers: temp
                          })
        }
        if (prevState.page !== this.state.page) {
            console.log("Calling the function with " + this.state.page)
            this.props.paginate(this.state.page);
        }

    }

    render() {
        return (
            <nav className='paginator'>
                <ul className='pagination'>
                    <li className='page-item'>
                        <a className='page-link' onClick={() => {
                            this.setState({
                                              page: 1
                                          })
                        }}>First</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' onClick={() => {
                            this.state.page !== 1 ?
                            this.setState({
                                              page: this.state.page - 1
                                          }) : this.setState({page: this.state.page})
                        }}>
                            Previous
                        </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link'>
                            {this.state.page}/{this.state.pageNumbers.length}
                        </a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link' onClick={() => {
                            this.state.page !== this.state.pageNumbers.length ?
                            this.setState({
                                              page: this.state.page + 1
                                          }) : this.setState({page: this.state.page})
                        }}>Next</a>
                    </li>
                    <li className='page-item'>
                        <a className='page-link'
                           onClick={() => {
                               this.setState({
                                                 page: this.state.pageNumbers.length
                                             })
                           }}>Last</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Pagination;
