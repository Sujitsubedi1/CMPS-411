import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import axios from  'axios';
import { ControlLabel } from 'react-bootstrap';
import AdminHome from './AdminHome';


export default class Studentsdata extends Component {


    constructor (props){
        super(props);
            this.state ={
                ProjectData : [],
          newdata:[],
          mapped:false,


        }
    }

    componentDidMount(){
 
        axios.get('https://localhost:44332/api/ProjectInfoes')
        .then(res => {
     this.setState({
       ProjectData:res.data
     })

  
     this.maparray();
       
        })
       
          
    }

      maparray(){
        
        {this.state.ProjectData.map( data =>{
          const {className} = data;
      
          if(className == this.props.ids){
             this.state.newdata.push(data);
              }
              
            
          })

          }
          this.setState({
              mapped:true
          })
        }
  
  render() {
       
    
    const columns =
     [
       {
      Header: 'Project Name',
      accessor: 'projectName'
    },{
      Header: 'Technology Used',
      accessor: 'technologyused'
    },
    {
        Header: 'Github Repo',
        accessor: 'githubRepo'
      },
      {
        Header: ' Members Name',
        accessor: 'memberNames'
      },
      {
      Header:'class ID',
      accessor: 'className'
      }
]

  

    return (
        
          <div>
        
             {this.state.mapped == true ? (
                 
                               <ReactTable
                            data={this.state.newdata}
                            columns={columns}
                                showPagination={false}

                                  defaultPageSize={this.state.newdata.length}

                                              /> 
                                       
              ):(
                  <div></div>
              )} 

         
             
          </div>      
    )

  }
}


