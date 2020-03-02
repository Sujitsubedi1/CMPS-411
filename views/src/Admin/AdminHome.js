import React, { Component } from "react";

import history from "../history";
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import Studentsdata from "./Studentsdata";


class AdminHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonPressed: false,
      classes: [],
      getid:'',
      
    };

  }

  componentDidMount() {
    axios.get('https://localhost:44332/api/ClassInfoes').then(res => {
      this.setState({
        classes: res.data
      })
    })
  }


  handleClick(id){
      this.setState({
        buttonPressed:true,
        getid:id
      })
  }


  render() {
    const mystyle = {
      color: "red",
      padding: "10px",
      fontFamily: "Arial"
    };
   
    return (
    
       <div>
         {this.state.getid ? (
           <Studentsdata ids = {(this.state.getid).toString()}/>
         ):(
           <div>
          <h1 style={mystyle}>Admin Mode</h1>
          {this.state.classes.map(classdata=>{
               const {id,classID, semester, year}= classdata;
      return(
        <div key={id}>
            <button onClick={()=> this.handleClick(classID)}
            >  CMPS {classID} {semester} {year}</button>
          </div>
      )
  }
  
  )}

  </div>
         )}
           
</div>

    )
 
   }
}


export default withRouter(AdminHome);