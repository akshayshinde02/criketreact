import './App.css';
import FilterMatches from './home/FilterMatches';
import Home from './home/Home'
import Navbar from './nav/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
   <>
      <Navbar/>
      <Router>

        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/live' element={<FilterMatches status="LIVE"/>}/>
          <Route path='/complete' element={<FilterMatches status="COMPLETED"/>}/>
        </Routes>
      </Router>
   </>
  );
}

export default App;
