import './App.css';

import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import AuthPage from './AuthPage';
import DemonListPage from './DemonListPage';
import CreateDemonPage from './CreateDemonPage';
import UpdateDemonPage from './UpdateDemonPage';
import { client } from './services/client';


function App() {

  const [user, setUser] = useState(client.auth.user());

  async function handleLogoutClick() {
    setUser('');
  }

  return (
    <Router>
      <div>
        <header>
          <h1>WELCOME</h1>
        </header>
        <nav>
          <ul className='navigation'>
            <li>
              <Link to="/">SIGN IN</Link>
            </li>
            <li>
              <Link to="/create">CREATE DEMON DATE</Link>
            </li>
            <li>
              <Link to="/demons">LIST OF DEMONS</Link>
            </li>
            <li>
              <button onClick={handleLogoutClick}>LOGOUT</button>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            {
              !user ? <AuthPage setUser={setUser}/> : <Redirect to="/demons"/>
            }
          </Route>
          <Route exact path="/demons/:id">
            <UpdateDemonPage />
          </Route>
          <Route exact path="/demons">
            {
              user ? <DemonListPage setUser={setUser}/> : <Redirect to="/"/>
            }
          </Route>
          <Route exact path="/create">
            <CreateDemonPage />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
