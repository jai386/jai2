import React, {Component} from 'react';
import{ BrowserRouter as Router,
Route,
Link
} from 'react-router-dom';
import Inputalbums from './Component/Axiospost';
import Albums from './Component/Axios';
import Home from './Home';

const App2=()=>(
	<Router>
		<div>
			<Route exact path='/' component={Home}/>
			<Route path="/Axios" component={Inputalbums}/>
			<Route path="/Axiospost" component={Albums} />

			<header>
        		<Link to='Albums'><h3>Get</h3></Link>
        		<Link to='Inputalbums'><h3>Post</h3></Link>
     		</header>   

		</div>
	</Router>
	)
export default App2;