import React from 'react';
import "./Contact.css";
import Navbar from '../Navbar/Navbar';

function Contact() {
  return (
    <div className='main contact-container' style={{ textAlign: "center" }}>
      <Navbar />
      <h2 style={{ color: "#007BFF", marginTop: "35px" }}>Get in Touch With Us</h2>
      <p style={{ marginTop: "15px", color: "#555" }}>
        We are here to assist you! Reach out to us for any inquiries or support.
      </p>
      <button style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Contact Us</button>
    </div>
  );
}

export default Contact;
