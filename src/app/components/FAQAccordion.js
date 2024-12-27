"use client";
import { use, useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";


const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I fund my card?",
      answer:
        "You can fund your card at welcome card kiosk. We will be partnering with several outlets within cities to make funding closer to our users.",
    },
    {
      question:
        "Can I order a card before traveling to my new destination country?",
      answer:
        "No, the card is waiting for you at your destination country. Lookout for a Welcome Card kiosk to register and fund your card.",
    },
    {
      question: "How can I manage my card?",
      answer:
        "You can activate and block your Welcome card on the mobile App. You can also set PIN and reset PIN on the App. Kindly check the settings on the App.",
    },
    {
      question: "Are there top-up limits?",
      answer:
        "Topup is in line with anti-fraud limits per currency in the destination country. For example, daily top-up limit in the UK is less than £10,000 and in the USA less than $10,000 or its equivalence.",
    },
    {
      question: "Can I reuse my card after leaving my destination country?",
      answer:
        "You can only reuse the card if it has not expired and is still funded by the time you visit the same destination country again.",
    },
    {
      question: "What happens if I misplace my card?",
      answer:
        "Go into the mobile app and block the card. This function will make the card inactive and keep your funds secured.",
    },
  ];

  return (
    <>
      <h2 id="FAQ" className="heading-6">
        Frequently Asked Questions
      </h2>
      <div className="accordion-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <span className="bold-t">{faq.question}</span>
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
