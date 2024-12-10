// Footer.jsx
import './styles/Footer.css'

function Footer() {
  return (
    <footer className="footer_footer">
      <div className="footer_logoContainer">
        <a href="/">
          <img
            src="/AppIcon.png"
            alt="Logo"
            className="footer_logo"
          />
        </a>
      </div>
      <div className="footer_linksContainer">
        <div className="footer_column">
          <h4 className="footer_columnTitle">Product</h4>
          <a href="/#pricing" className="footer_link">Pricing</a>
          <a href="/" className="footer_link">Features</a>
        </div>
        <div className="footer_column">
          <h4 className="footer_columnTitle">Support</h4>
          <a href="/faq#contact" className="footer_link">Contact</a>
          <a href="/faq" className="footer_link">Help and FAQ</a>
          <a href="/press-kit" className="footer_link">Press Kit</a>
        </div>
        <div className="footer_column">
          <h4 className="footer_columnTitle">Privacy & Terms</h4>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="footer_link">Terms of use</a>
          <a href="/privacy-policy" className="footer_link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer