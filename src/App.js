import Home from './booking/Home';
import Login from './auth/Login';
import Register from './auth/Register';

import TopNav from './components/TopNav';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <TopNav />
    <ToastContainer position="top-center" theme="dark" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
