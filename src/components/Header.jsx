import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Events", to: "/events" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const NavLinks = ({ onClick }) => (
    <Stack
      direction={isMobile ? "column" : "row"}
      spacing={isMobile ? 3 : 4}
      alignItems={isMobile ? "flex-start" : "center"}
    >
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          onClick={onClick}
          style={{ textDecoration: "none" }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "1rem",
              color:
                location.pathname === link.to
                  ? theme.palette.primary.main
                  : "text-white",
              position: "relative",
              "&::after": {
                content: "''",
                position: "absolute",
                left: 0,
                bottom: -6,
                width: location.pathname === link.to ? "100%" : "0%",
                height: "2px",
                backgroundColor: theme.palette.primary.main,
                transition: "width 0.3s ease",
              },
              "&:hover::after": {
                width: "100%",
              },
            }}
          >
            {link.label}
          </Typography>
        </Link>
      ))}
    </Stack>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: "rgba(0, 16, 33, 0.85)", // matches site bg
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", py: 1.5 }}>
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src={require("../assets/logo/logo.png")}
              alt="logo"
              sx={{
                height: 42,
                width: "auto",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />
          </Link>

          {/* Desktop Nav */}
          {!isMobile && <NavLinks />}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton onClick={toggleDrawer} color="inherit">
              <FiMenu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            width: "80%",
            maxWidth: 320,
            background:
              "linear-gradient(180deg, #0b0b0b 0%, #121212 100%)",
            color: "white",
          },
        }}
      >
        <Box p={3}>
          <Box display="flex" justifyContent="space-between" mb={4}>
            <Typography variant="h6" fontWeight={600}>
              Menu
            </Typography>
            <IconButton onClick={toggleDrawer} color="inherit">
              <FiX />
            </IconButton>
          </Box>

          <NavLinks onClick={toggleDrawer} />
        </Box>
      </Drawer>
    </>
  );
};
