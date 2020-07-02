import React from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar'
import Users from './components/Users/Users'
import Search from './components/Users/Search'
import axios from 'axios'

class App extends React.Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    this.setState({loading: true})
    // const res = await axios.get(`https://api.github.com/users?client_id=
    // ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    // ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    const res = await axios.get(`https://api.github.com/users`)

    this.setState({users: res.data, loading: false})
  }

  searchUser = async (text) => {
    console.log(text)
    const params = text
    const res = await axios.get(`https://api.github.com/users?q=${params}`)
    console.log(res.data)
    this.setState({users: res.data, loading: false})
  }
  render() {
    const { loading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Search searchUser={this.searchUser}/>
        <Users loading={loading} users={users} />
      </div>
    );
  }
}

export default App;
