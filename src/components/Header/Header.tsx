
import { Link , useNavigate} from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { IoMenu,IoClose } from "react-icons/io5";

export default function Header(){

    const navigate = useNavigate();

    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const goHome = () => {
        setIsShopOpen(false);
        setIsMenuOpen(false);
        navigate('/');
    };

    return (
    <>

    <header>
        <nav>
            <div className="left" onClick={goHome}>
                <img src={logo} alt="JAWA Gaming Zone logo" height={40} width={40}/>
                <div className="shop-name-wrapper">
                    <p>JAWA GAMING ZONE</p>
                    <p>Veppur X Road</p>
                </div>
            </div>
            <div className="right">
                <ul className={isMenuOpen ? "active":"inactive"}>
                    {/* <li>Home</li> */}
                    <li><span onClick={()=> setIsShopOpen(!isShopOpen)}>Shop</span>
                        <ul className={isShopOpen ? "sub-menu active" : "sub-menu"}>
                            <li><Link to={"/shop/games"} onClick={()=> setIsShopOpen(false)}>Games</Link></li>
                            <li><Link to={"/shop/offers"} onClick={()=> setIsShopOpen(false)}>Offers</Link></li>
                            <li><Link to={"/shop/tournament"} onClick={()=> setIsShopOpen(false)}>Tournament</Link></li>
                            <li><Link to={"/shop/leaderboard"} onClick={()=> setIsShopOpen(false)}>LeaderBoard</Link></li>
                        </ul>
                    </li>
                    <li><Link to={"/rentals"} onClick={()=> setIsShopOpen(false)}>Rentals</Link></li>
                    <li><Link to={"/service"} onClick={()=> setIsShopOpen(false)}>Service</Link></li>
                    <li><Link to={"/about"} onClick={()=> setIsShopOpen(false)}>About</Link></li>
                    <li><Link to={"/contact"} onClick={()=> setIsShopOpen(false)}>Contact</Link></li>
                </ul>
               <div className="menu-icons" onClick={() => setIsMenuOpen(prev => !prev)} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                 {isMenuOpen ? <IoClose /> : <IoMenu />}
               </div>

            </div>
        </nav>
    </header>
    
    </>
    )
}