import React, { Component } from 'react';
import axios from  'axios';
import history from '../history';
import {withRouter, } from 'react-router-dom';

 class AdminHome extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        Dummy: [],
        buttonPressed: false,
        rerender: true,
      
      }

     
    }

    updatesearch(event){
      this.setState({
        search:  event.target.value.substr(0,20),
        searchedstate :true   
      }) 
    }



     componentDidMount() {
        axios.get(`https://localhost:44332/api/AdminDatas`)
          .then(res => {
            this.setState({ Dummy: res.data });
          })

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


        addclass(){
          history.push('./Addclass')
     
        }

      
        

render(){

     const { Dummy } = this.state;

    const mystyle = {
        color: "red",
        padding: "10px",
        fontFamily: "Arial"

      };
    return (
       
        <div> 
         
            <h1 style = {mystyle}>  
             Admin Mode
              </h1>  
              
              <button onClick = {() => this.addclass()}>
              Add Class
              </button>
              <br/>
              <br/>


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

                  ): 
                  (                
                     <div>
                     <button onClick = {() => this.buttonOn()} >
                       View Students 
                       </button> 
                        </div>
                         )}
                          

                     
                         </div>
                         )
                        }




                      }

                      export default withRouter(AdminHome) ;