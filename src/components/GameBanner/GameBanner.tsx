import './game-banner.css';

const GameBanner = () => {

const date = new Date();
const releaseDate = new Date(2026, 10, 19);
const isReleased = date >= releaseDate;

const WHATSAPP_NUMBER = '916380074107';
    const BOOKING_MESSAGE = isReleased
        ? 'Hi Jawa Gaming Zone! I would like to book a PS5 station to play GTA VI. Please share the available timings.'
        : 'Hi Jawa Gaming Zone! I would like to pre-book a PS5 station to play GTA VI on launch day. Please share the available timings.';
    const WHATSAPP_BOOKING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_MESSAGE)}`;

  return (
    <section className='game-banner'>
        <div className="gb-wrapper">
            <div className="gb-content">
                <span className='badge bg'>{isReleased ? 'Now playing' : 'Coming soon'}</span>
                <h2 className="title">GTA VI</h2>
                <p>{isReleased
                    ? "Rockstar's new open-world game is here. Explore Vice City on our big 4K screens at a PS5 station."
                    : "Rockstar's new open-world game is almost here. Be one of the first to explore Vice City on our big 4K screens."}</p>

                <div className="badges">
                    <span className="badge">PS5</span>
                    <span className="badge">Open world</span>
                    <span className="badge">{isReleased ? 'Walk-ins welcome' : 'Pre-book now'}</span>
                </div>

            </div>
            <div className="gb-cta">

                <div className="release-info">
                    <span>{isReleased ? 'Released on' : 'Launches on'}</span>
                    <span className='date'>{releaseDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <a href={WHATSAPP_BOOKING_URL} target="_blank" rel="noopener noreferrer">{isReleased ? 'Book a PS5 station' : 'Pre-book a PS5 station'}</a>
            </div>
        </div>
        
    </section>
  )
}

export default GameBanner;