
import { Box, Typography } from "@mui/material";
import heroImage from "../assets/newhero.jpg";
import { Link } from "react-router-dom";
import "animate.css"




export const Banner = () => {
    return(
        <>
            <Box
                className="s-hero"
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100vh",
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "noRepeat", 
                    overflow: "hidden",
                    "&::before": {
                        content: "''",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        animation: "$slideshow 12s infinite",                 
                }
                }}
                data-natural-width="3000"
                data-natural-height="2000"
                data-position-y="center">

                <Box className="hero-left-bar"></Box>
                <Box className="row hero-content animate__animated animate__fadeIn">
                    <Box className="column large-full hero-content__text">
                        <Typography variant="h1">
                            Go Into <br />
                            All The <br />
                            World And <br />
                            Make Disciples
                        </Typography>

                        <Box className="hero-content__buttons">
                            <Link to="/churches" className="btn btn--stroke">Browse Churches</Link>
                            <Link to="/events" className="btn btn--stroke">Church Events</Link>
                        </Box>
                    </Box> 

                </Box> 

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
            </Box>
        </>
    )
}