import React from "react";
import Image from "next/image";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  navLink,
  nav,
  navbaractive,
  navDesktopVersion,
  navMobileVersion,
} from "../../styles/Home.module.css";
import logo from "../../pictures/logo.png";
import StartButton from "../Comps/StartButton";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation({
  variant = "dark",
  navClassName = "navLinkStyleLight",
}) {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    const animatedNavbar = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", animatedNavbar);
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant={variant}
        sticky="top"
        className={navbar ? navbaractive : nav}
      >
        <Container>
          <div className={navDesktopVersion} style={{ cursor: "pointer" }}>
            <Link href="/">
              <Image src={logo} height={40} width={35} alt="logo" />
            </Link>
          </div>
          <div className={navMobileVersion} style={{ cursor: "pointer" }}>
            <Navbar.Brand as={Link} href="/">
              <Image src={logo} height={40} width={35} alt="logo" />
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ position: "relative" }}>
              <Nav.Link as={Link} href="/about">
                <div className={navClassName}>
                  <a>Become a provider</a>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} href="/learn-more">
                <div className={navClassName}>
                  <a>Learn more</a>
                </div>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">
                <StartButton text="Get Started" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
