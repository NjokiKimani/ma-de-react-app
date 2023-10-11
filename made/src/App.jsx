//dependecies imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



//css import
import './App.css';

//pages imports
import Homepage from './Homepage';
import Madepage from './Madepage';
import { useState } from 'react';

function App() {

  //state
const [response, setResponse] = useState()

  return (
    <Router className="bg-[#08422f]">
      <Routes>
        <Route path="/" element={<Homepage setResponse={setResponse} />}></Route>
        <Route path="made" element={<Madepage response={response} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
