import React from "react";
import Topbanner from "../../components/Topbaner/Topbanner";
import Heading from "../../helpers/Headings/Heading";
import Highlight from "../../helpers/HighLight/Highlight";
import paroBg from "../../assets/images/topbanners/contact.jpg";
import "./contact.css";
import ContactUs from "../../components/ContactUs/ContactUs";

function Contact() {
  return (
    <div>
      <Topbanner title="Contact Us" Bg={paroBg} />
        <div style={{ paddingTop: 30 }} className="container">
            <div className="row">
                <div className="center contactHead" >           
                    <Highlight title="Reach Out to us in case of Any Doubt" />
                    <Heading title="Contact Us" />
                </div>
                <div className="row">
                    <div className="col l6 s12">
                        <h4>Get in Touch</h4>
                        <div class="row">
                        <ContactUs />
                        </div>
                    </div>
                    <div className="col l6 s12">
                        <section>
                            <p>
                            Address: #103, B Block, Sumukha Paradise, Varadharajaswamy Layout, Singapura, Bangalore-560097
                            +91-6364433835
                            ceo@bhasman.com
                            </p>
                        </section>
                    </div>
                </div> 
            </div>
        </div>
    </div>
  );
}

export default Contact;
