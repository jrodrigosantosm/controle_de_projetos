import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject'
function App() {
  return (<Router>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/company'>Empresa</Link>
      </li>
      <li>
        <Link to='/newproject'>Novo Projeto</Link>
      </li>
      <li>
        <Link to='/contact'>Contato</Link>
      </li>
      
    </ul>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newproject" element={<NewProject/>} />
      </Routes>
    <p>Footer</p>
  </Router>)
}

export default App;