import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At Hospicash, we are a team of passionate professionals dedicated to transforming the healthcare experience. Our diverse background in technology, healthcare, and customer service comes together to create a platform that simplifies doctor appointment bookings for patients and healthcare providers alike.
          </p>
          <p>Innovators in Healthcare Technology
          Our team is at the forefront of integrating technology with healthcare. We are driven by a shared vision to make healthcare more accessible and efficient through our innovative platform.</p>
          <p>Experienced Healthcare Professionals
          With insights from experienced healthcare professionals, we understand the challenges faced by both patients and doctors. Our solutions are designed to address these challenges and improve the overall healthcare experience.</p>
          <p>
          Customer-Centric Experts
          We believe that exceptional service begins with understanding our users. Our customer support team is dedicated to ensuring that your experience with Hospicash is smooth and satisfactory.
          </p>
          <p>Our mission is to make healthcare more accessible and efficient by providing a seamless, user-friendly platform for booking doctor appointments. We are here to connect patients with healthcare providers quickly and easily, helping you take control of your health with confidence.</p>
          <p>We envision a future where healthcare is effortlessly accessible to everyone, and scheduling doctor appointments is as simple as a few clicks. By leveraging technology and innovation, we aim to improve the way people interact with healthcare services.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;