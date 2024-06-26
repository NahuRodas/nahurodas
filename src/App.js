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
        <div className="bg-page">
          <div className="decoration">
              <span>&lt;span&gt; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptates nihil enim praesentium saepe in deleniti. &lt;/span&gt;</span>
          </div>
          <div className="quote">
            <span>&lt;span&gt; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Voluptates nihil enim praesentium saepe in deleniti. &lt;/span&gt;</span>
          </div>
          <div className="bg-code-top">
              <h4 className='bg-html'>&lt;html&gt;</h4>
              <h4 className='bg-body'>&emsp;&lt;body&gt;</h4>
          </div>
          <div className="bg-code-bot">
              <h4 className='bg-body'>&emsp;&lt;/body&gt;</h4>
              <h4 className='bg-html'>&lt;/html&gt;</h4>
          </div>
        </div>
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