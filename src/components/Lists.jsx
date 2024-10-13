import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LivestreamPopup } from "./LiveStreamPopUp";
import "../index.css"
import "animate.css"

const ListItem = ({ title, address }) =>{
    const [livestreamPopupOpen, setLivestreamPopupOpen] = useState(false);

    const handleLivestreamPopupOpen = () => {
        setLivestreamPopupOpen(true);
      };
    
      const handleLivestreamPopupClose = () => {
        setLivestreamPopupOpen(false);
      };
      return (
        <>
            <Link to="" onClick={handleLivestreamPopupOpen}>
                <Typography variant="h4" paragraph gutterBottom className="lists">
                {title}. {address} &emsp; &emsp;
                    <span>
                        <Link to="">
                        <button
                            onClick={handleLivestreamPopupOpen}
                            className="btn btn--primary btn--small"
                        >
                            Connect
                        </button>
                        </Link>
                    </span>
                </Typography>
            </Link>
            <LivestreamPopup
                open={livestreamPopupOpen}
                onClose={handleLivestreamPopupClose}
            />
        </>
      );
    };

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
                    <Typography variant="h2" className="pl-8 text-white" id="events">
                        Featured Churches
                    </Typography>
                    <Typography
                        variant="h3 lists__heading"
                        paragraph
                        gutterBottom
                        className="text-[#0E103D] capitalize"
                    >
                        Looking for a local church? Choose from the list below and connect
                        When There's A Program
                    </Typography>
                    <ListItem
                        title="Daystar Christian Center"
                        address="Plot A3C, Ikosi Road, Oregun, Lagos"
                    />
                    <ListItem
                        title="The Fountain of Life Church"
                        address="12 Industrial Estate Road, Off Town Planning Way Ilupeju, Lagos"
                    />
                    <ListItem
                        title="Grace Assembly"
                        address="Yard 158, Kudirat Abiola Way, Oregun, Lagos"
                    />
                    <ListItem
                        title="The Covenant Nation"
                        address="The Covenant Place, Iganmu, Lagos"
                    />
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