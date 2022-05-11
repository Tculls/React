import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home.js'
import ParamsComponent from './components/ParamsComponent.js'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route element ={<Home />} path="/home"/>
      <Route element ={<ParamsComponent/>} path="/:word"/>
      <Route element ={<ParamsComponent/>} path="/:word/:color/:bgCol"/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
