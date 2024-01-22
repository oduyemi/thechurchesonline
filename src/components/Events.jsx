import { Box, Typography } from "@mui/material";
import Event1Image from "../assets/events/pr1.jpg";
import{ Link} from "react-router-dom";
import "animate.css"


export const UpcomingEvents = () => {
    return(
        <Box>
            <section className="page-header page-header--events">

            <Box className="gradient-overlay"></Box>
            <Box className="row page-header__content">
                <Box className="column">
                    <Typography variant="h1" className="animate__animated animate__flipInX">Upcoming Events</Typography>
                </Box>
            </Box>

            </section>

            <section className="page-content">
                <Box className="row wide block-large-1-2 block-900-full events-list">
                    <Box className="column events-list__item">
                        <Typography variant="h3" className="display-1 events-list__item-title">
                            <Link to="#0" title="">Celebrate Jesus</Link>
                        </Typography>
                        <img src={Event1Image} alt="event1" />
                        <ul className="events-list__meta">
                            <li className="events-list__meta-date">Friday, January 19, 2024</li>
                            <li className="events-list__meta-time">8:00PM - DAWN</li>
                            <li className="events-list__meta-location">Liberty Stadium, Ibadan, Oyo State</li>
                        </ul>
                    </Box>
                    <Box className="column events-list__item">
                        <Typography variant="h3" className="display-1 events-list__item-title">
                                <Link to="" title="">Celebrate Jesus</Link>
                            </Typography>
                            <img src={Event1Image} alt="event1" />
                            <ul className="events-list__meta">
                                <li className="events-list__meta-date">Friday, January 19, 2024</li>
                                <li className="events-list__meta-time">8:00PM - DAWN</li>
                                <li className="events-list__meta-location">Liberty Stadium, Ibadan, Oyo State</li>
                            </ul>
                    </Box>
                    <Box className="column events-list__item">
                        <Typography variant="h3" className="display-1 events-list__item-title">
                                <Link to="" title="">Celebrate Jesus</Link>
                            </Typography>
                            <img src={Event1Image} alt="event1" />
                            <ul className="events-list__meta">
                                <li className="events-list__meta-date">Friday, January 19, 2024</li>
                                <li className="events-list__meta-time">8:00PM - DAWN</li>
                                <li className="events-list__meta-location">Liberty Stadium, Ibadan, Oyo State</li>
                            </ul>
                    </Box>
                    <Box className="column events-list__item">
                    <Typography variant="h3" className="display-1 events-list__item-title">
                            <Link to="" title="">Celebrate Jesus</Link>
                        </Typography>
                        <img src={Event1Image} alt="event1" />
                        <ul className="events-list__meta">
                            <li className="events-list__meta-date">Friday, January 19, 2024</li>
                            <li className="events-list__meta-time">8:00PM - DAWN</li>
                            <li className="events-list__meta-location">Liberty Stadium, Ibadan, Oyo State</li>
                        </ul>
                    </Box>
                    <Box className="column events-list__item">
                    <Typography variant="h3" className="display-1 events-list__item-title">
                            <Link to="" title="">Celebrate Jesus</Link>
                        </Typography>
                        <img src={Event1Image} alt="event1" />
                        <ul className="events-list__meta">
                            <li className="events-list__meta-date">Friday, January 19, 2024</li>
                            <li className="events-list__meta-time">8:00PM - DAWN</li>
                            <li className="events-list__meta-location">Liberty Stadium, Ibadan, Oyo State</li>
                        </ul>
                    </Box>
                    <Box className="column events-list__item">
                    <Typography variant="h3" className="display-1 events-list__item-title">
                            <Link to="" title="">Celebrate Jesus</Link>
                        </Typography>
                        <img src={Event1Image} alt="event1" />
                        <ul className="events-list__meta">
                            <li className="events-list__meta-date">Friday, January 19, 2024</li>
                            <li className="events-list__meta-time">8:00PM - DAWN</li>
                            <li className="events-list__meta-location">Liberty Stadium, Ibadan, Oyo State</li>
                        </ul>
                    </Box>
                </Box> 

                <Box className="row">
                    <Box className="column large-full">
                        <nav className="pgn">
                            <ul>
                                <li><Link className="pgn__prev" to="#0">Prev</Link></li>
                                <li><Link className="pgn__num" to="#0">1</Link></li>
                                <li><span className="pgn__num current">2</span></li>
                                <li><Link className="pgn__num" to="#0">3</Link></li>
                                <li><Link className="pgn__num" to="#0">4</Link></li>
                                <li><Link className="pgn__num" to="#0">5</Link></li>
                                <li><span className="pgn__num dots">…</span></li>
                                <li><Link className="pgn__num" to="#0">8</Link></li>
                                <li><Link className="pgn__next" to="#0">Next</Link></li>
                            </ul>
                        </nav>
                    </Box>
                </Box>

            </section>
                <Box className="hero-left-bar"></Box>
                <section>
                <ul className="hero-social">
                    <li className="hero-social__title">Follow Us</li>
                    <li>
                        <Link to="#" title="">Facebook</Link>
                    </li>
                    <li>
                        <Link to="#" title="">YouTube</Link>
                    </li>
                    <li>
                        <Link to="#" title="">Instagram</Link>
                    </li>
                </ul>
            </section>
        </Box>
    )
}