//will show dog and cat with option to get in line/ adopt 
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import config from '../config';

export default class AdoptCat extends Component{
state = {
    cats: [],
    people: []
}
componentDidMount(){
    this.getCat()
}

getCat=()=>{
    fetch(`${config.API_ENDPOINT}/pets/cats`)
    .then(res=>res.json())
    .then(data =>console.log(data) )
    
    
}


    
    render(){
        return(
            <form className="adoptionForm" onSubmit={this.handleSubmit}>
            <label className="signUp">
            <input type="text" name="name" required />
            </label>
            </form>

        );
    }
}

































