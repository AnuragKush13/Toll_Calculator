import './App.css';
import FaqComponent from './Components/FAQ_Component';
import Map_Container from './Components/Map_Container';
import TollComponent from './Components/Toll_Component';
import faqs from './Data/FAQs';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      
        <BrowserRouter>
        <nav>
      <ul>
        <li>
          <Link to="/">Toll Calculator</Link>
        </li>
        <li>
          <Link to="/faqs">FAQs</Link>
        </li>
      </ul>
    </nav>
        <Routes>
            <Route path="/" exact element={ <TollComponent/>} />
            <Route path="/faqs" exact element={<FaqComponent faqs={faqs}/> } />
        </Routes>
        </BrowserRouter>
       
        
        
      </header>
    </div>
  );
}

export default App;
