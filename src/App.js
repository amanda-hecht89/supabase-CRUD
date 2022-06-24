import './App.css';

import { useState } from 'react';
import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import AuthPage from './AuthPage';
import DemonListPage from './DemonListPage';
import CreateDemonPage from './CreateDemonPage';
import UpdateDemonPage from './UpdateDemonPage';
import { client } from './services/client';
import { logout } from './services/FetchUtils';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="">SIGN IN</Link>
            </li>
            <li>
              <Link to="">CREATE DEMON DATE</Link>
            </li>
            <li>
              <Link to="">UPDATE DEMON DATA</Link>
            </li>
            <li>
              <Link to="">LIST OF DEMONS</Link>
            </li>
            <li>
              <button>LOGOUT</button>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route>

          </Route>
          <Route>

          </Route>
          <Route>

          </Route>
          <Route>

          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
