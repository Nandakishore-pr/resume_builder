import React from 'react'
import './Template1.css'


const Template1 = () => {
  return (
    <> 
    

    <div className="container">
          <div className="header">
            <div className="full-name">
              <span className="first-name">John</span>
              <span className="last-name">Doe</span>
            </div>
            <div className="contact-info">
              <span className="email">Email: </span>
              <span className="email-val">john.doe@gmail.com</span>
              <span className="separator"> | </span>
              <span className="phone">Phone: </span>
              <span className="phone-val">111-222-3333</span>
            </div>
    
            <div className="about">
              <span className="position">Front-End Developer </span>
              <span className="desc">
                I am a front-end developer with more than 3 years of experience
                writing HTML, CSS, and JavaScript. I am motivated, result-focused,
                and seeking a successful team-oriented company with an opportunity
                to grow.
              </span>
            </div>
          </div>
    
          <div className="details">
            {/* Experience Section */}
            <div className="section">
              <div className="section__title">Experience</div>
              <div className="section__list">
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">KlowdBox</div>
                    <div className="addr">San Fr, CA</div>
                    <div className="duration">Jan 2011 - Feb 2015</div>
                  </div>
                  <div className="right">
                    <div className="name">Front-End Developer</div>
                    <div className="desc">Did this and that</div>
                  </div>
                </div>
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">Akount</div>
                    <div className="addr">San Monica, CA</div>
                    <div className="duration">Jan 2011 - Feb 2015</div>
                  </div>
                  <div className="right">
                    <div className="name">Front-End Developer</div>
                    <div className="desc">Did this and that</div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Education Section */}
            <div className="section">
              <div className="section__title">Education</div>
              <div className="section__list">
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">Sample Institute of Technology</div>
                    <div className="addr">San Fr, CA</div>
                    <div className="duration">Jan 2011 - Feb 2015</div>
                  </div>
                  <div className="right">
                    <div className="name">Front-End Developer</div>
                    <div className="desc">Did this and that</div>
                  </div>
                </div>
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">Akount</div>
                    <div className="addr">San Monica, CA</div>
                    <div className="duration">Jan 2011 - Feb 2015</div>
                  </div>
                  <div className="right">
                    <div className="name">Front-End Developer</div>
                    <div className="desc">Did this and that</div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Projects Section */}
            <div className="section">
              <div className="section__title">Projects</div>
              <div className="section__list">
                <div className="section__list-item">
                  <div className="name">DSP</div>
                  <div className="text">
                    I am a front-end developer with more than 3 years of experience
                    writing HTML, CSS, and JavaScript. I am motivated,
                    result-focused, and seeking a successful team-oriented company
                    with an opportunity to grow.
                  </div>
                </div>
                <div className="section__list-item">
                  <div className="name">DSP</div>
                  <div className="text">
                    I am a front-end developer with more than 3 years of experience
                    writing HTML, CSS, and JavaScript. I am motivated,
                    result-focused, and seeking a successful team-oriented company
                    with an opportunity to grow. <a href="/login">link</a>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Skills Section */}
            <div className="section">
              <div className="section__title">Skills</div>
              <div className="skills">
                <div className="skills__item">
                  <div className="left">
                    <div className="name">JavaScript</div>
                  </div>
                  <div className="right">
                    <input id="ck1" type="checkbox" defaultChecked />
                    <label htmlFor="ck1"></label>
                    <input id="ck2" type="checkbox" defaultChecked />
                    <label htmlFor="ck2"></label>
                    <input id="ck3" type="checkbox" />
                    <label htmlFor="ck3"></label>
                    <input id="ck4" type="checkbox" />
                    <label htmlFor="ck4"></label>
                    <input id="ck5" type="checkbox" />
                    <label htmlFor="ck5"></label>
                  </div>
                </div>
                <div className="skills__item">
                  <div className="left">
                    <div className="name">CSS</div>
                  </div>
                  <div className="right">
                    <input id="ck1" type="checkbox" defaultChecked />
                    <label htmlFor="ck1"></label>
                    <input id="ck2" type="checkbox" defaultChecked />
                    <label htmlFor="ck2"></label>
                    <input id="ck3" type="checkbox" />
                    <label htmlFor="ck3"></label>
                    <input id="ck4" type="checkbox" />
                    <label htmlFor="ck4"></label>
                    <input id="ck5" type="checkbox" />
                    <label htmlFor="ck5"></label>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Interests Section */}
            <div className="section">
              <div className="section__title">Interests</div>
              <div className="section__list">
                <div className="section__list-item">Football, Programming</div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Template1