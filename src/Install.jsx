// Install.jsx
import './styles/Install.css'

function Install() {
  return (
    <section className="install_install">
      <h3 className="install_title">Track Your Daylight Exposure Today</h3>
      <p className="install_description">
        Start monitoring your outdoor time and improve your well-being. Download Time in Daylight now!
      </p>
      <button className="install_button">
        Coming Soon
      </button>
      <div className="install_imageContainer">
        <img
          src="/InstallNow.png"
          alt="App Installation Preview"
          className="install_image"
        />
      </div>
    </section>
  )
}

export default Install