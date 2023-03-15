import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import SobreMi from './components/SobreMi/SobreMi';
import Curriculum from './components/Curriculum/Curriculum';
import Proyectos from './components/Proyectos/Proyectos';
import Contacto from './components/Contacto/Contacto';

function App() {
    return(
        <>
            <Routes>
                <Route path='/' element = { <Layout /> } >
                    <Route index element = { <Home /> } />
                    <Route index element = { <SobreMi /> } />
                    <Route index element = { <Curriculum /> } />
                    <Route index element = { <Proyectos /> } />
                    <Route index element = { <Contacto /> } />
                </Route>
            </Routes>
        </>
    )
}

export default App;