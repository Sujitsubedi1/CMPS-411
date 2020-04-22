import React, { Component } from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import axios from  'axios';
import { ControlLabel } from 'react-bootstrap';
import ViewSearchResults from "./ViewSearchResults"
import ReactSearchBox from 'react-search-box'


export default class Studentsdata extends Component {


    constructor (props){
        super(props);
            this.state ={
                ProjectData : [],
          newdata:[],
                mapped: false,
                Students: [],
                inputValue: '',
                newSearchedData: [],
                queryValue: '',

        }
    }

    componentDidMount(){

        axios.get('https://localhost:44332/api/Add_StudentInfo')
        .then(res => {
     this.setState({
       ProjectData:res.data
     })

            console.log(this.state.ProjectData)

            this.maparray(this.state.queryValue);

        })


    }

    handleInputChange(query) {
       
            this.state.ProjectData.map(data => {
                const { tmembers } = data;

                if (tmembers.includes(query)) {
                    this.state.newSearchedData.push(data);
                }  
            })
       
        

        


    }
    resetnewdata() {
        this.state.newdata = []
    }

    maparray(record) {
        this.state.newdata = []
        {this.state.ProjectData.map( data =>{
            const { className, semester, year, tmembers } = data;

            if (className == this.props.ids && semester == this.props.semesters && year == this.props.years && tmembers.includes(record)) {
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
        Header: 'Members Name',
        accessor: 'tmembers'
      },
      {
      Header:'Description',
      accessor: 'description'
      },
  
]

  
            //value={props.inputValue} onChange={props.FilterOnChange}

    return (

        <div>
            <ReactSearchBox
                
                placeholder="Live Search Here"
                onChange={record => this.maparray(record)}
                
            />
            <br/>
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


