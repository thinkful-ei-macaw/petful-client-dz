import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import CatPreview from'./components/CatPreview';
import DogPreview from'./components/DogPreview';



class App extends Componenet{

  render(){
  return (
    <div className="App">
    <Route exact path={'/'} component={LandingPage} />
    <Route path={"/catPreview"} component={CatPreview}/>
    <Route path={"/dogPreview"} component={DogPreview}/>


   
    </div>
  );
}}

export default App;
