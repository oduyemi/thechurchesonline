import React from "react";
import Modal from "react-modal";
import { Box, Typography } from "@mui/material";

Modal.setAppElement("#root"); // Add this line to set the root element for accessibility

const LivestreamPopup = ({ open, onClose }) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(14, 16, 61, 0.7)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
        <Typography variant="h3" paragraph gutterBottom className="close text-[#EE964B]" onClick={onClose}> X </Typography>
      <div>
        <Typography variant="h3" className="text-[#0E103D]">Connects When There's A Program</Typography>
        <Box position="relative" paddingTop="6.25%">
          <iframe
            title="Livestream"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YOUR_LIVESTREAM_VIDEO_ID"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </Box>
      </div>
      
    </Modal>
  );
};

export { LivestreamPopup };
