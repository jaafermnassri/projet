
import './App.css';
import Navb from './components/Nav/Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
      <Navb/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
