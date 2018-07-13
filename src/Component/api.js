import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class Beveragelist extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      data: []
    }  
  }

  componentWillMount() {
    let url = 'https://www.dominos.co.id/infdominos/api/getlistvaluedeals';
    const token = 'lER2MLyGC6Go3rNdE7diPVf0umanUuTf8KhVwPB9ViyZJldnsqFhmViQisdcW6s4';
    axios.get(url, {
      method: 'get',
      headers: {
        'token': token,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then( response => {
        console.log(response);      
        let mydata = response.data.data;
        this.setState({data: mydata});
      }
    );
  }

  render() {
    return (
      <div className = "container">
          { (!_.isEmpty(this.state.data)) && this.state.data.map((item, index) => {
              return (
                  <img src={item.thumbnail} alt = "" key={index}/>
                );
              })
            }
      </div>
    );
  }
}

export default Beveragelist;

