import Header from "./components/Header/Header"
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/Error/NotFound";
import { Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
