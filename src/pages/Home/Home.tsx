import './home.css'
import { FaCheckToSlot, FaLocationDot } from "react-icons/fa6";
import { GiSofa } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

import { MdLeaderboard,MdCurrencyRupee } from "react-icons/md";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import shopImg from '../../assets/shop-background.jpeg'
import { Link } from 'react-router-dom';

const Home = () => {
     const slides = [
        {
            id: 1,
            image: 'https://image.api.playstation.com/vulcan/img/rnd/202011/1204/wYL4v2r8uMQFvVTJlfuj8ICk.png',
            title: 'PS5',
            description: 'This is the first slide'
        },
        {
            id: 2,
            image: 'https://gmedia.playstation.com/is/image/SIEPDC/death-stranding-store-art-01-07oct21$en',
            title: 'PS5',
            description: 'This is the second slide'
        },
        {
            id: 3,
            image: 'https://gmedia.playstation.com/is/image/SIEPDC/Demons-Souls-thumbnail-01-ps4-en-12nov20',
            title: 'PS5',
            description: 'This is the third slide'
        },
        {
            id: 4,
            image: 'https://gmedia.playstation.com/is/image/SIEPDC/ghost-of-tsushima-directors-cut-01-03sep21$en',
            title: 'PS5',
            description: 'This is the fourth slide'},
        {
            id: 5,
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202010/0221/vC7trMorHJgbImp8PCQvpI0p.png',
            title: 'PS5',
            description: 'This is the fifth slide'
        }
    ]

    const WHATSAPP_NUMBER = '916380074107';
const BOOKING_MESSAGE = 'Hi Jawa Gaming Zone! I would like to book a gaming slot. Please share the available timings.';
const WHATSAPP_BOOKING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`;

  return (
    <>

    <section className="home">
        <div className="h-1-wrapper">
            <small>PLAYSTATION GAMING LOUNGE</small>
            <h1>
                <span>Lights down<span className="dot"></span></span>
                 <br />
            <span>Game on<span className="dot"></span></span>
            </h1>
            <p className='description'>Play PS5, PS4, PS2 and a full racing simulator in a cool,
             air-conditioned lounge. Come solo or bring your squad — book a slot on WhatsApp or just walk in.</p>
            <div className="home-cta">
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer"><FaCheckToSlot/>Book a Slot</a>
                <Link to={"/contact"}><FaLocationDot/>Find Us</Link>
            </div>
            <div className="badges">
                <span>Open daily 10AM – 10PM</span>
                <span>AC rooms</span>
                <span>Free parking</span>
                <span>4K displays</span>
            </div>

           
        </div>
        <div className="showcase">
               <div className="wrapper">
                 <span>Available now</span>
                <span>PS2</span>
                <span>PS4</span>
                <span>PS5</span>
                <span>Racing Sim <span className="dot"></span> PXN V99</span>
               </div>
        </div>
        <div className="shop-img">
            <div className="img-wrapper">
                <img src={shopImg} alt="" />

                <span className="s1">Big screen wall</span>
                <span className="s2">Lounge</span>
                <span className="s3">Console Stations</span>
                <span className="s4">Console Stations</span>
            </div>
        </div>
        <div className="h-2-wrapper">
            <small>WHY GAMERS CHOOSE US</small>
            <h2>More than just gaming</h2>
            <p>Big screens, comfy seats and a space you'll want to come back to.</p>

            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <GiSofa className='ic'/>
                    </div>
                    <h3>Comfortable Setup</h3>
                    <p>Big 4K screens, comfy seating and air-conditioned rooms. Clean, family-friendly and made for long sessions.</p>
                </div>
                 <div className="card">
                    <div className="icon">
                        <IoGameController/>
                    </div>
                    <h3>Games for Everyone</h3>
                    <p>From PS2 classics to the latest PS5 titles: football, fighting, racing, adventure and more.</p>
                </div>
                 <div className="card">
                    <div className="icon">
                        <MdCurrencyRupee/>
                    </div>
                    <h3>Pocket-Friendly Prices</h3>
                    <p>Hourly rates from just ₹40. Play solo, or split the fun with friends in multiplayer.</p>
                </div>
                 <div className="card">
                    <div className="icon">
                        <MdLeaderboard/>
                    </div>
                    <h3>Leaderboard & Challenges</h3>
                    <p>Beat your friends, set high scores and climb the leaderboard. Bragging rights included."</p>
                </div>
            </div>
        </div>
        <div className="h-6-pick">
            <small>THE SETUP</small>
            <h2>Pick your station</h2>
            <p>Four ways to play. Choose your station and we'll have it ready.</p>
            <div className="console-cards">
                  <div className="c-card ps-5">
                    <img src="/console/ps5-console.webp" alt="PlayStation 5 console" />
                    <div className="console-details">
                      <div className="details">
                        <span>Sony</span>
                        <h2>PlayStation 5</h2>
                      </div>
                      <div className="price">The latest releases in stunning 4K.</div>
                    </div>
                  </div>
                   <div className="c-card">
                    <img src="/console/ps4-console.webp" alt="PlayStation 4 console" />
                    <div className="console-details">
                      <div className="details">
                        <span>Sony</span>
                        <h2>PlayStation 4</h2>
                      </div>
                      <div className="price">A huge library, perfect for multiplayer nights.</div>
                    </div>
                  </div>
                   <div className="c-card">
                    <img src="/console/ps2-console.webp" alt="PlayStation 2 console" />
                    <div className="console-details">
                      <div className="details">
                        <span>Sony</span>
                        <h2>PlayStation 2</h2>
                      </div>
                      <div className="price">Retro classics that never get old.</div>
                    </div>
                  </div>
                   <div className="c-card pxn">
                    <img src="/console/pxn-v99-racing-sim.webp" alt="PXN V99 racing simulator" />
                    <div className="console-details">
                      <div className="details">
                        <span>PXN</span>
                        <h2>Racing Sim PXN V99</h2>
                      </div>
                      <div className="price">Wheel, pedals and seat. Feel every corner.</div>
                    </div>
                  </div>
            </div>
        </div>
        <div className="h-3-wrapper">
            <small>Pricing</small>
            <h2>Choose your game plan</h2>
            <p>Simple hourly rates. Pick your console and start playing.</p>

            <div className="price-cards">
                <div className="price-card">
                    <span>PS2</span>
                    <div className="single">
                        <div className="left">
                            <p>Single Player</p>
                            <small>1 Hour</small>
                        </div>
                        <div className="right">
                            <span>₹50</span>
                        </div>
                    </div>
                    <div className="multi">
                        <div className="left">
                            <p>Multiplayer</p>
                            <small>per person / hour</small>
                        </div>
                        <div className="right">
                            <span>₹40</span>
                        </div>
                    </div>
                </div>
                 <div className="price-card">
                    <span>PS4</span>
                    <div className="single">
                        <div className="left">
                            <p>Single Player</p>
                            <small>1 Hour</small>
                        </div>
                        <div className="right">
                            <span>₹65</span>
                        </div>
                    </div>
                    <div className="multi">
                        <div className="left">
                            <p>Multiplayer</p>
                            <small>per person / hour</small>
                        </div>
                        <div className="right">
                            <span>₹50</span>
                        </div>
                    </div>
                </div>
                <div className="price-card">
                    <span>PS5</span>
                    <div className="single">
                        <div className="left">
                            <p>Single Player</p>
                            <small>1 Hour</small>
                        </div>
                        <div className="right">
                            <span>₹90</span>
                        </div>
                    </div>
                    <div className="multi">
                        <div className="left">
                            <p>Multiplayer</p>
                            <small>per person / hour</small>
                        </div>
                        <div className="right">
                            <span>₹80</span>
                        </div>
                    </div>
                </div>
                <div className="price-card">
                    <span>Racing Sim</span>
                    <div className="single">
                        <div className="left">
                            <p>Quick Race</p>
                            <small>30 Minutes</small>
                        </div>
                        <div className="right">
                            <span>₹70</span>
                        </div>
                    </div>
                    <div className="multi">
                        <div className="left">
                            <p>Full Session</p>
                            <small>1 Hour</small>
                        </div>
                        <div className="right">
                            <span>₹100</span>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="cta">
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">Book on WhatsApp <FaWhatsapp/></a>
            </div>
            
        </div>
        {/* <div className="h-4-wrapper">
            <small>EXPLORE THE COLLECTION</small>
            <h2>FIND YOUR NEXT GAME</h2>
            <p>From legendary classics to next-gen adventures, your next favourite starts here.</p>

           <Slider slides={slides}/>
        </div> */}
        <div className="h-5-wrapper">
            <div className="box">
                <small>Get in the zone</small>
            <h2>Ready when <span>you</span> are</h2>
            <p>Message us on WhatsApp to check available slots, or just walk in. We're 100 metres off Salem Main Road, with safe parking for bikes and cars right at the venue.</p>
            <div className="cta">
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">Book your slot <MdBookmarkAdd /></a>
                <Link to={"/contact"}>Get Directions <FaArrowRight/></Link>
            </div>
            </div>
        </div>

    </section>
    
        
    </>
  )
}

export default Home