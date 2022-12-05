
import './App.css';
import Navb from './components/Nav/Navb';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AddDorm from './components/AddDorm/AddDorm';
import PrivateUser from './components/private/PrivateUser';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers, getCurrentUser } from './Redux/actions/userActions';
import { getAllFoyers } from './Redux/actions/foyerActions';
import DormDetail from './components/DormDetail/DormDetail';
import BookDorm from './components/BookDorm/BookDorm';
import DormList from './components/DormList/DormList';
import UserDetail from './components/UserDetail/UserDetail';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getAllUsers())
    dispatch(getAllFoyers());
  }, []);
  return (
    <div className="App">
      <Navb/>
      <Routes>
        <Route path="/dormlist"  element={<DormList/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/addDorm" element={<PrivateUser><AddDorm /></PrivateUser>} />
        <Route path="/:id" element={<DormDetail />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/book/:id" element={<BookDorm />} /> */}
      </Routes>
    </div>
  );
}

export default App;
