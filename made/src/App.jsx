//dependecies imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



//css import
import './App.css';

//pages imports
import Homepage from './Homepage';
import Madepage from './Madepage';

function App() {
  return (
    <Router className="bg-[#08422f]">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/made" element={<Madepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
