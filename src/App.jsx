import "./App.css";
import Home from "./pages/Home";
import About  from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Navigation"
import Footer from "./components/Footer"
import Counter from "./pages/Counter";
import Bootsrap from "./pages/Bootsrap";
import Event from "./pages/Event";

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UseEffects from "./pages/UseEffects";

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
          <Route path="/bootsrap" element={<Bootsrap/>} />
          <Route path="/event" element={<Event/>} />
          <Route path="/useeffect" element={<UseEffects/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
