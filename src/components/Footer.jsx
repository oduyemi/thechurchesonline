import { Box, Typography } from "@mui/material";
import{ Link} from "react-router-dom";
import React from "react";



export const Footer = () => {
    return(
        <Box>
            <footer className="s-footer footer__heading">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="col-span-1">
                        <div className="footer-logo">
                            <Link className="site-footer-logo" to="/">
                                <img src={require("../assets/logo/logo.png")} alt="Homepage" />
                            </Link>
                        </div>
                        <Typography variant="h5" paragraph className="mt-4">
                            We seek out ways to unify the Church. The church, is the display of God's
                            glory and wisdom (Ephesians 3:10), we must fight to maintain Christian
                            unity (Ephesians 4:1-3).
                        </Typography>
                    </div>

                    <div className="col-span-1">
                        <Typography variant="h4" className="text-lg font-semibold mb-4">Our Location</Typography>
                        <Typography variant="h5" paragraph  className="mb-2">
                            123 Awolowo Way, <br />
                            Ikeja, Lagoss <br />
                            Nigeria
                        </Typography>
                        
                    </div>

                    <div className="col-span-1">
                        <Typography variant="h5" className="text-lg font-semibold mb-4 text-white">Quick Links</Typography>
                        <ul className="footer-list">
                            <li><Link to="/"><Typography variant="h5" paragraph>Home</Typography></Link></li>
                            <li><Link to="/about"><Typography variant="h5" paragraph>About</Typography></Link></li>
                            <li><Link to="/churches"><Typography variant="h5" paragraph>Churches</Typography></Link></li>
                            <li><Link to="/events"><Typography variant="h5" paragraph>Upcoming Events</Typography></Link></li>
                            <li><Link to="/contact"><Typography variant="h5" paragraph>Contact</Typography></Link></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-8">
                    <div className="ss-copyright">
                        <span>&copy; Copyright The Churches Online Lagos</span>
                    </div>
                </div>

                <div className="ss-go-top">
                    <Link className="smoothscroll" title="Back to Top" to="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
                        </svg>
                    </Link>
                </div>

            </footer>
        </Box>
    )
}