import React, {Component}  from 'react';
import {Link} from 'react-router-dom';

export default class LandingPage extends Component{
    render(){
    return(
        <div className = "welcome">
        <h1>Welcome to Petful</h1>
        <h2>Adoption Process</h2>
        <p>Here at Petful we allow you to look for and adopt cute animals in need of a home.</p>
        <p>Adoption at Petful is first come first serve.</p>
        <p>The order in which you enter our adoption list will determine the pet you can adopt.</p>
        <div className = "button-list">

        <Link to = "/catPreview" className= "cat">View Your Available Cat</Link>
        <Link to = "/dogPreview" className= "dog">View Your Available Dog</Link>
        </div>
        </div>
    )
}
}