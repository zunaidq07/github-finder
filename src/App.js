import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import About from './components/Pages/About'
import Alert from './components/Layout/Alert'
import User from './components/Users/User'
import Home from './components/Pages/Home'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/alertState'
import NotFound from './components/Pages/NotFound';

import './App.css';

const App = () => {

  // useEffect(() => {  
  // setLoading(true) 
  // axios.get(`https://api.github.com/users`).then(res => {
  //   setUsers(res.data)
  //   setLoading(false)
  // })

  // }, [])

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' component={User}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
