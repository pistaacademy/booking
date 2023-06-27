import TopNav from './components/TopNav';

import { Routes, Route } from "react-router-dom"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Dashboard from './user/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import DashboardSeller from './user/DashboardSeller';
import NewHotel from './hotels/NewHotel';


function App() {
  return (
    <div>
      <TopNav />
      <ToastContainer position="top-center" theme="dark" />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
          <Route path="/dashboard/seller" element={<PrivateRoute><DashboardSeller /></PrivateRoute>}></Route>
          <Route path="/hotels/new" element={<PrivateRoute><NewHotel /></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;
