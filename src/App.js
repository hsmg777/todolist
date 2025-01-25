import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import Storetareas from './components/Storetareas'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/storetarea" element={<Storetareas/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
