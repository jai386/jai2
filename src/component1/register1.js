import React from 'react';

import axios from 'axios';
import './app1.css';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
     email:"",
      password:""
    };

      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(event){
    this.setState({[event.target.name]:event.target.value});
  }


  handleSubmit= event =>{
      event.preventDefault();

    const user ={ 
      email: this.state.email,
      password: this.state.password
    
    };
    console.log(user);
    
    axios.post('https://reqres.in/api/register',user/*,{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }*/)
    .then(res=>{
      console.log(res);
      console.log(res.data);
      if(res.status===201){
        alert("Sussfully Register")
      	this.props.history.push('/login');
  		}
      else
      {
        alert('Invalid password');
      }
  		
    });
  
  };


  render() {
    return (
            <div className=''>
        <center>
          <h2>Register</h2>
            <form className="form1" onSubmit={this.handleSubmit}>
                  <p><label>Email:</label>
                      <input type="email" name="email" value={this.state.value} onChange={this.onChange} required /></p>
                  <p><label>Password:</label>
                      <input type="password" name="password" value={this.state.value} onChange={this.onChange} /></p>
                    <input type="submit" value="Submit" />
              </form>
          </center> 
      </div>
    )
  }
}