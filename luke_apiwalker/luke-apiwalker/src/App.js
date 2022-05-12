import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Form from './components/Form'
import People from './views/People'
import Planets from './views/Planets'

function App() {
  const Error =()=>{
    return(
      <fieldset>
        <legend>Not working guys</legend>
      </fieldset>
    )
  }
  return (
    <div className="App">
  <BrowserRouter>
  <h1>Get Walker</h1>
  <Form />
  <Routes>
    <Route path="/people/:id" element={<People />}/>
    <Route path="/planet/:id" element={<Planets/>}/>
    <Route path="*" element={<Error />}/>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
