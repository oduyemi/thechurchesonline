import { Box, Typography } from "@mui/material";
import{ Link} from "react-router-dom";
import "animate.css"





export const ContactUs = () => {
    return(
        <Box>
            <section className="page-header page-header--contact">
                <Box className="gradient-overlay"></Box>
                <Box className="row page-header__content">
                    <Box className="column">
                        <Typography variant="h1" className="animate__animated animate__flipInX">Contact Us</Typography>
                    </Box>
                </Box>
            </section> 

            <section className="page-content">

                <Box className="row animate__animated animate__fadeIn">
                    <Box className="column">
                        <Typography variant="h5" paragraph className="lead drop-cap">
                            If you would to make inquiries or feature your local on
                            The Churches Online platform, please contact us using
                            any of the options below. Our goal is to promote unity
                            in the body of Christ and operate as one body.               
                        </Typography>

                        <Typography variant="h5" paragraph>
                            We would love to hear from you! Whether you are just checking us
                            out for the first time or have been using our platform for a
                            while, let us know how we can help you get connected.
                        </Typography>
                    <Box className="row">
                        <Box className="column large-6 tab-full">
                            <Typography variant="h3" className="text-[#494331]">Main Office.</Typography>
                            <Typography variant="h6" paragraph>
                            123 Awolowo Way<br />
                            Ikeja, Lagos, Nigeria<br />
                            Mon-Thur 8:30am – 4:30pm 
                            </Typography>
                        </Box>

                        <Box className="column large-6 tab-full">
                            <Typography variant="h3" className="text-[#494331]">Contact Info.</Typography>
                            <Typography variant="h6" paragraph>
                            programs@thechurchesonline.com<br />
                            info@thechurchesonline.com <br />
                            Phone: +234 813 324 6187
                            </Typography>
                        </Box>
                    </Box>
                    <Typography variant="h2" className="text-[#3B0D11]">Get In Touch.</Typography>

                    <form name="contactForm" id="contactForm" method="post" action="" autocomplete="off">
                        <fieldset>

                            <Box className="form-field">
                                <input name="name" className="h-full-width h-remove-bottom placeholder:text-black" placeholder="Your Name" type="text" />
                            </Box>

                            <Box className="form-field">
                                <input name="mail" className="h-full-width h-remove-bottom placeholder:text-black" placeholder="Your Email" type="text" />
                            </Box>

                            <Box className="form-field">
                                <input name="site" className="h-full-width h-remove-bottom placeholder:text-black" placeholder="Website"  type="text" />
                            </Box>

                            <Box className="message form-field">
                                <textarea name="msg" className="h-full-width h-remove-bottom placeholder:text-black" placeholder="Your Message"></textarea>
                            </Box>

                            <br />

                            <input name="submit" className="btn btn--primary btn-wide btn--large h-full-width" value="Send Message" type="submit" />

                        </fieldset>
                    </form>
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