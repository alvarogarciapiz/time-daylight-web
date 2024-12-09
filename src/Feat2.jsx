// Feat2.jsx
import './styles/Feat2.css'

function Feat2() {
  return (
    <div className="feat2">
    <div className="feat2_featureCard">
      <div className="feat2_imageContainer">
        <img
          src="/feat2.png"
          alt="Daily Evolution and Insights"
          className="feat2_image"
        />
      </div>
      <div className="feat2_textContainer">
        <h3 className="feat2_title">📊 Weekly Insights at a Glance</h3>
        <p className="feat2_description">
          With <span className="feat2_highlight">Weekly Evolution</span>, track your daylight exposure patterns over time. The interactive graph provides a visual representation of your outdoor time, helping you maintain healthy habits and ensure consistent natural light exposure throughout the week.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Feat2