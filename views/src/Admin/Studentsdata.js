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

        axios.get('https://localhost:44332/api/Add_StudentInfo')
        .then(res => {
     this.setState({
       ProjectData:res.data
     })

     console.log(this.state.ProjectData)

    //  this.maparray();

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
      accessor: 'p_Name'
    },{
      Header: 'Technology Used',
      accessor: 't_used'
    },
    {
        Header: 'Github Repo',
        accessor: 'g_Repo'
      },
      {
        Header: ' Members Name',
        accessor: 't_members'
      },
      {
      Header:'Team Name ',
      accessor: 'g_Name'
      },
      {
        Header:'Description ',
        accessor: 'description'
        },
        {
            Header:'Class Name ',
            accessor: 'className'
            }, 
            {
                Header:'semester ',
                accessor: 'semester'
                }
]



    return (

          <div>
{/* 
             {this.state.mapped == true ? ( */}

                               <ReactTable
                            data={this.state.ProjectData}
                            columns={columns}
                                showPagination={false}

                                  defaultPageSize={10}

                                              /> 

              {/* ):(
                  <div></div>
              )} 
 */}


          </div>      
    )

  }
}
