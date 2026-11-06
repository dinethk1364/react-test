import "./App.css";
import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Navigation"
import Footer from "./components/Footer"
import Counter from "./pages/Counter";

import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/counter" element={<Counter/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
