//dependecies imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



//css import
import './App.css';

//pages imports
import Homepage from './Homepage';
import Madepage from './Madepage';
import Quote from './Quote';


import { useState } from 'react';

function App() {

  //state
const [response, setResponse] = useState()

  return (
    <Router className="bg-[#08422f]">
      <Routes>
        <Route path='/' element={<Quote />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
