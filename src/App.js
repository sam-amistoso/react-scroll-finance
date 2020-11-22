import React from 'react';
import { GlobalStyles } from './globalSytles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
