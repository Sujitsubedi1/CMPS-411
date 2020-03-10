import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import axios from  'axios';
import { ControlLabel } from 'react-bootstrap';



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

        axios.get('https://localhost:44332/api/Add_StudentInfo')
        .then(res => {
     this.setState({
       ProjectData:res.data
     })

     console.log(this.state.ProjectData)

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
      accessor: 'pNames'                            
     
    },{
      Header: 'Technology Used',
      accessor: 'tused'
    },
    {
        Header: 'Github Repo',
        accessor: 'gRepo'
      },
      {
        Header: ' Members Name',
        accessor: 'tmembers'
      },
      {
      Header:'Description',
      accessor: 'description'
      },
 
      
   
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


