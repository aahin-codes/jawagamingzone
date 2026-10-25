import './NotFound.css';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
    <section className='error'>
        <div className="wrapper">
            <small>LEVEL NOT FOUND</small>
            <h1>404 — RESPAWN REQUIRED</h1>
            <p>This level doesn’t exist. Ready to jump back into the game?</p>
            <div className="cta">
                <button><FaArrowLeft /> Back to Home</button>
            </div>
        </div>
    </section>
    </>
  )
}

export default NotFound