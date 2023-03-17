
import './Home.scss'

const Home = () => {
    return (
      <div className="home">
        <div className="bg-page">
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
          <h1 className='main-title'> CesarNahuelRodas </h1>
          <p>Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Illo dolor accusantium 
            dignissimos possimus quis minus.</p>
        </div>
      </div>
    )
}

export default Home