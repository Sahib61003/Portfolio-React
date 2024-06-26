import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.png';
import resume from '../../assets/Resume.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1><span>I am Sahib Preet Singh,</span> an AI developer, based in India. OPEN TO WORK.</h1>
      <p>I am a senior at GGSIPU, pursuing B.Tech in Artificial Intelligence and Machine Learning. I am passionate about AI and I love to automate things around me. I am always curious to learn new things and take on new challenges.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <a href={resume} download="Resume.pdf" className='hero-resume'> Download My Resume </a>
      </div>
    </div>
  );
}

export default Hero;
