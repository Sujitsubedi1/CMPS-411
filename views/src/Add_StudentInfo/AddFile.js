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
            Semester: '',
            Year: '',
            ClassInfoID: '',
            ClassId: '',
            events: [
                // this.componentDidMount
            ],
            gName: "",
            pNames: "",
            tused: "",
            gRepo: "",
            events: [],
            tmembers: "",
            classinfos: "",
            UID: ''


        }
        this.handlesemester = this.handlesemester.bind(this);
        this.handleyear = this.handleyear.bind(this);
        this.handleclassID = this.handleclassID.bind(this);
        var userData = JSON.parse(sessionStorage.getItem("userData"));

        this.getUserEvents(userData.id);


    }
    componentDidMount() {


        axios.get('https://localhost:44332/api/ClassInfoes')
            .then(response => {
                // console.log(response)
                this.setState({ classinfos: response.data })
                console.log(this.state.classinfos)
            })
            .catch(Error)
    }

    getStudentInfo() {
        axios.get('https://localhost:44332/api/ClassInfoes')
            .then(response => {
                // console.log(response)
                this.setState({ classinfos: response.data })
                console.log(this.state.classinfos)
            })
            .catch(Error)
    }


    getUserEvents(id) {

        fetch("https://localhost:44332/api/Add_StudentInfo/" + id)
            .then(response => response.json())
            .then(resData => {
                JSON.stringify(resData);
                this.setState({ events: resData, UID: id });
            });
    }


    addEvent(userId) {
        console.log("pROGRESS 1" + userId)
        this.getclassInfoID()
        let FormData = {
            gName: this.state.gName,
            pNames: this.state.pNames,
            tused: this.state.tused,
            gRepo: this.state.gRepo,
            tmembers: this.state.tmembers,
            description: this.state.description,
            UserId: userId,
            ClassInfoID: this.state.ClassInfoID
        };

        if (FormData.ClassInfoID == this.state.ClassId) {
            this.addStudentInfo();
            this.getStudentInfo();
            this.refreshPage();
            this.getclassInfoID();

            let FormData2 = {
                gName: this.state.gName,
                pNames: this.state.pNames,
                tused: this.state.tused,
                gRepo: this.state.gRepo,
                tmembers: this.state.tmembers,
                description: this.state.description,
                UserId: userId,
                ClassInfoID: this.state.ClassInfoID
            };

            this.post(FormData2);
            
        }
        else {
            this.post(FormData);
        }
       
        
        

 

    }
    post(FormDatas) {
        fetch("https://localhost:44332/api/Add_StudentInfo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(FormDatas)
        })
            .then(response => response.json())
            .then(response => {
                console.log("Success:", response);
                this.setState({ modal: true })
            })
            .catch(error => {

                console.error("Error:", error);
            });
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
                //this.setState({ modal: true })
            })
            .catch(error => {

                console.error("Error:", error);
            });
    }


    refreshPage() {
        window.location.reload();
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    handleInputChange = inputName => value => {
        const nextValue = value;
        this.setState({
            [inputName]: nextValue
        });
    };




    getclassInfoID() {
        {
            this.state.classinfos.map(classdata => {
                const { id, classID, semester, year } = classdata;
                console.log(classdata);

                console.log(this.state.Semester)
                if (this.state.ClassInfoID == classID && this.state.Semester == semester && this.state.Year == year) {

                    this.state.ClassInfoID = id;

                }
                
               
               

            })
        }



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

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        const userId = this.state.UID;

        const { gName, pNames, tused, tmembers, gRepo, description } = this.state;
        return (
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9" className="mb-r">
                            <h2 className="text-uppercase my-3">Today:</h2>
                            <div id="events">
                                <Event events={this.state.events} />
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
                                value={gName}
                                // onChange={this.dataChange.bind(this)}
                                getValue={this.handleInputChange("gName")}
                            />
                            <MDBInput
                                name="name"
                                label="Project Name"
                                icon="user"
                                hint="Project Name"
                                group
                                type="text"
                                value={pNames}
                                getValue={this.handleInputChange("pNames")}

                            />
                            <MDBInput
                                name="Team Members"
                                label="Team Members"
                                icon="user"
                                hint="Team Members"
                                group
                                type="text"
                                value={tmembers}
                                getValue={this.handleInputChange("tmembers")}

                            />
                            <MDBInput
                                name="Technologies Used"
                                label="Technologies Used"
                                icon="edit"
                                hint="Technologies Used"
                                group
                                type="text"
                                value={tused}
                                getValue={this.handleInputChange("tused")}
                            />
                            <MDBInput
                                name="Github Repository"
                                label="Github Repository"
                                icon="map"
                                group
                                type="text"
                                value={gRepo}
                                getValue={this.handleInputChange("gRepo")}
                            // onChange={this.dataChange.bind(this)}
                            />
                            <MDBInput
                                name="description"
                                label="Project Description"
                                icon="map"
                                group
                                type="text"
                                value={description}
                                // onChange={this.dataChange.bind(this)}
                                getValue={this.handleInputChange("description")}
                            />

                            <label for= "ClassID">
                                Class
                            <select id= "ClassID" value={this.state.value} onChange={this.handleclassID}>
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
                                    <option value="2024">2024</option>
                                    <option value="2021">2021</option>
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
                                this.addEvent(userId);
                                this.refreshPage();
                            }}
                        >
                            Add
            </MDBBtn>
                    </MDBModalFooter>
                </MDBModal>

            </React.Fragment >
        );

    }
}

class Event extends Component {
    render() {
        console.log(this.props.events);

        return (
            <React.Fragment>
                <div className="media mt-1">
                    <div className="media-body mb-3 mb-lg-3">

                        {this.props.events.map((event, key) => {
                            return (
                                <React.Fragment key={event.id}>
                                    <div className="media mt-1">
                                        <h3 className="h3-responsive font-weight-bold mr-3">
                                            {event.gName}
                                        </h3>

                                        <div className="media-body mb-3 mb-lg-3">
                                            <p className="font-smaller mb-0" >

                                                <MDBIcon icon="location-arrow" /> {event.pNames}
                                            </p>
                                            <p className="font-smaller mb-0" >

                                                <MDBIcon icon="location-arrow" /> {event.tmembers}
                                            </p>

                                            <p className="font-smaller mb-0">
                                                <MDBIcon icon="location-arrow" />{event.tused}
                                            </p>

                                            <p className="font-smaller mb-0">
                                                <MDBIcon icon="location-arrow" />{event.gRepo}
                                            </p>
                                            <p className="p-2 mb-4  blue-grey lighten-5 blue-grey lighten-5">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                </React.Fragment>)
                        })}
                    </div>
                </div>
            </React.Fragment>
        );

    }

}
export default withRouter(AddFile);