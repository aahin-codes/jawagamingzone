import Header from "./components/Header/Header"
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/Error/NotFound";
import OnProcess from "./pages/OnProcess/OnProcess";
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop/games" element={<OnProcess page="games" />} />
        <Route path="/shop/offers" element={<OnProcess page="offers" />} />
        <Route path="/shop/tournament" element={<OnProcess page="tournament" />} />
        <Route path="/shop/leaderboard" element={<OnProcess page="leaderboard" />} />
        <Route path="/rentals" element={<OnProcess page="rentals" />} />
        <Route path="/service" element={<OnProcess page="service" />} />
        <Route path="/about" element={<OnProcess page="about" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
