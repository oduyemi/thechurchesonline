import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../index.css"
import "animate.css"

export const Lists = () =>{
    return(
        <Box>
            <section className="page-header page-header--lists">
                <Box className="gradient-overlay"></Box>
                <Box className="row page-header__content">
                    <Box className="column">
                        <Typography variant="h1" className="animate__animated animate__flipInX">Churches Online</Typography>
                    </Box>
                </Box>
            </section> 

            <section className="page-content">
                <Box maxWidth="l" className="container mx-auto my-5">
                    <Typography variant="h2" className="pl-8" id="events">
                    Featured Churches
                    </Typography>
                    <Link to="" >
                        <Typography variant="h6" paragraph gutterBottom className="lists">
                            Daystar Christian Center. Plot A3C, Ikosi Road, Oregun, Lagos
                        </Typography>
                    </Link>
                    <Link to="" >
                        <Typography variant="h6" paragraph gutterBottom className="lists">
                        The Fountain of Life Church. 12 Industrial Estate Road, Off Town Planning Way Ilupeju, Lagos
                        </Typography>
                    </Link>
                    <Link to="" >
                        <Typography variant="h6" paragraph gutterBottom className="lists">
                            Grace Assembly. Yard 158, Kudirat Abiola Way, Oregun, Lagos
                        </Typography>
                    </Link>
                    <Link to="" >
                        <Typography variant="h6" paragraph gutterBottom className="lists">
                            The Covenant Nation. The Covenant Place, Iganmu, Lagos
                        </Typography>
                    </Link>

                    
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