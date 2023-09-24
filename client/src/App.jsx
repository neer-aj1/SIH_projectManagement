import './App.css'
import Homepage from './components/homepage/Homepage';
import UserChats from './components/userChats/UserChats';
import Login from './components/login/Login'
import Register from './components/register/Register'
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import userChats from './components/userChats/userChats';

function App() {
  const User = useSelector(state => state.user.currentUser);
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={User ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/register" element={User ? <Navigate to={"/"} /> : <Register />} />
        <Route path="/chat" element={User ? <UserChats/> : <Navigate to={"/"} />} />
      </Routes>
    </Router>
  )
}

export default App
