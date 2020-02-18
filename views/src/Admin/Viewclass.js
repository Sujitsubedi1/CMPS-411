import React, { Component } from 'react';
import axios from  'axios';
export default class Viewclass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          classID:'',
          semester:'',
          year:'',
          buttonclassAdd:true,
          Dummy: [],
          studentsclass:[],
          bStudentsEnroll:false,
          getClassID:[],
         
          
          };

          this.handleSubmit = this.handleSubmit.bind(this);

          this.handleClassID = this.handleClassID.bind(this);
          this.handlesemester = this.handlesemester.bind(this);
          this.handleyear= this.handleyear.bind(this);

        }

       
         
        buttonOn(){
          this.setState({
              buttonclassAdd: true,
           
          })  
        }

        buttonOff(){
          this.setState({
            buttonclassAdd:false,
           
          })
        }

          handleClassID(e){
              this.setState({
                  classID:e.target.value,
                
              });
          }

          handlesemester(e){
            this.setState({
                semester:e.target.value,
               
            });
        }

        handleyear(e){
            this.setState({
                year:e.target.value,
                
            });
        }

        addclassbutton(event){
    
            this.setState({
              buttonclassAdd: true
            })
        }

        liststudents(id){
            axios.get('https://localhost:44332/api/AdminDatas')
            .then(res => {
              this.setState({
                studentsclass:res.data,
                bStudentsEnroll:true,
                getClassID: id,
              });
              
                console.log(this.state.getClassID)
             
                console.log(this.state.studentsclass)
              
            })

        }

          handleSubmit(event){
                console.log(this.state.classID)
                console.log(this.state.semester)
                console.log(this.state.year)
           
                event.preventDefault();

                axios.post('https://localhost:44332/api/ClassInfoes', { classID: this.state.classID, Semester: this.state.semester,Year: this.state.year })
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                })
                }

                componentDidMount() {
                  axios.get(`https://localhost:44332/api/ClassInfoes`)

                    .then(res => {
                      console.log(this.state.Dummy)
                      this.setState({ Dummy: res.data });
                        
                    })
          
                  }

          
    

    render(){
      const { Dummy,studentsclass } = this.state;
        return(
           <div>

            {this.state.buttonclassAdd  ? (
              <div>

            <button onClick = {() => this.buttonOff()} >
           Add CLass 
            </button> 

            { this.state.buttonclassAdd ? (

            Dummy.map(lists => {
            const {id, classID, semester, year } = lists;  
  
            return (
          <div key={id}>
            <p> CMPS: {classID} 
            <br></br>
          Semester: {semester} 
          <br></br>
          Year:   {year} 
          <br></br>
            Class ID: {id}
          </p> 

          <button onClick = {() => this.liststudents(id)}> 
            View Students Enrolled
             </button>       
            <hr />
            </div>
            );
             })
               )
            
            :(
              null
            )}

            {this.state.bStudentsEnroll ? (
                studentsclass.map(students => {
                  const {studentNo, names, classInfoID, frameworkUsed} = students;
                  console.log(students)
                  if(this.state.getClassID == classInfoID){
                  return(
                    <div key = {studentNo}>
                      <p> Student Name: {names}</p>
               
                    Framework Used: {frameworkUsed}
                   
                      <hr/>
                      </div>
                  );
                  }
                  else{
                    console.log("Nofthing matyers");
                  }
                })
            )
            :(
              <div> </div>
            )}


            </div>

         )   :(
           <div>
          <button onClick ={()=> this.addclassbutton()}>
          Addclass
        </button>
    <form onSubmit={this.handleSubmit}>
   <label>
    Class ID
     <input type="text" value={this.state.value} onChange = {this.handleClassID} />
   </label>
   <label>
 Semester
     <select value={this.state.value} onChange={this.handlesemester}>
       <option value="Fall">Fall</option>
       <option value="Spring">Spring</option>
       <option value="Summer">Summer</option>
      
     </select>
   </label>
   <label>
 Year
     <select value={this.state.value} onChange={this.handleyear}>
     <option value="2024">2024</option>
       <option value="2023">2023   </option>
       <option value="2022">2022</option>
       <option value="2021">2021   </option>
       <option value="2020">2020</option>
       <option value="2019">2019</option>
   
     </select>
   </label>
   <input type="submit" value="Submit" />
 </form>
 </div>

            )}
        

      </div>
           
        )
    }
}