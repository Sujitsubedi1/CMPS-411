import React, { Component } from 'react';
import "./footer.css"
class footer extends Component {
    state = {}
    render() {
        const style = {
            backgroundColor: "#262626"
        };
        return (
            <footer
                className="section footer-classic context-dark bg-image"
                style={style}
            >
                <div className="container">
                    <div className="row section-gap">
                        <div className="col-lg-4  col-md-10 col-sm-10">
                            <div className="single-footer-widget">
                                <p />
                                {/* <h4>Opening Hours</h4>
                                <ul className="hr-list">
                                    <li className="d-flex justify-content-between">
                                        <span>Monday - Friday</span>{" "}
                                        <span>08.00 am - 10.00 pm</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <span>Saturday</span> <span>08.00 am - 10.00 pm</span>
                                    </li>
                                    <li className="d-flex justify-content-between">
                                        <span>Sunday</span> <span>08.00 am - 10.00 pm</span>
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                        <p />

                        <div className="col-md-6">
                            {/* <h5>Contacts</h5>
                            <dl className="contact-list">
                                <dt>Address:</dt>
                                <dd>798 South Park Avenue, Jaipur, Raj</dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>email:</dt>
                                <dd>
                                    <a href="mailto:#">dkstudioin@gmail.com</a>
                                </dd>
                            </dl>
                            <dl className="contact-list">
                                <dt>phones:</dt>
                                <dd>
                                    <a href="tel:#">+91 7568543012</a> <span>or</span>{" "}
                                    <a href="tel:#">+91 9571195353</a>
                                </dd>
                            </dl> */}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default footer;