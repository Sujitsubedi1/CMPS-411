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
            events: [
                this.componentDidMount
            ],
            gName: "",
            pNames: "",
            tused: "",
            gRepo: "",
            tmembers: "",
          
            
        };
       
    }
    componentDidMount() {
        axios.get('https://localhost:44332/api/Add_StudentInfo')

            .then(response => {
                console.log(response)
                this.setState({ events: response.data })
            })
            .catch(Error)
    }
  
    addEvent = () => {
        var newArray = [...this.state.events];
        newArray.push({
            id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
            gName: this.state.gName,
            pNames: this.state.pNames,
            tused: this.state.tused,
            gRepo: this.state.gRepo,
            tmembers: this.state.tmembers,
            description: this.state.description
        });
        this.setState({ events: newArray });
        this.setState({
            gName:'',
            pNames: '',
            tused: '',
            gRepo: '',
            tmembers: '',
            description: ''
        });
        axios.post('https://localhost:44332/api/Add_StudentInfo', this.state)
            .then(response => {
                console.log(response)
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

  

    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    render() {
        const { Dummy } = this.state;
        return (      
            <React.Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="9" className="mb-r">
                            <div id="events">
                                {this.state.events.map(event => (
                                    <Event
                                        key={event.id}
                                        id={event.id}
                                        gName={event.gName}
                                        pNames={event.pNames}
                                        tused={event.tused}
                                        gRepo={event.gRepo}
                                        tmembers={event.tmembers}
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
                                getValue={this.handleInputChange("gName")}
                            />
                            <MDBInput
                                name="name"
                                label="Project Name"
                                icon="user"
                                hint="Project Name"
                                group
                                type="text"
                                getValue={this.handleInputChange("pNames")}
                            />                            
                            <MDBInput
                                name="Team Members"
                                label="Team Members"
                                icon="user"
                                hint="Team Members"
                                group
                                type="text"
                                getValue={this.handleInputChange("tmembers")}
                            />
                            <MDBInput
                                name="Technologies Used"
                                label="Technologies Used"
                                icon="edit"
                                hint="Technologies Used"
                                group
                                type="text"
                                getValue={this.handleInputChange("tused")}
                            />
                            <MDBInput
                                name="Github Repository"
                                label="Github Repository"
                                icon="map"
                                group
                                type="text"
                                getValue={this.handleInputChange("gRepo")}
                            />
                            <MDBInput
                                name="description"
                                label="Project Description"
                                icon="map"
                                group
                                type="text"
                                getValue={this.handleInputChange("description")}
                            />

                          
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                        <MDBBtn
                            color="info"
                            onClick={() => {
                                this.toggleModal();
                                this.addEvent();
                                //this.refreshPage();
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
                                    {this.props.gName}
                                </h3>

                                <div className="media-body mb-3 mb-lg-3">

                                    <p className="font-smaller mb-0" >

                                        <MDBIcon icon="location-arrow" /> {this.props.pNames}
                                    </p>
                                    <p className="font-smaller mb-0" >

                                        <MDBIcon icon="location-arrow" /> {this.props.tmembers}
                                    </p>

                                    <p className="font-smaller mb-0">
                                        <MDBIcon icon="location-arrow" />{this.props.tused}
                                    </p>

                                    <p className="font-smaller mb-0">
                                        <MDBIcon icon="location-arrow" />{this.props.gRepo}
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
