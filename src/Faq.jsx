// Faq.jsx
import { useState } from 'react'
import './styles/Faq.css'

const faqs = [
  {
    question: "How does the app measure time in daylight?",
    answer: "The app uses your Apple Watch's ambient light sensor to detect when you're in natural daylight. It tracks your exposure throughout the day, helping you understand your outdoor time patterns.",
  },
  {
    question: "What data does the app collect?",
    answer: "The app only collects ambient light data through your Apple Watch. All data is stored locally on your device and is never uploaded to external servers, ensuring your privacy.",
  },
  {
    question: "Is the app compatible with all Apple Watch models?",
    answer: "The app works with Apple Watch Series 6 and newer models running the latest watchOS. To ensure full functionality, please keep your Apple Watch updated to the latest software version.",
  },
  {
    question: "How accurate is the daylight tracking?",
    answer: "The app uses your Apple Watch's ambient light sensor for accurate daylight detection. While extremely reliable, factors like heavy cloud cover or being near bright artificial lights may occasionally affect readings.",
  },
  {
    question: "Can I use the app without an Apple Watch?",
    answer: "No, the app requires an Apple Watch as it relies on the device's ambient light sensor to track your daylight exposure.",
  },
  {
    question: "How do I read the weekly statistics?",
    answer: "The weekly view shows your daily daylight exposure over the past 7 days. This helps you identify patterns and ensure you're getting consistent outdoor time throughout the week.",
  },
  {
    question: "Are there any subscription costs?",
    answer: "No, Time in Daylight is completely free with no hidden costs or subscription fees.",
  },
  {
    question: "How does the app protect my privacy?",
    answer: "Your privacy is our priority. All data stays on your device and is never shared with external servers or third parties.",
  }
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq_faq">
      <h1 className="faq_title">Frequently Asked Questions</h1>
      <p className="faq_description">
        Find answers to common questions about Time in Daylight for Apple Watch.
      </p>
      <div id="faq" className="faq_faqList">
        {faqs.map((item, index) => (
          <div key={index} className="faq_faqItem">
            <button className="faq_question" onClick={() => toggleFAQ(index)}>
              {item.question}
              <span className="faq_icon">{activeIndex === index ? "–" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="faq_answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div id="contact" className="faq_contactSection">
        <h2 className="faq_contactTitle">Still Have Questions?</h2>
        <p className="faq_contactDescription">
          Feel free to reach out at{" "}
          <a href="mailto:timeindaylight@lvrpiz.com">timeindaylight@lvrpiz.com</a>
        </p>
      </div>
    </section>
  );
}

export default Faq