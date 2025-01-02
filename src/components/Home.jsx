import React from 'react'
import './Home.css'
import imageSrc from'../assets/resume1.webp'
import { useNavigate } from 'react-router-dom'



const Home = () => {
    const navigate = useNavigate()

 

  return(
      <div className='fade-in'>
              <header>
          <h1 >Resume Builder</h1>
        </header>
        <main>
          <div className="content">
            <h2>Build your resume in <br /> <br />Just three simple steps</h2>
  
            <div className="step-container">
              <h4>1</h4>
              <p>Select your template</p>
            </div>
  
            <div className="step-container">
              <h4>2</h4>
              <p>Add your details</p>
            </div>
  
            <div className="step-container">
              <h4>3</h4>
              <p>Download your resume</p>
            </div>
          </div>
          <div className="image-section">
          <img src={imageSrc} alt="Pulsing" className="pulse" />
        
          </div>
          <div className='next-button'>
            <button onClick={() => navigate('template')}>Next</button>
          </div>
        </main>
        
      </div>
  
  
    )
}

export default Home