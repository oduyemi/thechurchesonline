import React, { useState } from "react";
import Modal from "react-modal";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LivestreamPopup } from "./LiveStreamPopUp";
import{ Link} from "react-router-dom";
import "../index.css"
import "animate.css"

export const ChurchesOnline = () =>{
    const [livestreamPopupOpen, setLivestreamPopupOpen] = useState(false);
    // const [livestreamPopupOpen, setLivestreamPopupOpen] = React.useState(false);

    const handleLivestreamPopupOpen = () => {
        setLivestreamPopupOpen(true);
      };
    
      const handleLivestreamPopupClose = () => {
        setLivestreamPopupOpen(false);
      };
    
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        gutter: 10,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
            {
                breakpoint: 1024, 
                settings: {
                  slidesToShow: 2,
                },
              },
            ],
          };

    return(
        <Box>
            <section className="page-header page-header--churches">
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
                    <Link to="/churches/list" className="more">
                    <Typography variant="h4" className="mb-5" paragraph>
                        View List
                    </Typography>
                    </Link>
                    <Box maxWidth="l" className="w-3/4 col-span-12 my-5 mx-auto slides">
                        <Slider {...sliderSettings}>
                            {/* <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ms-5 featured"> */}
                            <Box className="card-slide">
                                <Card className="mt-5">
                                <CardMedia
                                    component="img"
                                    alt="Sunday"
                                    height="225"
                                    image={require("../assets/churches/daystar.jpg")}
                                />
                                
                                <CardContent>
                                    <Typography variant="h4">Daystar Christian Center</Typography>
                                    <Typography variant="body1" gutterBottom className="card-text">
                                    God has given us a mandate to raise role models, and He has indeed
                                    been faithful, backing our dedication and hard work with a great
                                    harvest of transformed lives. It is top priority for us that you
                                    partake of wholesome worship, edifying messages to build you up
                                    and positive interactions.
                                    </Typography>
                                    <Typography variant="body1" gutterBottom className="card-text text-[#EE964B]">
                                    Plot A3C, Ikosi Road, Oregun, Lagos 
                                    </Typography>
                                    <Box className="flex justify-between items-center">
                                    <Typography variant="body2" className="text-[#0E103D]">
                                        Sundays 8:00AM & 10:00AM<br />
                                        Wednesdays 6:00PM 
                                    </Typography>
                                    </Box>
                                    <Box className="mt-5">
                                        <Link to="">
                                            <button onClick={handleLivestreamPopupOpen} className="btn btn--primary btn-wide btn--large h-full-width">
                                                Connect
                                            </button>
                                        </Link>
                                    </Box>
                                </CardContent>
                                </Card>
                                <Modal
                                        isOpen={livestreamPopupOpen}
                                        onRequestClose={handleLivestreamPopupClose}
                                        style={{
                                        overlay: {
                                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                                        },
                                        content: {
                                            top: "50%",
                                            left: "50%",
                                            right: "auto",
                                            bottom: "auto",
                                            marginRight: "-50%",
                                            transform: "translate(-50%, -50%)",
                                            background: "white",
                                        },
                                        }}
                                    >
                                    </Modal>
                                </Box>

                                <Box className="card-slide">
                                <Card className="mt-5">
                                <CardMedia
                                    component="img"
                                    alt="Total Experience"
                                    height="225"
                                    image={require("../assets/churches/tfolc.jpg")}
                                />
                                <CardContent>
                                    <Typography variant="h4">The Fountain of Life Church</Typography>
                                    <Typography variant="body1" gutterBottom className="card-text">
                                    The Fountain of Life Church is a ministry with a mission to
                                    provide a home for the lost; guide those in search of direction,
                                    purpose and calling; and raise a people who are committed to
                                    making a difference.<br/><br /><br/>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom className="card-text text-[#EE964B]">
                                        12 Industrial Estate Road, Off Town Planning Way Ilupeju, Lagos
                                    </Typography>
                                    <Box className="flex justify-between items-center">
                                    <Typography variant="body2" className="text-[#0E103D]">
                                        Sundays 8:00AM & 10:00AM<br />
                                        Wednesdays 6:00PM 
                                    </Typography>
                                    </Box>
                                    <Box className="mt-5">
                                        <Link to="">
                                            <button onClick={handleLivestreamPopupOpen} className="btn btn--primary btn-wide btn--large h-full-width">
                                                Connect
                                            </button>
                                        </Link>
                                    </Box>                           
                                </CardContent>
                                </Card>
                                </Box>

                                <Box className="card-slide">
                                <Card className="mt-5">
                                <CardMedia
                                    component="img"
                                    alt="Wednesday"
                                    height="225"
                                    image={require("../assets/churches/grace_assembly.jpg")}
                                />
                                <CardContent>
                                    <Typography variant="h4">Grace Assembly</Typography>
                                    <Typography variant="body1" gutterBottom className="card-text">
                                        Grace Assembly is a family of people with a membership that
                                        cuts across ethnic and geographical lines We are humbled that
                                        God would love us as He does.<br/><br /><br/>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom className="card-text text-[#EE964B]">
                                        Yard 158, Kudirat Abiola Way, Oregun, Lagos
                                    </Typography>
                                    <Box className="flex justify-between items-center">
                                    <Typography variant="body2" className="text-[#0E103D]">
                                        Sundays 8:00AM & 10:00AM<br />
                                        Wednesdays 6:00PM 
                                    </Typography>
                                    </Box>
                                    <Box className="mt-5">
                                        <Link to="">
                                            <button onClick={handleLivestreamPopupOpen} className="btn btn--primary btn-wide btn--large h-full-width">
                                                Connect
                                            </button>
                                        </Link>
                                    </Box>
                                    
                                </CardContent>
                                </Card>
                            </Box>
                            <Box className="card-slide">
                                <Card className="mt-5">
                                <CardMedia
                                    component="img"
                                    alt="Sunday"
                                    height="225"
                                    image={require("../assets/churches/tcn.jpg")}
                                />
                                
                                <CardContent>
                                    <Typography variant="h4">The Covenant Nation</Typography>
                                    <Typography variant="body1" gutterBottom className="card-text">
                                    The vision of the Covenant Nation is to teach Christians who they
                                    are in Christ Jesus, and how to live a victorious life in their
                                    covenant rights and privileges. <br/><br/><br/>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom className="card-text text-[#EE964B]">
                                     The Covenant Place, Iganmu, Lagos
                                    </Typography>
                                    <Box className="flex justify-between items-center">
                                    <Typography variant="body2" className="text-[#0E103D]">
                                        Sundays 8:00AM & 10:00AM<br />
                                        Tuesdays 6:00PM 
                                    </Typography>
                                    </Box>
                                    <Box className="mt-5">
                                        <Link to="">
                                            <button onClick={handleLivestreamPopupOpen} className="btn btn--primary btn-wide btn--large h-full-width">
                                                Connect
                                            </button>
                                        </Link>
                                    </Box>
                                </CardContent>
                                </Card>
                                </Box>

                                <Box className="card-slide">
                                <Card className="mt-5">
                                <CardMedia
                                    component="img"
                                    alt="Total Experience"
                                    height="225"
                                    image={require("../assets/churches/tfolc.jpg")}
                                />
                                <CardContent>
                                    <Typography variant="h4">The Fountain of Life Church</Typography>
                                    <Typography variant="body1" gutterBottom className="card-text">
                                    The Fountain of Life Church is a ministry with a mission to
                                    provide a home for the lost; guide those in search of direction,
                                    purpose and calling; and raise a people who are committed to
                                    making a difference.<br/><br /><br/>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom className="card-text text-[#EE964B]">
                                        12 Industrial Estate Road, Off Town Planning Way Ilupeju, Lagos
                                    </Typography>
                                    <Box className="flex justify-between items-center">
                                    <Typography variant="body2" className="text-[#0E103D]">
                                        Sundays 8:00AM & 10:00AM<br />
                                        Wednesdays 6:00PM 
                                    </Typography>
                                    </Box>
                                    <Box className="mt-5">
                                        <Link to="">
                                            <button onClick={handleLivestreamPopupOpen} className="btn btn--primary btn-wide btn--large h-full-width">
                                                Connect
                                            </button>
                                        </Link>
                                    </Box>                           
                                </CardContent>
                                </Card>
                                </Box>

                                <Box className="card-slide">
                                <Card className="mt-5">
                                <CardMedia
                                    component="img"
                                    alt="Wednesday"
                                    height="225"
                                    image={require("../assets/churches/grace_assembly.jpg")}
                                />
                                <CardContent>
                                    <Typography variant="h4">Grace Assembly</Typography>
                                    <Typography variant="body1" gutterBottom className="card-text">
                                        Grace Assembly is a family of people with a membership that
                                        cuts across ethnic and geographical lines We are humbled that
                                        God would love us as He does.<br/><br /><br/>
                                    </Typography>
                                    <Typography variant="body1" gutterBottom className="card-text text-[#EE964B]">
                                        Yard 158, Kudirat Abiola Way, Oregun, Lagos
                                    </Typography>
                                    <Box className="flex justify-between items-center">
                                    <Typography variant="body2" className="text-[#0E103D]">
                                        Sundays 8:00AM & 10:00AM<br />
                                        Wednesdays 6:00PM 
                                    </Typography>
                                    </Box>
                                    <Box className="mt-5">
                                        <Link to="">
                                            <button onClick={handleLivestreamPopupOpen} className="btn btn--primary btn-wide btn--large h-full-width">
                                                Connect
                                            </button>
                                        </Link>
                                    </Box>
                                    
                                </CardContent>
                                </Card>
                            </Box>
                        </Slider>
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
            <LivestreamPopup open={livestreamPopupOpen} onClose={handleLivestreamPopupClose} />
        </Box>
    )
}