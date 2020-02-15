import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminHome from './Admin/AdminHome';
import Addclass from './Admin/Addclass';
import './index.css';
import ViewStudent from './Admin/ViewStudents';

ReactDOM.render(
    <Router>
    <div>
    
        <Route exact path="/" component={AdminHome} />
        <Route exact path ="/AdminHome" component ={AdminHome} />
        <Route path="/AddClass" component={Addclass} />
        <Route path="/ViewStudent" component={ViewStudent} />
      </div>
  </Router>,
  document.getElementById('root')
)