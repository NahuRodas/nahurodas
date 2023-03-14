import React, { Component } from 'react'
import '../styles/Home.scss'

export class Home extends Component {
  render() {
    return (
      <div className="contenedor">
        <div className="bg-code-top">
          <h4 className='bg-html'>&lt;html&gt;</h4>
          <h4 className='bg-body'>&emsp;&lt;body&gt;</h4>
        </div>
        <div className='main-title'>
          <h1 className='title'>NahuRodas</h1>
        </div>
        <div className="bg-code-bot">
          <h4 className='bg-body'>&emsp;&lt;/body&gt;</h4>
          <h4 className='bg-html'>&lt;/html&gt;</h4>
        </div>
      </div>
    )
  }
}

export default Home