// Pricing.jsx
import './styles/Pricing.css'

function Pricing() {
  return (
    <div id="pricing" className="pricing_pricingContainer">
      <h2 className="pricing_title">Pricing</h2>
      <div className="pricing_content">
        <div className="pricing_price">Free</div>
        <div className="pricing_descriptionContainer">
          <div className="pricing_description">
            No subscriptions, no hidden costs. Start tracking your daylight exposure today!
          </div>
          <button className="pricing_button">Coming Soon</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing