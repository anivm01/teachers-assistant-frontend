import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateSelectionPage from './pages/TemplateselectionPage/TemplateSelectionPage';
import HomePage from './pages/HomePage/HomePage';
import { useState } from 'react';
import AccountPage from './pages/AccountPage/AccountPage';
import Header from './components/Header/Header';
import Login from './components/Signup-Login/Login';
import Signup from './components/Signup-Login/Signup';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/templates' element={<TemplateSelectionPage isLoggedIn={isLoggedIn}/>}/>
      <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}/>
      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}/>
      <Route path='/account' element={<AccountPage isLoggedIn={isLoggedIn} />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
