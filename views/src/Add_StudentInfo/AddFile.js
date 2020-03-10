import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class AddFile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            Semester:'',
            Year:'',
              ClassInfoID: '',
  
            events: [
                this.componentDidMount
            ],
            g_Name: "",
            p_Name: "",
            t_used: "",
            g_Repo: "",
            t_members: "",
            classinfos:"",
         
           
      
        }
        this.handlesemester = this.handlesemester.bind(this);
        this.handleyear = this.handleyear.bind(this);
        this.handleclassID= this.handleclassID.bind(this);
    
    }
    componentDidMount() {
        axios.get('https://localhost:44332/api/Add_StudentInfo')

            .then(response => {
                // console.log(response)
                this.setState({ events: response.data })
            })
            .catch(Error)

            axios.get('https://localhost:44332/api/ClassInfoes')
            .then(response => {
                // console.log(response)
                this.setState({ classinfos: response.data })
                console.log(this.state.classinfos)
            })
            .catch(Error)
    }

    addEvent = () => {
        var newArray = [...this.state.events];
        newArray.push({
            id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
            g_Name: this.state.g_Name,
            p_Name: this.state.p_Name,
            t_used: this.state.t_used,
            g_Repo: this.state.g_Repo,
            t_members: this.state.t_members,
            description: this.state.description,
            Semester: this.state.Semester,
            Year: this.state.Year,
            ClassInfoID: this.state.ClassInfoID

        });
        this.setState({ events: newArray });
        this.setState({
            GName: '',
            p_Name: '',
            Tused: '',
            g_Repo: '',
            t_members: '',
            description: '',
  

        });
          
            console.log(this.state.ClassInfoID)
        this.getclassInfoID();
        console.log(this.state)
        axios.post('https://localhost:44332/api/Add_StudentInfo', this.state)
            .then(response => {
                // console.log(response)
            })
            .catch(error => {
                console.log(error)
            })


    };

    refreshPage() {
        window.location.reload();
    }



    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue
        });
    };



    
    getclassInfoID(){
        {this.state.classinfos.map(classdata=>{
                const {id,classID,semester,year}= classdata;
                        console.log(semester);
                        console.log(this.state.Semester)
                        if(this.state.ClassInfoID== classID){
                          
                            this.state.ClassInfoID=id;
                        }
               
                
        })}
      


    }

    handlesemester(e){

        this.setState({
            Semester:  e.target.value
        })
  

    }

    handleyear(e){

        this.setState({
            Year:  e.target.value
        })
  

    }

    handleclassID(e){
        this.setState({
            ClassInfoID:e.target.value
        })
    }

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
      

        // console.log(this.props.userId);

        return (


            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9" className="mb-r">
                            <h2 className="text-uppercase my-3">Today:</h2>
                            <div id="events">
                                {this.state.events.map(event => (
                                    <Event
                                        key={event.id}
                                        id={event.id}
                                        g_Name={event.g_Name}
                                        p_Name={event.p_Name}
                                        t_used={event.t_used}
                                        g_Repo={event.g_Repo}
                                        t_members={event.t_members}
                                        description={event.description}
                                    />
                                ))}
                            </div>
                            <MDBRow className="mb-4">
                                <MDBCol xl="3" md="6" className="mx-auto text-center">

                                    <MDBBtn color="info" rounded onClick={this.toggleModal}>
                                        Add Info
                                </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>


                    </MDBRow>
                </MDBContainer>
                <MDBModal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <MDBModalHeader
                        className="text-center"
                        titleClass="w-100 font-weight-bold"
                        toggle={this.toggleModal}
                    >
                        Add Information
            </MDBModalHeader>
                    <MDBModalBody>
                        <form className="mx-3 grey-text">
                            <MDBInput
                                name="gname"
                                label="Team Name"
                                icon="user"
                                hint="Team Name"
                                group
                                type="text"
                                getValue={this.handleInputChange("GName")}
                            />
                            <MDBInput
                                name="name"
                                label="Project Name"
                                icon="user"
                                hint="Project Name"
                                group
                                type="text"
                                getValue={this.handleInputChange("PNames")}
                            />
                            <MDBInput
                                name="Team Members"
                                label="Team Members"
                                icon="user"
                                hint="Team Members"
                                group
                                type="text"
                                getValue={this.handleInputChange("Tmembers")}
                            />
                            <MDBInput
                                name="Technologies Used"
                                label="Technologies Used"
                                icon="edit"
                                hint="Technologies Used"
                                group
                                type="text"
                                getValue={this.handleInputChange("Tused")}
                            />
                            <MDBInput
                                name="Github Repository"
                                label="Github Repository"
                                icon="map"
                                group
                                type="text"
                                getValue={this.handleInputChange("GRepo")}
                            />
                            <MDBInput
                                name="description"
                                label="Project Description"
                                icon="map"
                                group
                                type="text"
                                getValue={this.handleInputChange("description")}
                            />

                            <label>
                                         Class 
                            <select value={this.state.value} onChange={this.handleclassID}>
                            <option value="CMPS">CMPS</option>
                                <option value="285">285</option>
                                <option value="411">411</option>

                            </select>
                            </label>
                          
                                                <label>
                                         Semester
                            <select value={this.state.value} onChange={this.handlesemester}>
                            <option value="Semester">Semester</option>
                                <option value="Fall">Fall</option>
                                <option value="Spring">Spring</option>
                                <option value="Summer">Summer</option>

                            </select>
                            </label>

                                                <label>
                                         Year
                            <select value={this.state.value} onChange={this.handleyear}>
                            <option value="2024">2024</option>
                                <option value="2021">2021   </option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>

                            </select>
                            </label>
                                                                                                
                                               
                          
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <MDBBtn
                            color="info"
                            onClick={() => {
                                this.toggleModal();
                                this.addEvent();
                                this.refreshPage();
                            }}
                        >
                            Add
            </MDBBtn>
                    </MDBModalFooter>
                </MDBModal>


            </React.Fragment>


        );

    }
}

class Event extends Component {


    render() {
        return (
            <React.Fragment>
                <div className="media mt-1">
                    <div className="media-body mb-3 mb-lg-3">

                        <React.Fragment>
                            <div className="media mt-1">
                                <h3 className="h3-responsive font-weight-bold mr-3">
                                    {this.props.g_Name}
                                </h3>

                                <div className="media-body mb-3 mb-lg-3">

                                    <p className="font-smaller mb-0" >

                                        <MDBIcon icon="location-arrow" /> {this.props.p_Name}
                                    </p>
                                    <p className="font-smaller mb-0" >

                                        <MDBIcon icon="location-arrow" /> {this.props.t_members}
                                    </p>

                                    <p className="font-smaller mb-0">
                                        <MDBIcon icon="location-arrow" />{this.props.t_used}
                                    </p>

                                    <p className="font-smaller mb-0">
                                        <MDBIcon icon="location-arrow" />{this.props.g_Repo}
                                    </p>
                                    <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
                                        {this.props.description}
                                    </p>
                                </div>
                            </div>
                        </React.Fragment>



                    </div>
                </div>

            </React.Fragment>

        );

    }

}
export default withRouter(AddFile);
