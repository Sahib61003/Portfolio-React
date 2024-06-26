import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_img from '../../assets/about_img.jpg'

const About = () => {
    return (
        <div  id='about' className='about'>
            <div className="about-title">
                <h1> About Me </h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-sections">
                <div className='about-left'>
                    <img className='img1' src={about_img} alt='' />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I am Sahib Preet Singh, a proficient expert in the field of Data Science, Machine Learning, Deep Learning, Computer Vision, Object Detection, Natural Language Processing and an intermediate in front end development.</p>
                        <p> I am always ready to take on new challenges. My current CGPA is 9.375 and I am ranked 2 all over GTBIT and 5 all over. I have interned as Software Development at Medoc IT Health Pvt Ltd, and am currently looking for an internship or full time role. </p>
                    </div>
                    <div className="about-skills">
                        <div className='about-skill'> <p>
                            Python 
                        </p> <hr style={{ width: "89%"}}></hr>
                        </div>
                        <div className='about-skill'> <p>
                            C++ and DSA
                        </p> <hr style={{ width: "60%"}}></hr>
                        </div>
                        <div className='about-skill'> <p>
                            DS and ML
                        </p> <hr style={{ width: "78%"}}></hr>
                        </div>
                        <div className='about-skill'> <p>
                            CV and DL
                        </p> <hr style={{ width: "65%"}}></hr>
                        </div>
                        <div className='about-skill'> <p>
                            Frontend Dev
                        </p> <hr style={{ width: "50%"}}></hr>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievments">
                <div className="about-achievement">
                    <h1> Best Campus Ambassador </h1>
                    <p> At IEEE CSIS 2023 </p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> National Hackathon Winner </h1>
                    <p> At Zeemerquest'2023 </p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> First Runner Up </h1>
                    <p> At Vihaan 6.0, Vihaan 007.</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1> Ranked in Top 5 </h1>
                    <p> All over GGSIP University. </p>
                </div>
            </div>
        </div>
    )
}

export default About