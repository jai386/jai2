import React from 'react';
import axios from 'axios';
import Inputalbum from './Axiospost.js';


export default class Albums extends React.Component{
	constructor(props) {
    super(props);
	this.state ={
		data:[],	
	};
	}

	componentDidMount(){
		axios.get('https://reqres.in/api/users/2').then(res=>{
			console.log(res);
			this.setState({ data: res.data });
		});
	}

	render(){
		return(
			<div>
				<ul>
					{this.state.data.map(data => <li key={data.id}>Id={data.first_name}</li>)}
				</ul>
				
			</div>

		)
	}
}