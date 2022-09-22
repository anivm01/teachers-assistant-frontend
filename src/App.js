import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TemplateSelectionPage from './pages/TemplateselectionPage/TemplateSelectionPage';
import HomePage from './pages/TemplateselectionPage/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/templates' element={<TemplateSelectionPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
