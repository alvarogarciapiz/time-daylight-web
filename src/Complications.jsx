// Complications.jsx
import './styles/Complications.css'

function Complications() {
  return (
    <div className="complications_complicationsCard">
      <div className="complications_imageContainer">
        <img
          src="/Complication.png"
          alt="Time in Daylight Complications"
          className="complications_image"
        />
      </div>
      <div className="complications_textContainer">
        <h3 className="complications_title">Stay Informed with Personalized Complications</h3>
      </div>
    </div>
  )
}

export default Complications