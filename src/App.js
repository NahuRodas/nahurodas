import './App.scss'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/SideBar/NavBar'
import Home from './components/Home/Home';
import SobreMi from './components/SobreMi/SobreMi';
import Curriculum from './components/Curriculum/Curriculum';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';

function App() {
    return(
        <>
            <NavBar />
            <Routes>
                    <Route path='/' element = { <Home /> } />
                    <Route path='/SobreMi' element = { <SobreMi /> } />
                    <Route path='/Curriculum' element = { <Curriculum /> } />
                    <Route path='/Proyectos' element = { <Proyectos /> } />
                    <Route path='/Contacto' element = { <Contacto /> } />
            </Routes>
        </>
    )
}

export default App;