import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Components/Layout/header.js';
import {Provider} from './Context';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import NotFound from './Components/Contact/Pages/NotFound';
import Contacts from './Components/Contact/Pages/Contacts';
import AddContact from './Components/Contact/Pages/AddContact';
import UpdContact from './Components/Contact/Pages/UpdContact';

function App() {
  return (
  	<Provider>
  		<Router>
		    <div className="App">
		      <Header brand="CONTACT MANAGER" />
		      <Switch>
			      <Route exact path='/contact/add' component={AddContact} />
			      <Route exact path='/' component={Contacts} />
			      <Route exact path='/contact/update/:id' component={UpdContact} />
			      <Route component={NotFound} />
		      </Switch>
		    </div>
	    </Router>
    </Provider>
  );
}

export default App;
