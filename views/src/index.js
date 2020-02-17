import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminHome from './Admin/AdminHome';
import Viewclass from './Admin/Viewclass';
import './index.css';
import ViewStudent from './Admin/ViewStudents';

ReactDOM.render(
    <Router>
    <div>
    
        <Route exact path="/" component={AdminHome} />
        <Route exact path ="/AdminHome" component ={AdminHome} />
        <Route path="/Viewclass" component={Viewclass} />
        <Route path="/ViewStudent" component={ViewStudent} />
      </div>
  </Router>,
  document.getElementById('root')
)