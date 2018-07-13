import React from 'react';
import './app1.css'
import { BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import PersonList from './api.js';
import Register from './registeruser.js';
import DELETE from './delete.js'

class Home extends React.Component{
	render(){
		return(
			<div className="page">
          			<Router>
						<div>
						
						<Link to='/api'>PersonList</Link><br/>
						<Link to='/registeruser'>Register</Link><br/>
						<Link to='/delete'>DELETE</Link><br/>



						<Route path='/api' component={PersonList} />
						<Route path='/registeruser' component={ Register}/>
						<Route path='/delete' component={ DELETE}/>
						</div>
						</Router>
			</div>
			);
	}
}
export default Home;