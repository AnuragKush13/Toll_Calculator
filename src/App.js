import './App.css';
import FaqComponent from './Components/FAQ_Component';
import TollComponent from './Components/Toll_Component';
import faqs from './Data/FAQs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FaqComponent faqs={faqs}/> */}
        <TollComponent/>
      </header>
    </div>
  );
}

export default App;
