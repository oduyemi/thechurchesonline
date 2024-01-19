
import { Box, Typography } from "@mui/material";
import heroImage from "../assets/hero.jpg";
import { Link } from "@mui/material"



export const Banner = () => {
    return(
        <>
            <Box
                className="s-hero"
                sx={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "contain"
                }}
                // data-natural-width="3000"
                // data-natural-height="2000"
                // data-position-y="center">
                >

                <Box className="hero-left-bar"></Box>
                <Box className="row hero-content">
                    <Box className="column large-full hero-content__text">
                        <Typography variant="h1">
                            We Are <br />
                            Pencils In The <br />
                            Hand Of The <br />
                            Almighty
                        </Typography>

                        <Box className="hero-content__buttons">
                            <Link href="/events" className="btn btn--stroke">Upcoming Events</Link>
                            <Link href="/about" className="btn btn--stroke">About Us</Link>
                        </Box>
                    </Box> 

                </Box> 

                <ul className="hero-social">
                    <li className="hero-social__title">Follow Us</li>
                    <li>
                        <Link href="#0" title="">Facebook</Link>
                    </li>
                    <li>
                        <Link href="#0" title="">YouTube</Link>
                    </li>
                    <li>
                        <Link href="#0" title="">Instagram</Link>
                    </li>
                </ul>

                <Box className="hero-scroll">
                    <Link href="#about" className="scroll-link smoothscroll">
                        Scroll For More
                    </Link>
                </Box>

            </Box>
        </>
    )
}