import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Intro from "./pages/Intro";
import Colombia from "./pages/Colombia";
import RuPaul from "./pages/RuPaul";
import Portfolio from './pages/Portfolio';
import Ations from "./pages/Ations";
import Conclusion from "./pages/Conclusion";


import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Introduction' element={<Intro/>} />
          <Route path='/Colombia-Periodical-Licenses-Map' element={<Colombia />} />
          <Route path='/RuPauls-Machine-Learning-Race' element={<RuPaul />} />
          <Route path='/Portfolio-Website' element={<Portfolio />} />
          <Route path='/Frustrations-Explorations-Aspirations' element={<Ations />} />
          <Route path='/Conclusion' element={<Conclusion />}/>
          <Route path='/test' element={<Test />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
