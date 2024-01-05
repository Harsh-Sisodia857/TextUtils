import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import About from './component/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      toast("Dark Mode Applied",{autoClose: 2000});
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      toast("Light Mode Applied",{autoClose: 2000});
    }
  }
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar mode={mode} onhandleMode={handleMode} />
      <ToastContainer />
      
        <Routes>
          <Route path="/" element={<TextForm mode={mode} />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
