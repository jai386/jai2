import React from 'react';
import './app1.css';
import { BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import PersonList from './api.js';



export default class Homepage extends React.Component{

	render(){
		return(
			<div>
				
						<Router>
						<div>
						
						<header className='header'>
						<Link to='/api'>Api</Link><br/>

						</header>

						<Route path='/api' component={PersonList} />
						</div>
						</Router>

						
				
				<p></p>
				<footer className='footer'>
				<p>This is footer</p>
				</footer>
			</div>
			);
	}
}