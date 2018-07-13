import React,{Component} from 'react';


export default class Clock extends  Component{
	constructor(props){
		super(props);
		this.state={
			currenttime:new Date().toLocalString()
		}
	}




	render(){
		return(
				<h1>{this.state.currenttime}</h1>
			);
	}
}