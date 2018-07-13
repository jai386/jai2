import React, {Component} from 'react';
class signUp extends Component {

	constructor() {
		super();
		this.state = {
			name:'',
			email:'',
			contact:'',
			password:'',
			confirmpassword:'',

		
	};
 }
	
		handleSubmit = (e) => {
			e.preventDefault();
			localStorage.setItem('name', e.target.name.value);
			localStorage.setItem('email', e.target.email.value);
			localStorage.setItem('contact', e.target.contact.value);
			localStorage.setItem('password', e.target.password.value);
			localStorage.setItem('Username', e.target.Username.value);


			let formdata = {};
			formdata.name = localStorage.getItem('name');
			formdata.email = localStorage.getItem('email');
			formdata.contact = localStorage.getItem('contact');
			formdata.password = localStorage.getItem('password');
			formdata.Username = localStorage.getItem('Username');
			this.props.history.push('/login');
           }

	render() {
	  return (
	  	   <div>

                <form className="form" onSubmit={this.handleSubmit}>
                <div className="div2">
                <h2>Signup</h2>
                
                Name:<br/>
                <input type='text' name='name' placeholder="Enter Your Name" required/><br/>

                Username:<br/>
                <input type='text' name='Username' placeholder="Username" required /><br/>

                Email:<br/>
                <input type='email' name='email' placeholder="Email" required/><br/>

                Contact:<br/>
                <input type='numbers' name='contact' placeholder="Mobile No." required/><br/>

                Password:<br/>
                <input type='password' name='password' placeholder="Password" required/><br/><br/>

                <button type="submit">Register</button>
                </div>
                </form>

	  	    </div>
	  	 );

	}

}

  export default signUp;

