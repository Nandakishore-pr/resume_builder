import React from 'react';
import { useLocation } from 'react-router-dom';
import './Template1.css';
import { forwardRef } from 'react';


const ResumePage = (props, ref) => {
  const location = useLocation();
  const { formData } = location.state || {};
  // console.log("resume page :" ,formData);
  return (

    <div ref = {ref}>
      <div className="container">
      <div className="header">
        <div className="full-name">
          <span className="first-name">{formData?.firstName}</span>
          <span className="last-name">{formData?.lastname}</span>
        </div>
        <div className="jobtitle">
          <span className="jobtitle">{formData?.jobTitle}</span>
          
        </div>
        <div className="contact-info">
          <span className="email">Email: </span>
          <span className="email-val">{formData?.email}</span>
          <span className="separator"></span>
          <span className="phone">Phone: </span>
          <span className="phone-val">{formData?.phone}</span>
        </div>
        </div>

        <div className="about">
          <span className="position">{formData?.jobtitle} </span>
          <span className="desc">
          {formData?.discription}
          </span>
        </div>
      {/* </div> */}

      <div className="details">
        <div className="section">
          <div className="section__title">Experience</div>
          <div className="section__list">
            <div className="section__list-item">
              <div className="left">
                <div className="name">{formData?.companyName}</div>
                <div className="addr"></div>
                <div className="duration">{formData?.experienceYear}</div>
              </div>
              <div className="right">
              <div className="name">{formData?.companyName}</div>
                {/* <div className="addr">Santa Monica, CA</div> */}
                <div className="duration">{formData?.experienceYear}</div>
              </div>
            </div>
            <div className="section__list-item">
              <div className="left">
              <div className="name">{formData?.companyName}</div>
                <div className="addr"></div>
                <div className="duration">{formData?.experienceYear}</div>
              </div>
              <div className="right">
              <div className="name">{formData?.companyName}</div>
                {/* <div className="addr">Santa Monica, CA</div> */}
                <div className="duration">{formData?.experienceYear}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section__title">Education</div>
          <div className="section__list">
            <div className="section__list-item">
              <div className="left">
                <div className="name">{formData?.collegeName}</div>
                {/* <div className="addr">San Francisco, CA</div> */}
                <div className="duration">{formData?.graduationYear}</div>
              </div>
              <div className="right">
                 <div className="name">{formData?.collegeName}</div>
                {/* <div className="addr">Santa Monica, CA</div> */}
                <div className="duration">{formData?.graduationYear}</div>
              </div>
            </div>
            <div className="section__list-item">
              <div className="left">
                <div className="name">{formData?.collegeName}</div>
                {/* <div className="addr">Santa Monica, CA</div> */}
                <div className="duration">{formData?.graduationYear}</div>
              </div>
              <div className="right">
                <div className="name">{formData?.collegeName}</div>
                {/* <div className="addr">Santa Monica, CA</div> */}
                <div className="duration">{formData?.graduationYear}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section__title">Projects</div>
          <div className="section__list">
            <div className="section__list-item">
              <div className="name">{formData?.project}</div>
              <div className="text">{formData?.projectDiscription}</div>
            </div>

            <div className="section__list-item">
              <div className="name">{formData?.project}</div>
              <div className="text">{formData?.projectDiscription}</div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section__title">Skills</div>
          <div className="skills">
            <div className="skills__item">
              <div className="left">
                <div className="name">{formData?.skill1}</div>
              </div>
              <div className="right">
                <input id="ck1" type="checkbox"checked />
                <label htmlFor="ck1"></label>
                <input id="ck2" type="checkbox"checked />
                <label htmlFor="ck2"></label>
                <input id="ck3" type="checkbox"checked />
                <label htmlFor="ck3"></label>
                <input id="ck4" type="checkbox" />
                <label htmlFor="ck4"></label>
                <input id="ck5" type="checkbox"/>
                <label htmlFor="ck5"></label>
              </div>
            </div>

            <div className="skills__item">
              <div className="left">
                <div className="name">{formData?.skill2}</div>
              </div>
              <div className="right">
                <input id="ck1" type="checkbox"checked />
                <label htmlFor="ck1"></label>
                <input id="ck2" type="checkbox"checked  />
                <label htmlFor="ck2"></label>
                <input id="ck3" type="checkbox"checked />
                <label htmlFor="ck3"></label>
                <input id="ck4" type="checkbox"checked />
                <label htmlFor="ck4"></label>
                <input id="ck5" type="checkbox"checked />
                <label htmlFor="ck5"></label>
              </div>
            </div>

            <div className="skills__item">
              <div className="left">
                <div className="name">{formData?.skill3}</div>
              </div>
              <div className="right">
                <input id="ck1" type="checkbox"checked />
                <label htmlFor="ck1"></label>
                <input id="ck2" type="checkbox"checked />
                <label htmlFor="ck2"></label>
                <input id="ck3" type="checkbox"checked />
                <label htmlFor="ck3"></label>
                <input id="ck4" type="checkbox"checked />
                <label htmlFor="ck4"></label>
                <input id="ck5" type="checkbox" />
                <label htmlFor="ck5"></label>
              </div>
            </div>

            <div className="skills__item">
              <div className="left">
                <div className="name">{formData?.skill4}</div>
              </div>
              <div className="right">
                <input id="ck1" type="checkbox"checked />
                <label htmlFor="ck1"></label>
                <input id="ck2" type="checkbox"checked />
                <label htmlFor="ck2"></label>
                <input id="ck3" type="checkbox"checked />
                <label htmlFor="ck3"></label>
                <input id="ck4" type="checkbox"checked />
                <label htmlFor="ck4"></label>
                <input id="ck5" type="checkbox" />
                <label htmlFor="ck5"></label>
              </div>
            </div>

            <div className="skills__item">
              <div className="left">
                <div className="name">{formData?.skill5}</div>
              </div>
              <div className="right">
                <input id="ck1" type="checkbox"checked />
                <label htmlFor="ck1"></label>
                <input id="ck2" type="checkbox"checked />
                <label htmlFor="ck2"></label>
                <input id="ck3" type="checkbox"checked />
                <label htmlFor="ck3"></label>
                <input id="ck4" type="checkbox"checked />
                <label htmlFor="ck4"></label>
                <input id="ck5" type="checkbox"checked />
                <label htmlFor="ck5"></label>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
    </div>

    
  );
};

export default forwardRef(ResumePage);


