"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Nav, Navbar } from "react-bootstrap";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { site } from "../../../data/site";
import "./Navbar.css";

const socialIcons = {
  Email: <EmailRoundedIcon style={{ fontSize: 20 }} />,
  GitHub: <GitHubIcon style={{ fontSize: 19 }} />,
  LinkedIn: <LinkedInIcon style={{ fontSize: 21 }} />,
};

const NavBar = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

  // Smooth-scroll to a section anchor, navigating home first if needed.
  const scrollToSection = (href: string) => {
    const id = href.replace(/^\/?#?/, "");
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Close the mobile menu first so the body scroll lock is released
    // (the unlock effect restores the scroll position) before we scroll.
    setExpanded(false);

    if (window.location.pathname !== "/") {
      router.push("/");
      // Wait for the home page to render before scrolling.
      setTimeout(scroll, 300);
    } else {
      // Wait for the body unlock effect to finish restoring scroll position.
      setTimeout(scroll, 50);
    }
  };




  // Lock body scroll while the mobile menu is open, restore position on close.
  useEffect(() => {
    if (expanded) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1);
      }
    }
  }, [expanded]);

  return (
    <Navbar
      fixed="top"
      expand="lg"
      className="navbar"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand href="/">{site.brand}</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={() => setExpanded(false)}>
            {site.nav.map((link) => (
              <Nav.Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto" onSelect={() => setExpanded(false)}>
            {site.socials.map((social) => (
              <Nav.Link
                key={social.label}
                href={social.href}
                target={social.label === "Email" ? undefined : "_blank"}
              >
                {socialIcons[social.label]}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
