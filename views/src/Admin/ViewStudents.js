import React, { Component } from 'react';
import axios from  'axios';

import history from '../history';

export default class ViewStudents extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            Dummy: [],
            buttonPressed: false,
        }
    }

        
        buttonOn(){
            this.setState({
                buttonPressed: true,
             
            })  
          }
  
          buttonOff(){
            this.setState({
              buttonPressed:false,
             
            })
          }

          
     componentDidMount() {
        axios.get(`https://localhost:44332/api/AdminDatas`)
          .then(res => {
            this.setState({ Dummy: res.data });
          })

        }
        
    
    render(){
        const { Dummy } = this.state;
        return (

              
            <div>

            {this.state.buttonPressed  ? (
            <div>
         <button onClick = {() => this.buttonOff()} >
             Hide Students 
           </button> 

           {this.state.buttonPressed ?  (              
             Dummy.map(lists => {
               const { id, names, framework } = lists;  
               
               return (
               <div key={id}>
                 <p>{names} 
                 <br></br>
                 Framework Used: {framework}</p>           
                 <hr />
                 </div>
                 );
               })
               )
               :(
                 null
                 )}
             </div>

            ):(
            <div>
            <button onClick = {() => this.buttonOn()} >
              View Students 
              </button> 
               </div>
            )}

               </div>
        

        )}
}