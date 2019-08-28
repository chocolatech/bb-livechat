import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import ChatBox from './containers/ChatBox/ChatBox'

const App = () => {

  return (
    <React.Fragment>
      <Switch>
        <Route path={'/client'} component={ChatBox} />
        {/* <Route path={'/host'} component={Dashboard} />
          <Route path={'/'} exact component={Entry} /> */}
      </Switch>
    </React.Fragment>
  )
}

export default App;
