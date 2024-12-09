// Hero.jsx
import './styles/Hero.css'

function Hero() {
  return (
    <section className="hero_hero">
      <h1 className="hero_title">Time in Daylight for Apple Watch</h1>
      <h2 className="hero_subtitle">
        Available in early 2025
      </h2>
      <p className="hero_description">
        Transform your Apple Watch into a personal daylight tracker. Monitor your time spent outdoors, understand your exposure patterns, and make informed decisions for better health and well-being.
      </p>
      <div className="hero_imageContainer">
        <img
          src="/hero.png"
          alt="Time in Daylight App Screenshot"
          className="hero_image"
        />
      </div>
    </section>
  )
}

export default Hero