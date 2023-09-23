import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register' 
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const User = useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/login" element={User ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/register" element={User ? <Navigate to={"/"} /> : <Register />} />
      </Routes>
    </Router>
  )
}

export default App
