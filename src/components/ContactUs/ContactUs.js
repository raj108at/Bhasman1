import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () =>{
    return (
<p style={{color:"#d50000"}}>Your Message sent Successfully. i will contact you shortly!!! </p>
    )
}

function ContactUs () {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3a76dbd', 'template_ofb67nr', e.target, 'user_MzHfOmlKrw77DlmddcFxs')
      .then(
          (result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // show success message
      e.target.reset();
      showResult(true);
      
  };

  //hide success message 
  setTimeout(() => {
      showResult(false); 
  }, 10000);

  return (
    <form className="col s12" onSubmit={sendEmail}>
        <div className="row">
            <div className="input-field col l12 s12">
                <input name="fullName" type="text" class="validate" />
                <label for="fullName"> Full Name*</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s6">
                <input name="email" type="email" class="validate" />
                <label for="email">Email*</label>
            </div>
            <div className="input-field col s6">
                <input name="phone" type="number" class="validate" />
                <label for="phone">Mobile No*</label>
            </div>
        </div><div className="row">
            <div className="input-field col l12 s12">
                <input name="subject" type="text" class="validate" />
                <label for="subject">Subject*</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <textarea name="message" class="materialize-textarea"></textarea>
                <label for="message">Write your Message*</label>
            </div>
        </div>
        <input className="btn btn-large indigo darken-4 waves-effect waves-light" type="submit" value="Send" />
        <div className="row">  { result ? <Result /> :null} </div>
    </form>
  );
};

export default ContactUs;



