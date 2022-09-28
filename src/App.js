import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateSelectionPage from './pages/TemplateselectionPage/TemplateSelectionPage';
import HomePage from './pages/TemplateselectionPage/HomePage';
import { useEffect, useState } from 'react';
import AccountPage from './pages/TemplateselectionPage/AccountPage';

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect (()=>{
  console.log(isLoggedIn)
},[])

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='/templates' element={<TemplateSelectionPage isLoggedIn={isLoggedIn}/>}/>
      {isLoggedIn && <Route path='/account' element={<AccountPage isLoggedIn={isLoggedIn} />}/>}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
