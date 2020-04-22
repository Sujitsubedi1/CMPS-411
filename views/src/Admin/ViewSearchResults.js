import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactSearchBox from 'react-search-box'
import { ControlLabel } from 'react-bootstrap';
import ReactTable from 'react-table-6';

class ViewSearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ProjectData: [],
			newdata: [],
			mapped: false,
			Students: [],
			inputValue: '',
			newSearchedData: [],
			queryValue: '',
			
		}
		

	}

	componentDidMount() {

		axios.get('https://localhost:44332/api/Add_StudentInfo')
			.then(res => {
				this.setState({
					ProjectData: res.data
				})

				console.log(this.state.ProjectData)

			
			})
		


	}
	//Foo() {
	//	const { useState, useEffect } = React;
	//	const [count, setCount] = useState(0);
	//	setCount(count + 1)
	
	//}

	handleInputChange(query) {
		this.state.newSearchedData = []
		this.state.ProjectData.map(data => {
			const {tmembers } = data;
			console.log(tmembers)
			if (tmembers.includes(query)) {
				this.state.newSearchedData.push(data);
			}

		})
		
		console.log(this.state.newSearchedData)

		
		
		this.setState({
			mapped: true,
			queryValue: query
		})
	


	}

	render() {
		
		let columns =
			[
				{
					Header: 'Project Name',
					accessor: 'pNames'

				}, {
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
					Header: 'Description',
					accessor: 'description'
				},



			]
		return (
			<div>
			<ReactSearchBox
				
					placeholder="Live Search Here"
					onChange={record => this.handleInputChange(record)}

			/>
			
				
				<br />
				{this.state.mapped == true &&  this.state.queryValue !="" ? (

					<ReactTable
						data={this.state.newSearchedData}
						columns={columns}
						showPagination={false}

						defaultPageSize={this.state.newSearchedData.length}

					/>
				) : (
						<div></div>
					)}




			</div>      
			
		)
	}
}
export default ViewSearchResults;