import React, { useState } from 'react';
import '../customCSS/FaqCSS.css';

const FaqComponent = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-banner">
        <p>
          Welcome to our FAQ section!
        </p>
        <p> Here, we provide answers to common questions about how our toll calculator works.</p>
      </div>

      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            {index + 1}. {faq.question}
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FaqComponent;
