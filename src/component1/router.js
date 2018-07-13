import React from 'react';
import './app1.css';
import { BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Register from './register1.js';
import Login from './login.js';
import Home from './home.js';



export default class Frontpage extends React.Component{

	render(){
		return(
			<div>
				
				<Router>
	
					<header className='header'>
						
            <Link to='/register1'>Register</Link><br/>
						<Link to='/login'>Login</Link><br/>

					</header>

						<Route path='/register1' component={Register} />
						<Route path='/login' component={Login} />
						<Route path='/home' component={Home} />
						
				</Router>
				<footer className='footer'>
				  <p>This is footer</p>
				</footer>
			</div>
		);
	}
}