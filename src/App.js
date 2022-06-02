import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import People from './pages/People';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="people" element={<People />} />

      </Routes>
    </div>
  );
}

export default App;
