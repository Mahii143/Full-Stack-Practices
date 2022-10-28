// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Demo from './components/Demo';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li><Link to="./">Home</Link></li>
          <li><Link to="./Login">Login Page</Link></li>
          <li><Link to="./Demo">Demo Page</Link></li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="Login" element={<Login />} />
        <Route exact path="Demo" element={<Demo />} />
      </Routes>
    </Router>

  );
}
export default App;
