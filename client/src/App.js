import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';


import Home from "./components/Home";
import Fund from "./components/Fund";
import Order from "./components/Order";
import User from "./components/User";
import Shangpin from "./components/Shangpin";
import Collection from "./components/user/Collection.js";
import Fuwu from "./components/user/Fuwu.js";



class App extends Component {
  render() {
    return (
        <Router>
              <div>
                <Route exact path="/" component={Home}/>
                
                <Route path="/fund" component={Fund}/>

                <Route path="/order" component={Order}/>
    
                 
                <Route path="/fuwu" component={Fuwu}/>
                    
                <Route path="/collection" component={Collection}/>

                <Route path="/user" component={User}/>
               
                <Route path="/shangpin/:sid" component={Shangpin}/>
                
              </div>
            </Router>
    );
  }
}

export default App;
