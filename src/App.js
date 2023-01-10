import './App.scss';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TemplateSelectionPage from './pages/TemplateselectionPage/TemplateSelectionPage';
import HomePage from './pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import AccountPage from './pages/AccountPage/AccountPage';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';
import ChooseTemplate from './components/ChooseTemplate/ChooseTemplate';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(sessionStorage.getItem("loggedIn")));
const [isNavVisible, setIsNavVisible] = useState(false);
const params = useParams();
const checkWindowSize = () => {
  if (window.innerWidth > 1280) {
    setIsNavVisible(true)
  }
}
useEffect (()=>{
  checkWindowSize()
},[params])
useEffect (()=>{
  window.addEventListener('resize', ()=>{setIsNavVisible(false);checkWindowSize()})
}, [])

  return (
    <BrowserRouter>
    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible}/>
    <Routes>
      <Route path='/' element={<HomePage isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />} />
      <Route path='/templates' element={<TemplateSelectionPage isLoggedIn={isLoggedIn} isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible}/>}/>
      <Route path='/authentication' element={<Auth setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />}/>
      <Route path='/account' element={<AccountPage isLoggedIn={isLoggedIn} isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible} />}/>
      <Route path='/choose-template' element={<ChooseTemplate isLoggedIn={isLoggedIn} isNavVisible={isNavVisible} setIsNavVisible={setIsNavVisible}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
