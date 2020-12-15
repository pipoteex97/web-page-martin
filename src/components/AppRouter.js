import React from 'react'
import { Navbar } from './Navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./approuter.css"
import {Footer} from './Footer/Footer'
import {Home} from './HomePage/Home'
import {Services} from './Servicess/Services'
import { Products } from './Productss/Products'
import {SignUp} from './SingUp/SignUp'

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' component={Services} />
                <Route path='/products' component={Products} />
                <Route path='/sign-up' component={SignUp} />
            </Switch>
            <Footer />
        </Router>
    )
}
