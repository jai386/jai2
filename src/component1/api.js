import React from 'react';

import axios from 'axios';
import './app1.css';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://maps.googleapis.com/maps/api/js?sensor=false&libraries=places`)
      .then(res => {
        const person = res.data.data;
        this.setState({ persons:person });
      })
  }

  render() {
    console.log(this.state);
    return (
      <ul id='data1'>
        { this.state.persons.map(person => <li key={person.id}>
          Id={person.id}  
          Name:{person.first_name} {person.last_name} 
          {<img src={person.avatar}/>}</li>)}
      </ul>
    )
  }
}