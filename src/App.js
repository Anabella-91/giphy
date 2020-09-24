import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import {Home} from './components/Home/Home'
import {Perfil} from './components/Perfil/Perfil'

function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home}/>
          <Route exact path='/perfil' component={Perfil}/>
        </div>
      </Router>
  );
}

export default App;
