import './LayoutStyle.scss'
import NavBar from '../SideBar/NavBar'

const Layout = () =>{
    return(
        <div className='App'>
            <NavBar />
            <div className="contenedor">
                <div className="bg-code-top">
                    <h4 className='bg-html'>&lt;html&gt;</h4>
                    <h4 className='bg-body'>&emsp;&lt;body&gt;</h4>
                </div>
                <div className="bg-code-bot">
                    <h4 className='bg-body'>&emsp;&lt;/body&gt;</h4>
                    <h4 className='bg-html'>&lt;/html&gt;</h4>
                </div>
            </div>
        </div>
    )
}

export default Layout;