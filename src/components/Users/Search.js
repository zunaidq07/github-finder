import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }
    handleChange = (e) => {
        this.setState({text: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.searchUser(this.state.text)
        this.setState({text: ''})
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="Search User..." 
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="submit" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
