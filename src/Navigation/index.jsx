import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import About from "../pages/About/index";
import Contact from "../pages/Contact/index";
import Churches from "../pages/Churches/index";
import Events from "../pages/Events/index";
import Home from "../pages/Home/index";
import ChurchList from "../pages/ChurchList";

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
                <Route path="/churches/list" element={<ChurchList />} />
            </Routes>
        </BrowserRouter>
    );
};

