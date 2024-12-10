// Press-kit.jsx
import './styles/Press-kit.css'

function Press() {
  return (
    <section className="press_press">
      <h2 className="press_title">Press Kit</h2>
      <h3 className="press_subtitle">Media Assets</h3>
      <p className="press_description">
        This file includes beautiful visuals, app previews, and high-quality icons for Time in Daylight.
      </p>
      <a href="/time-daylight.zip" download className="press_downloadButton">
        Download Press Kit
      </a>
      <h3 className="press_subtitle">App Description</h3>
      <p className="press_description">
        Time in Daylight makes it simple to track your time outdoors with your Apple Watch. Gain insights into your daily and weekly habits, and discover how daylight exposure supports your vision, boosts Vitamin D, and eases stress and anxiety for a healthier life.
      </p>

      <p className="press_description">
        Unlock the full benefits of daylight with weekly averages and progress tracking. Designed with privacy in mind, all your data is stored securely on your device. Improve your vision, mental health, and well-being with Time in Daylight—your guide to a brighter life.
      </p>
      <h3 className="press_subtitle">Pricing</h3>
      <p className="press_description">
        Time in Daylight is free for everyone—no subscriptions, no hidden costs. Start enjoying the benefits of outdoor time today!
      </p>
      <h3 className="press_subtitle">About the developer</h3>
      <p className="press_description">
        Time in Daylight was created by me—Álvaro García Pizarro. As a passionate cloud & devops engineer that loves to play with tech sometimes, I've poured my heart into creating Stress Tracker to help improve well-being in a meaningful way. You can connect with me on <a className="press_link" href="https://x.com/lvrpiz" target="_blank">X</a> or <a className="press_link" href="https://www.linkedin.com/in/alvarogarciapiz/" target="_blank">LinkedIn</a>. My <a className="press_link" href="mailto:stressapp@lvrpiz.com">email</a> is always open, and I'd love to hear your thoughts, feedback, or just say hello! 👋🏻
      </p>
    </section>
  )
}

export default Press