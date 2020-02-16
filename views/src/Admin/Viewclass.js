import React, { Component } from 'react';
export default class Viewclass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          classID:'',
          semester:'',
          year:'',
          buttonclassAdd:false
          
          };

          this.handleSubmit = this.handleSubmit.bind(this);

          this.handleClassID = this.handleClassID.bind(this);
          this.handlesemester = this.handlesemester.bind(this);
          this.handleyear= this.handleyear.bind(this);

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

        addclassbutton(){
            this.setState({
              buttonclassAdd: true
            })
        }

          handleSubmit(event){
                console.log(this.state.classID)
                console.log(this.state.semester)
                console.log(this.state.year)
                alert('A name was submitted: ' + this.state.classID);
                event.preventDefault();
                }

          
    

    render(){
        return(
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
           
        )
    }
}