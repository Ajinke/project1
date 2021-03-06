import React, { Component } from "react";
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from './components/layout/Index';
import { Provider } from "./Context";
import Lyrics from './components/tracks/Lyrics';

class App extends Component{
  render(){
    return(
      <Provider>
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
       </>
        </Router>
        </Provider>
    );
  }
}

export default App;