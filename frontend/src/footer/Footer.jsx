import "./footer.scss";
import Logo from "../assets/Logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
          <div className="about-company">
            <img src={Logo} alt="patrimonio-logo" />
            <p>Specializing in elegant and stylish custom home designs</p>
          </div>
          <div className="useful-links">
            <h2>Useful Links</h2>
            <ul>
                <li>Latest Products</li>
                <li>Featured Products</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
      </div>

      <div className="right">
          <div className="contact-info">
              <ul>
                  <li><PhoneIcon /> +1 (949) 942-4884</li>
                  <li><EmailIcon /> info@patrimoniohome.com</li>
                  <li><PlaceIcon /> 1904 Harbor Blvd Costa Mesa, CA 92627</li>
                  <li>
                      <div className="social-links">
                          <FacebookIcon />
                          <TwitterIcon />
                          <InstagramIcon />
                      </div>
                  </li>
                  
              </ul>

          </div>
          
          <div className="subscribe">
              <p>Keep up with what we’re up to</p>
              <div className="subscribe-form">
                <input type="text" placeholder="Your Email" />
                <button><SendIcon /></button>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Footer
