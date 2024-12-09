// Feat1.jsx
import './styles/Feat1.css'

function Feat1() {
  return (
    <div className="feat1">
    <div className="feat1_featureCard">
      <div className="feat1_textContainer">
        <h2 className="feat1_title">
          Track Your <span className="feat1_highlight">Daylight</span> Exposure
        </h2>
        <p className="feat1_description">
          Monitor your daily outdoor time with precision. Get insights into your natural light exposure patterns and make informed decisions for better health.
        </p>
      </div>
      <div className="feat1_imageContainer">
        <img
          src="/feat1.png"
          alt="Daylight Tracking Feature"
          className="feat1_image"
        />
      </div>
    </div>
    </div>
  )
}

export default Feat1