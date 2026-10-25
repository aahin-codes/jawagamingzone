import './footer.css'
import logo from '../../assets/logo.png'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const Footer = () => {

  const getYear = new Date().getFullYear();
  return (
    <>
    <footer>
        <div className="wrapper">
            <div className="left">
                <img src={logo} alt="Jawa Gaming Zone logo" />
                <p>Jawa Gaming Zone, Salem Main Road, EB Office Opposite, Veppur X Road 606304</p>
                <small>Play more <span></span> Pay less</small>

                <div className="social-cta">
                     <a href="https://wa.me/916380074107" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <FaWhatsapp />
    </a>
    <a href="https://instagram.com/jawagamingzone" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FaInstagram/>
                    </a>
                    {/* <FaFacebook/> */}
                </div>
            </div>
            <div className="middle">
                <span>Explore</span>
<Link to="/shop/offers">Offers</Link>
    <Link to="/shop/leaderboard">Leaderboard</Link>
    <Link to="/service">Services</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/about">About Us</Link>

            </div>
            <div className="right">
                <span>Visit & Contact</span>
<a href="https://maps.app.goo.gl/GfEfXRTcxeRbtje37?g_st=aw" target="_blank" rel="noreferrer">
        Get Directions
    </a>
 <a href="tel:+916380074107">+91 63800 74107</a>
{/* <span>+91 93445 47140</span>
<span>Open daily <span className='dot'></span> 10 AM - 10 PM</span> */}

{/* <span>Book on WhatsApp </span> */}
            </div>
        </div>
        <div className="copyrights">
            <p>&copy; {getYear} Jawa Gaming Zone, Veppur X Road. All Rights Reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer