import './contact.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { LuClock10 } from "react-icons/lu";

const Contact = () => {
  return (
    <>
      <section className='contact'>
        <div className="c-1-wrapper">
          <h1>Get in the <span>Zone</span></h1>
          <p>Call, message or just walk in. We're easy to find, easy to reach, and always happy to help you book your next session.</p>
        </div>

        <div className="c-2-wrapper">
          <div className="left">
            <div className="card card-1">
              <small><FaLocationDot /> Visit Us</small>
              <h2>Jawa Gaming Zone</h2>
              <p>Salem Main Road, EB Office Opposite, Veppur X Road, Veppur 606304</p>
              <a href="https://maps.app.goo.gl/GfEfXRTcxeRbtje37?g_st=aw" target="_blank" rel="noreferrer">Open in google maps</a>
            </div>
            <div className="card card-2">
              <small><IoIosCall /> Direct Hotlines</small>
              <h2><a href="tel:+916380074107">+91 63800 74107</a></h2>
              <h2><a href="tel:+916380074107">+91 98765 12345</a></h2>
              <a href="https://wa.me/916380074107" target="_blank" rel="noreferrer" aria-label="WhatsApp">Chat on whatsapp</a>
            </div>
            <div className="card card-3">
              <small><LuClock10 /> Opening hours</small>
              <div className="d">
                <span>Monday</span>
                <span>10AM - 10PM</span>
              </div>
              <div className="d">
                <span>Tuesday</span>
                <span>10AM - 10PM</span>
              </div>
              <div className="d">
                <span>Wednesday</span>
                <span>10AM - 10PM</span>
              </div>
              <div className="d">
                <span>Thursday</span>
                <span>10AM - 10PM</span>
              </div>
              <div className="d">
                <span>Friday</span>
                <span>10AM - 10PM</span>
              </div>
              <div className="d">
                <span>Saturday</span>
                <span>09AM - 10PM</span>
              </div>
              <div className="d">
                <span>Sunday</span>
                <span>09AM - 10PM</span>
              </div>
              <span>Open today <div className="dot"></div> 10am - 10pm</span>
            </div>
          </div>
          <div className="right">


              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.1962546592845!2d79.12729329999999!3d11.537775100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab47a3a1983b2d%3A0xf9955211e0e57146!2sJawa%20Gaming%20Zone!5e0!3m2!1sen!2sin!4v1792948325527!5m2!1sen!2sin"
                  title="Jawa Gaming Zone location"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

          </div>
        </div>

      </section>
    </>
  )
}

export default Contact