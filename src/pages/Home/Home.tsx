import './home.css'
import { FaCheckToSlot, FaLocationDot } from "react-icons/fa6";
import { GiSofa } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdLeaderboard } from "react-icons/md";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import Slider from '../../components/Slider/Slider';
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
            <small>UNLEASH YOUR GAMING POWER</small>
            <h1>
                <span>Lights down<span className="dot"></span></span>
                 <br />
            <span>Game on<span className="dot"></span></span>
            </h1>
            <p className='description'>Explore PlayStation consoles, rent your favourite games, discover exclusive deals, and unlock special discounts with Membership. Your next gaming adventure starts here.</p>
            <div className="home-cta">
                <Link to={"/contact"}><FaCheckToSlot/>Book Your Gaming Slot</Link>
                <Link to={"/contact"}><FaLocationDot/>Find Us</Link>
            </div>
            <div className="badges">
                <span>EXCLUSIVE GAMING DEALS</span>
                <span>HOT OFFERS</span>
                <span>NEW ARRIVALS</span>
                <span>LIMITED-TIME DEALS</span>
            </div>

           
        </div>
        <div className="showcase">
               <div className="wrapper">
                 <span>on the floor</span>
                <span>PS2</span>
                <span>PS4</span>
                <span>PS5</span>
                <span>SIM Racing <span className="dot"></span> PXN V99</span>
               </div>
        </div>
        <div className="h-2-wrapper">
            <small>WHY GAMERS CHOOSE US</small>
            <h2>MORE THAN JUST GAMING</h2>
            <p>Great games. Powerful consoles. Epic vibes. Make every gaming session count.</p>

            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <GiSofa className='ic'/>
                    </div>
                    <h3>Premium Environment</h3>
                    <p>Crystal-clear 4K displays, ergonomic setups, and pristine, family-friendly spaces — clean, air-conditioned and built for long sessions.</p>
                </div>
                 <div className="card">
                    <div className="icon">
                        <IoGameController/>
                    </div>
                    <h3>Epic Game Collection</h3>
                    <p>From nostalgic PS2 classics to exciting PS5 adventures, discover games for every type of player.</p>
                </div>
                 <div className="card">
                    <div className="icon">
                        <AiFillThunderbolt/>
                    </div>
                    <h3>Powerful Consoles</h3>
                    <p>Choose PS2, PS4, PS5, or the PXN V99 racing simulator for your next gaming challenge.</p>
                </div>
                 <div className="card">
                    <div className="icon">
                        <MdLeaderboard/>
                    </div>
                    <h3>Leaderboard & Challenges</h3>
                    <p>Challenge your friends, track high scores, climb the leaderboard, and prove your gaming skills.</p>
                </div>
            </div>
        </div>
        <div className="h-3-wrapper">
            <small>Price Charts</small>
            <h2>CHOOSE YOUR GAME PLAN</h2>
            <p>More gaming, more excitement. Pick your setup and start playing.</p>

            <div className="price-cards">
                <div className="price-card">
                    <span>PS2</span>
                    <div className="single">
                        <div className="left">
                            <p>Single Player</p>
                            <small>per Hour</small>
                        </div>
                        <div className="right">
                            <span>₹ 50</span>
                        </div>
                    </div>
                    <div className="multi">
                        <div className="left">
                            <p>Multi Player</p>
                            <small>per Hour / Person</small>
                        </div>
                        <div className="right">
                            <span>₹ 40</span>
                        </div>
                    </div>
                </div>
                 <div className="price-card">
                    <span>PS4</span>
                    <div className="single">
                        <div className="left">
                            <p>Single Player</p>
                            <small>per Hour</small>
                        </div>
                        <div className="right">
                            <span>₹ 65</span>
                        </div>
                    </div>
                    <div className="multi">
                        <div className="left">
                            <p>Multi Player</p>
                            <small>per Hour / Person</small>
                        </div>
                        <div className="right">
                            <span>₹ 50</span>
                        </div>
                    </div>
                </div>
                <div className="price-card">
                    <span>PS5</span>
                    <div className="single">
                        <div className="left">
                            <p>Single Player</p>
                            <small>per Hour</small>
                        </div>
                        <div className="right">
                            <span>₹ 90</span>
                        </div>
                    </div>
                    <div className="multi">
                        <div className="left">
                            <p>Multi Player</p>
                            <small>per Hour / Person</small>
                        </div>
                        <div className="right">
                            <span>₹ 80</span>
                        </div>
                    </div>
                </div>
                <div className="price-card">
                    <span>Racing Sim</span>
                    <div className="single">
                        <div className="left">
                            <p>Single Player</p>
                            <small>per 1/2 Hpur</small>
                        </div>
                        <div className="right">
                            <span>₹ 70</span>
                        </div>
                    </div>
                    <div className="multi">
                        <div className="left">
                            <p>Single Player</p>
                            <small>per Hour</small>
                        </div>
                        <div className="right">
                            <span>₹ 100</span>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="cta">
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">Reserve Now on Whatsapp <FaWhatsapp/></a>
            </div>
            
        </div>
        <div className="h-4-wrapper">
            <small>EXPLORE THE COLLECTION</small>
            <h2>FIND YOUR NEXT GAME</h2>
            <p>From legendary classics to next-gen adventures, your next favourite starts here.</p>

           <Slider slides={slides}/>
        </div>
        <div className="h-5-wrapper">
            <div className="box">
                <small>Get in the zone</small>
            <h2>Ready when <span>you</span> are</h2>
            <p>Message us on WhatsApp to check rates, availability and slots — or just walk in. We're 500 metres down from the main road, with safe bike and car parking right at the venue.</p>
            <div className="cta">
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noreferrer">
   Book your slot <MdBookmarkAdd /></a>
                <Link to={"/contact"}>Get Directions <FaArrowRight/></Link>
            </div>
            </div>
        </div>

    </section>
    
        
    </>
  )
}

export default Home