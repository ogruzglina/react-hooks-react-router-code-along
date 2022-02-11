import React from 'react';
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import About from "./About";
import NavBar from "./NavBar";
import Messages from "./Messages";
import Signup from "./Signup";
import Home from "./Home";

function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          {/* add exact or move this block to the end of switch */}
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/messages">
            <Messages />
          </Route>
        </Switch>
      </div>
    );
}

export default App;