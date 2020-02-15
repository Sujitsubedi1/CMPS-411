import React, { Component } from 'react';
export default class Addclass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          abc: ''
          
          }
    }

    render(){
        return(
            <div>
                <p> Hello Add class</p>
            </div>
        )
    }
}