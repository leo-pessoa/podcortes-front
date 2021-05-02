import './App.scss'
import Sidebar from './common/components/sidebar'
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Podcasts from './pages/podcasts'
import Following from './pages/following'

function App() {
  return (
    <div className='App'>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/following' component={Following} />
          <Route path='/podcasts' component={Podcasts} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
