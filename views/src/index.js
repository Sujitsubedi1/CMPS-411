import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminHome from './Admin/AdminHome';
import Addclass from './Admin/Addclass';
import './index.css';
import { Link } from 'react-router-dom';
import history from './history';

ReactDOM.render(
    <Router history={history}>
    <div>
    
        <Route exact path="/" component={AdminHome} />
        <Route exact path ="/Adminhome" component ={AdminHome} />
        <Route path="/Addclass" component={Addclass} />
      </div>
  </Router>,
  document.getElementById('root')
)