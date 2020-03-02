import React, { Component } from 'react';
import BackgroundImage from '../Carousel/BackgroundImage';
import efficient from '../image/download.png';
// import faster from '../image/download (1).png';
import reliable from '../image/download (2).png';
// import img2 from '../image/icon-4.png';
import img4 from '../image/images.jpg'
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
class home extends Component {
    state = {}
    render() {
        return (
            <div>
                <BackgroundImage></BackgroundImage>
                <section className="my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Our Program Why is it so great?
                    </h2>
                    <p className="lead grey-text w-responsive text-center mx-auto mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam.
                     </p>

                    <MDBRow>
                        <MDBCol md="4">
                            <MDBRow className="mb-1">
                                <MDBCol size="2">
                                    <img className="single-service-item" src={efficient} alt="1st"></img>
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Efficient</h5>
                                    <p className="grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Experimental</h5>
                                    <p className="grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Relaxing</h5>
                                    <p className="grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="text-name">
                            <img
                                className="img-fluid"
                                src={img4}
                                alt=""
                            />
                        </MDBCol>
                        <MDBCol md="4">
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <img className="single-service-item color-2" src={reliable} alt="3rd"></img>
                                </MDBCol>
                                <MDBCol size="9">
                                    <h5 className="font-weight-bold mb-3">Reliable</h5>
                                    <p className="grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Rapid</h5>
                                    <p className="grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                </p>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol size="2">
                                    <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
                                </MDBCol>
                                <MDBCol size="10">
                                    <h5 className="font-weight-bold mb-3">Magical</h5>
                                    <p className="grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Reprehenderit maiores nam, aperiam minima assumenda deleniti
                                        hic.
                </p>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </section>
            </div>
        );
    }
}

export default home;



{/* <section className="services-section spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>Our Program</h2>
                                    <p>Our fitness experts can help you discover new training techniques and exercises that offer a
                            dynamic and efficient full-body workout.</p>
                                </div>
                                <div className="services-items">
                                    <div className="single-service-item">
                                        <img className="single-service-item" src={efficient} alt="1st"></img>
                                        <h5>efficient</h5>
                                        <p>We have a wide choice of class that are a great complement to any training programme. </p>
                                    </div>
                                    <div className="single-service-item color-1">
                                        <img className="single-service-item color-1" src={faster} alt="2nd"></img>
                                        <h5>faster</h5>
                                        <p>We have a wide choice of classes that are a great complement to any training programme.</p>

                                    </div>
                                    <div className="single-service-item color-2">
                                        <img className="single-service-item color-2" src={reliable} alt="3rd"></img>
                                        <h5>reliable</h5>
                                        <p>We have a wide choice of classes that are a great complement to any training programme.</p>

                                    </div>
                                    <div className="single-service-item color-3">
                                        <img className="single-service-item color-3" src={img2} alt="4th"></img>
                                        <h5>other</h5>
                                        <p>We have a wide choice of classes that are a great complement to any training programme.</p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="service-video set-bg" >
                                    <div className="play-btn">
                                         <a href="https://www.youtube.com/watch?v=SlPhMPnQ58k" class="service-video-popup"><i
                                            class="fa fa-play"></i></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}