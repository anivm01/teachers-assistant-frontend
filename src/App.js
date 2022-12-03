import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateSelectionPage from './pages/TemplateselectionPage/TemplateSelectionPage';
import HomePage from './pages/HomePage/HomePage';
import { useState } from 'react';
import AccountPage from './pages/AccountPage/AccountPage';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(sessionStorage.getItem("loggedIn")));

  return (
    <BrowserRouter>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/templates' element={<TemplateSelectionPage isLoggedIn={isLoggedIn}/>}/>
      <Route path='/login' element={<Auth newUser={false} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />}/>
      <Route path='/signup' element={<Auth newUser={true} />}/>
      <Route path='/account' element={<AccountPage isLoggedIn={isLoggedIn} />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
