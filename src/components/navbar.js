import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography,
  Menu,
  IconButton,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

const pages = [
  { name: "About Me", path: "/bryant-portfolio/aboutme" },
  { name: "Where I've Been", path: "/bryant-portfolio/journey" },
  { name: "Skills", path: "/bryant-portfolio/skills" },
  { name: "Internship", path: "/bryant-portfolio/internship" },
  { name: "Projects", path: "/bryant-portfolio/projects" },
];

export default function PortfolioNavbar() {
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const title = "Bryant Suiskens";
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/bryant-portfolio/"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "text.menu",
              textDecoration: "none",
            }}
          >
            {t(title)}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="text.menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  containerelement={<Link to={page.path} />}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{t(page.name)}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "text.menu",
              textDecoration: "none",
            }}
          >
            {t(title)}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "text.menu", display: "block" }}
              >
                {t(page.name)}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              variant="outline"
              color="secondary"
              component="a"
              href="https://www.linkedin.com/in/bryant-suiskens-69558b11b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon></LinkedInIcon>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
