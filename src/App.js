import React from 'react'
import { Route, Switch} from "react-router-dom"
import './App.css'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Bollywood from './Component/Bollywood';
import Hollywood from './Component/Hollywood';
import AuthForm from './Component/Auth/AuthForm';
import HomePage from './Component/HomePage';
import Video from './Component/Video';


function App() {
  return (
    <div className="navbar_area">
   <Navbar />
    <Switch>

   

    <Route path="/home" exact component={Home}/>
    <Route path="/bollywood" exact component={Bollywood}/>
    <Route path="/hollywood" exact component={Hollywood}/>
    <Route path="/authpage" exact component={AuthForm}/>
    <Route path="/" exact component={HomePage}/>
    <Route path="/video" exact component={Video}/>


    </Switch>
  
 
   

      
    </div>
  )
}

export default App;

