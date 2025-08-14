"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: ""
        });
      } else {
        setSubmitStatus('error');
        console.error('Submission error:', data.message);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Contact">
        <div>
          <section className="contact-area-1 pt-120 pb-120 overflow-hidden">
            <div className="container">
              <div className="section__title mb-60">
                <h2 className="title">Ready to Reveal Your Hidden Gem?</h2>
                <p className="sec-text">Whether &apos; a brand film, a podcast series, executive photography, or content strategy, we&apos;re here to help you shine—to tell the stories worth uncovering and share them the right way.</p>
              </div>
              <div className="row gy-60">
                <div className="col-lg-6">
                  <div className="contact__info-wrap">
                    <ul className="list-wrap">
                      <li>
                        <h6 className="title">Phone</h6>
                        <Link href="tel:092224426" style={{fontSize: "17px"}}>09 222 44 26</Link> <br />
                         <Link href="tel:0220772156" style={{fontSize: "17px"}}>02 2 077 2156</Link>
                      </li>
                      <li>
                        <h6 className="title">Email</h6>
                        <Link href="mailto:karan@thehiddengems.co.nz" style={{fontSize: "17px"}}>karan@thehiddengems.co.nz</Link>
                      </li>
                      <li>
                        <h6 className="title">Address</h6 >
                       <span style={{fontSize: "17px"}}> 1/153 Stoddard Road,<br /> Wesley, Auckland 1041</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-form-wrap">
                    <div className="section__title mb-60">
                      <h4 className="subtitle">Got a project you want to collaborate on? Or just fancy a chat?</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="row gy-35">
                        <div className="col-12 form-group">
                          <label className="form-icon-left"><img src="/assets/img/icon/svg-img/user.svg" alt="icon" /></label>
                          <input 
                            type="text" 
                            className={`form-control style-border ${errors.name ? 'is-invalid' : ''}`} 
                            name="name" 
                            id="name" 
                            placeholder="Name*" 
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                        </div>
                        <div className="col-12 form-group">
                          <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brifcase.svg" alt="icon" /></label>
                          <input 
                            type="number" 
                            className={`form-control style-border ${errors.phone ? 'is-invalid' : ''}`} 
                            name="phone" 
                            id="phone" 
                            placeholder="Phone*" 
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && <div className="invalid-feedback d-block">{errors.phone}</div>}
                        </div>
                        <div className="col-12 form-group">
                          <label className="form-icon-left"><img src="/assets/img/icon/svg-img/envelope.svg" alt="icon" /></label>
                          <input 
                            type="text" 
                            className={`form-control style-border ${errors.email ? 'is-invalid' : ''}`} 
                            name="email" 
                            id="email" 
                            placeholder="Email*" 
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                        </div>
                        <div className="col-12 form-group">
                          <label className="form-icon-left"><img src="/assets/img/icon/svg-img/brush.svg" alt="icon" /></label>
                          <textarea 
                            name="message" 
                            placeholder="Message*" 
                            id="contactForm" 
                            className={`form-control style-border ${errors.message ? 'is-invalid' : ''}`} 
                            value={formData.message}
                            onChange={handleChange}
                          />
                          {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
                        </div>
                      </div>
                      <button 
                        type="submit" 
                        className="btn btn-three square-btn mt-60"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                      </button>
                      {submitStatus === 'success' && (
                        <div className="alert alert-success mt-3">
                          Thank you! Your message has been sent successfully.
                        </div>
                      )}
                      {submitStatus === 'error' && (
                        <div className="alert alert-danger mt-3">
                          Oops! Something went wrong. Please try again later.
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Contact;