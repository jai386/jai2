import React from 'react';
import axios from 'axios';

export default class Todopost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    userId: '',
    title: '',
  };
}
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const todos = {
      userId: this.state.userId,
      title: this.state.title
    };

    axios.post(`https://jsonplaceholder.typicode.com/todos/`, { todos })

      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            UserId:
            <input type="text" name="userId" value = {this.state.userId} onChange={this.handleChange} />
          </label>
          
          <label>
            Title:
            <input type="text" name="title" value = {this.state.title} onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}