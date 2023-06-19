import TopNav from './components/TopNav';

import { Routes, Route } from "react-router-dom"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';


function App() {
  return (
    <div>
      <TopNav />
      <ToastContainer position="top-center" theme="dark" />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
