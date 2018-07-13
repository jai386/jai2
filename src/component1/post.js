import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
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
      [event.target.name]: this.state.email,
      [event.target.name]: this.state.password
    
    };
    axios.post('https://reqres.in/api/login',{user})
    .then(res=>{
      console.log(res);
      console.log(res.data.data);
    });
  };

  render() {
    console.log(this.state);
    return (
            <div className=''>
        <center>
          <h2>Signup</h2>
            <form onSubmit={this.handleSubmit}>
                  <p><label>Email:</label>
                      <input type="email" name="email" value={this.state.value} onChange={this.onChange} required /></p>
                  <p><label>Password:</label>
                      <input type="password" name="password" value={this.state.value} onChange={this.onChange} required /></p>
                    <input type="submit" value="Submit" />
              </form>
          </center> 
      </div>
    )
  }
}