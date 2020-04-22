import React, { Component } from "react";

import history from "../history";
import { withRouter, Link } from "react-router-dom";
import axios from 'axios';
import Studentsdata from "./Studentsdata";
import ViewSearchResults from "./ViewSearchResults"
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";



class AdminHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonPressed: false,
      classes: [],
        getid: '',
        
      };
      this.handlesemester = this.handlesemester.bind(this);
      this.handleyear = this.handleyear.bind(this);
      this.handleclassID = this.handleclassID.bind(this);

  }

  componentDidMount() {
    axios.get('https://localhost:44332/api/ClassInfoes').then(res => {
      this.setState({
        classes: res.data
      })
    })
  }


  handleClick(id, semester, year){
      this.setState({
        buttonPressed:true,
          getid: id,
          getSemester: semester,
          getYear: year,
          model: false,
          
      })
    }
    handlesemester(e) {

        this.setState({
            Semester: e.target.value
        })


    }

    handleyear(e) {

        this.setState({
            Year: e.target.value
        })


    }

    handleclassID(e) {
        this.setState({
            ClassInfoID: e.target.value,
            ClassId: e.target.value
        })
    }

    addStudentInfo() {
        
        let FormData1 = {
            ClassID: this.state.ClassId,
            Semester: this.state.Semester,
            Year: this.state.Year,
            //UserId: userId
        };

        fetch("https://localhost:44332/api/ClassInfoes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(FormData1)
        })
            .then(response => response.json())
            .then(response => {

                console.log("Success:", response);
                this.refreshPage();

            })
            .catch(error => {

                console.error("Error:", error);
            });
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    refreshPage() {
        window.location.reload(false);
    }
  render() {
    const mystyle = {
      color: "red",
      padding: "10px",
      fontFamily: "Arial"
    };
   
    return (
    
       <div>
         <br/>
         <br/>
         <br/>
            <br />


            {this.state.buttonPressed ? (

                <Studentsdata ids={(this.state.getid).toString()} semesters={(this.state.getSemester).toString()} years={(this.state.getYear).toString()} />
                
            ) : (
                    
           <div>
                        <h1 style={mystyle}>Admin Mode</h1>
                        <ViewSearchResults />

                        <MDBRow className="mb-4">
                            <MDBCol xl="3" md="6" className="mx-auto ">
                                <MDBBtn color="info" rounded onClick={this.toggle}>
                                    Add Class
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                             
          {this.state.classes.map(classdata=>{
               const {id,classID, semester, year}= classdata;
      return(
          <div key={id}>
              <button onClick={() => this.handleClick(classID, semester, year)}
            >  CMPS {classID} {semester} {year}</button>
          </div>
      )
  }
  
  )}

  </div>
                )}
            

                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <label for="ClassID">
                                Class
                            <select id="ClassID" value={this.state.value} onChange={this.handleclassID}>
                                    <option value="CMPS">CMPS</option>
                                    <option value="285">285</option>
                                    <option value="411">411</option>

                                </select>
                            </label>

                            <label for="Semester">
                                Semester
                            <select id="Semester" value={this.state.value} onChange={this.handlesemester}>
                                    <option value="Semester">Semester</option>
                                    <option value="Fall">Fall</option>
                                    <option value="Spring">Spring</option>
                                    <option value="Summer">Summer</option>

                                </select>
                            </label>

                            <label for="Year">
                                Year
                            <select id="Year" value={this.state.value} onChange={this.handleyear}>
                                    
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                </select>
                            </label>
                            <MDBModalFooter className="justify-content-center">
                                <MDBBtn
                                    color="info"
                                    onClick={() => {
                                        this.toggle();
                                        this.addStudentInfo();
                                    }}
                                >
                                    Add
            </MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>

           
</div>

    )
 
   }
}


export default withRouter(AdminHome);