import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { Photo_page } from './components/Photo_page';
import {Code_page} from './components/Code_page'
import {
  BrowserRouter as Router,   Route, Routes, 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>  
          <Route path="/" element={<Home />}  />
          <Route path="/photography" element={<Photo_page/>}  />
          <Route path="/code/*" element={<Code_page/>}  />
      </Routes>  
      </Router>
    </div>
  );
}

export default App;
