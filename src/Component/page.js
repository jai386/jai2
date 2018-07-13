import React, { Component } from 'react';
import axios from 'axios';

class Beveragelist extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.update = this.update.bind(this);
    this.state = {      
      data: [],
      count: 1
    }
  }

  onChange = () => {
    console.log("state before",this.state.count);
    this.setState({ 
        count : this.state.count + 1
    });
    console.log("state after",this.state.count);
  }

  componentWillMount() {
    console.log("state",this.state.count);
    let url = 'https://reqres.in/api/users?page=' + update();
    axios.get(url).then( response => {
        console.log(response);      
        let mydata = response.data.data;
        this.setState({data: mydata});
      }
    )
  }

  render() {
    return (
      <div className = "container">
        <ul id='data1'>
          {this.state.data.map(mydata => 
            <li key={mydata.id}>
              Id={mydata.id}  
              Name:{mydata.first_name} {mydata.last_name} 
              {<img src={mydata.avatar}/>}
            </li>)}
          <button onClick={this.onChange}>Click</button>
        </ul>
      </div>
    );
  }
}

export default Beveragelist;

