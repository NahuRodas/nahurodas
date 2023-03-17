
import './Home.scss'

const Home = () => {
    return (
      <div className="home">
        <div className="bg-page">
          <div className="decoration">
            <p>01000011 01100101 01110011 01100001 
              01110010 00100000 01001110 01100001 
              01101000 01110101 01100101 01101100 
              00100000 01010010 01101111 01100100 
              01100001 01110011</p>
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
        <div className="contenedor">
          <h1 className='main-title'>
            <div className= 'first-name'>
              <div className="title">C</div>
              <div className="title">e</div>
              <div className="title">s</div>
              <div className="title">a</div>
              <div className="title">r</div>
            </div>
            <div className="mid-name">
              <div className="title">N</div>
              <div className="title">a</div>
              <div className="title">h</div>
              <div className="title">u</div>
              <div className="title">e</div>
              <div className="title">l</div>
            </div>
            <div className="last-name">
              <div className="title">R</div>
              <div className="title">o</div>
              <div className="title">d</div>
              <div className="title">a</div>
              <div className="title">s</div>
            </div>
          </h1>
        <p className='subtitle'>Desarrolador Web - Front end - Back end - Diseñador Web  </p>
        </div>
      </div>
    )
  }
  
  export default Home