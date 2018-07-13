import React from 'react';

import axios from 'axios';
import './app1.css';

export default class Register extends React.Component {
	constructor(props){
	  super(props);
	  this.state={
	    name1:"",
	    job:""
	    };

     this.onChange = this.onChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event) {
    this.setState({[event.target.name]:event.target.value});
  }


  handleSubmit= event => {
    event.preventDefault();

    const user ={ 
      name: this.state.name1,
      job: this.state.job
    
    };
    console.log(user);
    
    axios.post('https://reqres.in/api/users',user {
    	method: 'post'
    })
    .then(res=>{
      console.log(res);
      console.log(res.data);
      if(res.status===201){
      	alert('New preson Creacted');
  		}
    });
  
  };


  render() {
    return (
            <div className=''>
        <center>
          <h2>Register for New User</h2>
            <form className="form1" onSubmit={this.handleSubmit}>
                  <p><label>Name:</label>
                      <input type="text" name="name1" value={this.state.value} onChange={this.onChange} /></p>
                  <p><label>Job:</label>
                      <input type="text" name="job" value={this.state.value} onChange={this.onChange} /></p>
                    <input type="submit" value="Submit" />
              </form>
          </center> 
      </div>
    )
  }
}