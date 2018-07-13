import React, {Component} from 'react';

class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Username:'',
			password:'',

	};
 }
	
		handleSubmit = (e) => {
			if((e.target.Username.value)===localStorage.getItem('Username')&&
					(e.target.password.value)===localStorage.getItem('password'))	{
					alert('Login successful');

					this.props.history.push('/api');
				}
				else
				{
					alert('Inveled Username or password');
				}
	          }

				render() {
	  			return (
             		<div>

		                <form className="form" onSubmit={this.handleSubmit}>
			                <div className="div1">
			                	<h2>Login</h2>

				                Username:<br/>
				                <input type='text' name='Username' placeholder="Username" required /><br/>

				                Password:<br/>
				                <input type='password' name='password' placeholder="Password" required/><br/><br/>

				                <button>Submit</button><br/>
			                </div>
		               	</form>
             </div>
			 );
	      }

	}

  export default login;