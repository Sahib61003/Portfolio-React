import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "92a7b421-d47a-4ae6-b8d7-94ee11a79717");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div  id='contact' className='contact'>
        <div className='contact-title'>
            <h1> Get in Touch </h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1> Let's Connect </h1>
                <p> I am currently availabe to take on new projects. I am always open to new collaborations, opportunities and challenges. I am looking forward to connect with you. </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt='' />
                        <p> sahib61003@gmail.com </p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt='' />
                        <p> New Delhi, India </p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt='' />
                        <p> +91 9718779910 </p>
                    </div>
                    <div className="contact-detail">
                        <img src={linkedin} alt='' />
                        <p> https://linkedin.com/in/sahib-preet-singh/ </p>
                    </div>
                    <div className="contact-detail">
                        <img src={github} alt='' />
                        <p> https://github.com/Sahib61003 </p>
                    </div>
                </div>
            </div>
        
        <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Your Message</label>
            <textarea name="message" rows="10" placeholder='Enter your message'></textarea>
            <button type='submit' className="contact-submit">
                Submit Now
            </button>
        </form>
        </div>
    </div>
  )
}

export default Contact