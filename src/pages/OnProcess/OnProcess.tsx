import './on-process.css'
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowLeft } from "react-icons/fa";

type PageContent = {
    eyebrow: string;
    title: string;
    description: string;
    preview: string[];
};

const PAGES: Record<string, PageContent> = {
    games: {
        eyebrow: 'Games library',
        title: 'Loading the library',
        description: "We're putting together the full list of games for every station, from PS2 classics to the latest PS5 releases. Until then, message us to check if your favourite game is available.",
        preview: ['Search by console', 'Multiplayer picks', 'New arrivals'],
    },
    offers: {
        eyebrow: 'Offers',
        title: 'Deals are on the way',
        description: "We're lining up combo hours, group deals and festival offers. Follow us on WhatsApp so you don't miss them.",
        preview: ['Combo hours', 'Group deals', 'Festival offers'],
    },
    tournament: {
        eyebrow: 'Tournaments',
        title: 'The arena is warming up',
        description: "Football, fighting and racing tournaments are coming to Jawa Gaming Zone. Message us to get notified when registrations open.",
        preview: ['Football', 'Fighting', 'Racing'],
    },
    leaderboard: {
        eyebrow: 'Leaderboard',
        title: 'Scores are being counted',
        description: "Soon you'll be able to see who's on top at Jawa Gaming Zone. Start practising now so your name is on the board from day one.",
        preview: ['Top players', 'Lap records', 'Monthly winners'],
    },
    rentals: {
        eyebrow: 'Rentals',
        title: 'Rentals are on the way',
        description: "We're getting console rentals ready so you can take the game home. Message us to ask about availability and pricing.",
        preview: ['PS4 & PS5', 'Daily & weekly plans', 'Controllers included'],
    },
    service: {
        eyebrow: 'Service',
        title: 'Service desk opening soon',
        description: "This page is being set up. For console or controller service, message us on WhatsApp and we'll help you directly.",
        preview: ['Console check-up', 'Controller repair', 'Cleaning'],
    },
    about: {
        eyebrow: 'About us',
        title: 'Our story is loading',
        description: "We're writing up the story behind Jawa Gaming Zone. Until then, the best way to know us is to walk in and play.",
        preview: ['PS2, PS4 & PS5', 'Racing simulator', 'AC lounge'],
    },
};

const DEFAULT_PAGE: PageContent = {
    eyebrow: 'Coming soon',
    title: 'Next level loading',
    description: "This page is still being built. Check back soon, or message us on WhatsApp if you need anything.",
    preview: ['PS2, PS4 & PS5', 'Racing simulator', 'Open daily'],
};

const WHATSAPP_NUMBER = '916380074107';

const OnProcess = ({ page }: { page?: string }) => {
    const content = (page && PAGES[page]) || DEFAULT_PAGE;
    const message = `Hi Jawa Gaming Zone! I have a question about ${content.eyebrow.toLowerCase()}.`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return (
        <section className="on-process">
            <div className="op-wrapper">
                <small>{content.eyebrow}</small>
                <h1>{content.title}</h1>
                <p className="description">{content.description}</p>

                <div className="progress" aria-hidden="true">
                    <span></span>
                </div>
                <span className="progress-label">Under construction</span>

                <div className="badges">
                    {content.preview.map(item => <span key={item}>{item}</span>)}
                </div>

                <div className="op-cta">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Message us</a>
                    <Link to="/"><FaArrowLeft /> Back to home</Link>
                </div>
            </div>
        </section>
    )
}

export default OnProcess
