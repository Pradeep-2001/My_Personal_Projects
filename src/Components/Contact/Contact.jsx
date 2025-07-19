import React from 'react'
import "./Contact.css";
import mailIcon from "../../assets/mail_icon.svg"
import callIcon from "../../assets/call_icon.svg";
import locationIcon from "../../assets/location_icon.svg";

function Contact() {

    
  const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d347f3d-1a0b-44a9-93f3-46628549ce46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message)
    } else {
      console.log("Error", data);
      alert(data.message);
    }
  };


  return (
    <section id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Connect</h1>
                  <p>
                      I'd love to hear from you — whether you have a question, a project, or just want to say hi.
                      Feel free to reach out anytime!
                  </p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mailIcon} alt='mail-icon'/>
                        <p>pradeepsinghtmk1999@gmail.com</p>
                    </div>
                     <div className="contact-detail">
                        <img src={locationIcon} alt='location-icon'/>
                        <p>Tumkur, Karnataka, India</p>
                    </div>
                     <div className="contact-detail">
                        <img src={callIcon} alt='call-icon'/>
                        <p>+91 8073788894</p>
                    </div>
                </div>

            </div>
            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' required/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                <button type='submit' className='contact-submit'>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default Contact