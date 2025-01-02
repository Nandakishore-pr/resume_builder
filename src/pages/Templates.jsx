import React from 'react'
import Template1 from '../components/Template1';
import './Templates.css'
import imageSrc from '../assets/ss.png'
import { Link } from 'react-router-dom';
import Details from './Details';

const Templates = () => {
    return (
        <>
        

          {/* <Template1></Template1> */}
        <div className="templates">
          <header className="templates-header">
            <h1>Resume Builder</h1>
          </header>
          <div className="templates-grid">
            <Link to="/details" className="template-card">
              <img src={imageSrc} alt="Template 1" />
            </Link>
            <Link to="/details" className="template-card">
              <img src={imageSrc} alt="Template 1" />
            </Link>
            <Link to="/details" className="template-card">
              <img src={imageSrc} alt="Template 1" />
            </Link>
            <Link to="/details" className="template-card">
              <img src={imageSrc} alt="Template 1" />
            </Link>
            {/* <div className="template-card">
            <img src={imageSrc} alt="" />           
             </div>
            <div className="template-card">
            <img src={imageSrc} alt="" />        
            </div> */}
          </div>
        </div>
        
        </>
      );
}

export default Templates