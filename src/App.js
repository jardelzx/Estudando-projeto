import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Container from "./components/layout/Container";

function App() {
  return (
  <Container>
  <Router>
      
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/newproject">Novo Projeto</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
      
    </Router>
    </Container>
  );
}

export default App;
