import React, { Component } from 'react';
import Portfillo from './Portfillo';
import About from '../components/About';
import Contact from '../components/Contact';
import Registration from '../components/Registration'
import Profile from '../components/Profile';
import Employee from '../components/Employee';


import './home.css';
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route

} from 'react-router-dom';

class home extends Component {

    render() {
        return (
            <>
                <Router>
                    <div className="main_div">
                        <div className="main_nav">

                            <Link to='/'>Home</Link>
                            <Link to="/portfillo">PortFillo</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/about">About</Link>
                            <Link to='/registration'>Form</Link>
                        
                        </div>

                    </div>

                    <Switch>
                        <Route path='/portfillo'>
                            <Portfillo />
                        </Route>


                        <Route path='/about'>
                            <About />
                        </Route>

                        <Route path="/contact">
                            <Contact />
                        </Route>

                        <Route path='/registration'>
                            < Registration />
                        </Route>

                        <Route path ="/employe:employe_name" component ={Employee}/>


                        <Route path="/:profile_id" component={Profile} />

                    </Switch>

                </Router>

            </>
        )



    }
}

export default home;