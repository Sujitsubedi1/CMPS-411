import React, { Component } from 'react';
import axios from  'axios';



export default class ViewStudents extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            Dummy: [],
            buttonPressed: true,
            buttonAddStudent: false,
            classinfoID:'',
            StudentName:'',
            Framework : '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handlename = this.handlename.bind(this);
        this.handleframe = this.handleframe.bind(this);
        this.handleclassInfo= this.handleclassInfo.bind(this);

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
            console.log(this.state.Dummy)
          })
      

        }

        addstudent(){
          this.setState({
            buttonAddStudent:true,
          })
        }

        handleclassInfo(e){
          this.setState({
              classinfoID:e.target.value,
            
          });
      }

      handlename(e){
        this.setState({
            StudentName:e.target.value,
           
        });
    }

    handleframe(e){
    
        this.setState({
            Framework:e.target.value,
            
        });
    }

        handleSubmit(event){
        
          event.preventDefault()
         
            console.log(this.state.classinfoID)
            console.log(this.state.StudentName)
            console.log(this.state.Framework)

            axios.post('https://localhost:44332/api/AdminDatas', { names: this.state.StudentName, framework: this.state.Framework, classinfo: this.state.classinfoID })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            }
          
          
        
    
    render(){
        const { Dummy } = this.state;
        return (

              
            <div>
                <button onClick ={() => this.addstudent()}>
            Add Student
                </button>


                {this.state.buttonAddStudent ? (

                <form onSubmit={this.handleSubmit}>
   <label>
    Name:
     <input type="text" value={this.state.value} onChange = {this.handlename} />
   </label>
   <label>
 Framework
     <input type="text" value={this.state.value} onChange={this.handleframe}/>

   </label>
   <label>
 Class Info Id: 
 <input type="text" value={this.state.value} onChange={this.handleclassInfo}/>
     
   </label>
   <input type="submit" value="Submit" />
 </form>
                
                ):(
                  <div>
                  {this.state.buttonPressed  ? (
                    <div>
                 <button onClick = {() => this.buttonOff()} >
                     Hide Students 
                   </button> 
        
                   {this.state.buttonPressed ?  (              
                     Dummy.map(lists => {
                       const {studentNo, names, frameworkUsed,classID, semester, year } = lists;  
                       
                       return (
                       <div key={studentNo}>
                         <p> Name : {names} 
                         <br></br>
                         Framework Used: {frameworkUsed}</p>         
        
                         ClassInfo: CMPS {classID}  
                         <br></br>
                         Semester:  {semester}
                         <br></br>
                         Year: {year}
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
                      


           

               </div>
        

        )}
}