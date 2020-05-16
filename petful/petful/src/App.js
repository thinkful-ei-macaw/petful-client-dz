import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import CatPreview from'./components/AdoptCat';
import DogPreview from './components/AdoptDog';



class App extends React.Component{

  render(){
  return (
    <div className="App">
    <Route exact path={'/'} component={LandingPage}/>
    <Route path={"/catPreview"} component={CatPreview}/>
    <Route path={"/dogPreview"} component={DogPreview}/>


   
    </div>
  );
}}

export default App;
