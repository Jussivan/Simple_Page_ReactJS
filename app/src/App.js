import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Components/Pages/Home'
import Empresa from './Components/Pages/Empresa'
import Contato from './Components/Pages/Contato'
import Projects from './Components/Pages/Projects'
import NewProject from './Components/Pages/NewProject'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Container from './Components/Layout/Container'
import EditProject from './Components/Project/EditProject'

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass='min-height'>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/NewProject' element={<NewProject/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/projects/:id' element={<EditProject/>}/>
        <Route path='/Empresa' element={<Empresa/>}/>    
        <Route path='/Contato' element={<Contato/>}/>
      </Routes>
      </Container>
      <Footer/>
      </Router>
  );
}
export default App;