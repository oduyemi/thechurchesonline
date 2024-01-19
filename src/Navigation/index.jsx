import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Churches from "../pages/Churches";
import Events from "../pages/Events";
import Home from "../pages/Home";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/events" element={<Events />} />
                <Route path="/churches" element={<Churches />} />
            </Routes>
        </BrowserRouter>
    );
};

