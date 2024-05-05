import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Style from './utils/styles.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Style />
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
