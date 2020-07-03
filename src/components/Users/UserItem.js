import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserItem extends Component {

    render() {
        const { avatar_url, login, html_url } = this.props.user;
        return (
            <div className="card text-center">
                <img
                 src={avatar_url}
                 alt=""
                 className="round-img"
                 style={{ width: 60 }}
                />
                <h3>{ login }</h3>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        )
    }
}

export default UserItem
