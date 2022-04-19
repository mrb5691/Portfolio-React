import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import "./App.css";
import MetaTags from "react-meta-tags";

document.body.style.margin = 0;

const NavBar = styled.nav`
  background-image: url(${'https://i.postimg.cc/d0Rhs67N/325104.jpg'});
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  width: 33%;
  left: 0;
  position: fixed;
  color: #f4f5f6;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  top: 0;
  bottom: 0;
  overflow: auto;
  @media (max-width: 500px) {
    display: none;
  }
`;

const HeaderNav = styled.header`
  background-color: lightblue;
  height: 50px;
  width: 100%;
  top: 0;
  position: fixed;
  color: white;
  font-size: 18px;
  display: none;
  align-items: center;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
  }
`;

const Page404 = ({ location }) => (
  <div className="errorDiv">
    <h2 className="errorText">
      page<code>{location.pathname}</code> does not exist
    </h2>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <MetaTags>
          <title>Mitchell Bennett | Software Engineer</title>
          <meta
            id="meta-description"
            name="description"
            content="Mitchell Bennett Portfolio"
          />
          <meta
            id="og-title"
            property="og:title"
            content="Mitchell Bennett | Software Engineer"
          />
        </MetaTags>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mitchell Bennett | Software Engineer</title>
          <meta name="og:type" content="website" />
          <meta
            name="og:description"
            content="Mitchell Bennett Porfolio"
          />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Mitchell Bennett | Software Engineer"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto+Slab&display=swap"
            rel="stylesheet"
          />
          <link rel="apple-touch-icon" href="https://i.postimg.cc/C5jTLnxj/me.jpg" />
        </Helmet>
        <HeaderNav>
          <Link className="headerLinks" to="/">
            <li className="HeaderNavLinks">Home</li>
          </Link>
          <Link className="headerLinks" to="/work">
            <li className="HeaderNavLinks">Projects</li>
          </Link>
          <a
            className="headerLinks"
            href="https://docs.google.com/document/d/1iw3rljwH0Qa7rB9tQ4AamZKtlh5Z5Ky8xq8nAF5tVvg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="HeaderNavLinks">Resume</li>
          </a>
          <div className="logos">
            <a
              className="headerLogoLinks"
              href="https://www.linkedin.com/in/mitchell-r-bennett/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="logo" />
            </a>
            <a
              className="headerLogoLinks"
              href="https://github.com/mrb5691"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="logo" />
            </a>
          </div>
        </HeaderNav>
        <NavBar>
          <div className="logosAndPhoto">
            <div className="placeholder"></div>
            <h1 className="nameTitle">Mitchell Bennett | Software Engineer</h1>
            <div className="componentNav">
              <nav>
                <ul>
                  <Link className="links" to="/">
                    <li className="SideNav">Home</li>
                  </Link>
                  {/* <Link className="links" to="/about">
                  <li className="SideNav">About Me</li>
                </Link> */}
                  <Link className="links" to="/work">
                    <li className="SideNav">Projects</li>
                  </Link>
                  {/* <Link className="links" to="/contact">
                  <li className="SideNav">Contact Me</li>
                </Link> */}
                  <a
                    className="links"
                    href="https://docs.google.com/document/d/1iw3rljwH0Qa7rB9tQ4AamZKtlh5Z5Ky8xq8nAF5tVvg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <li className="SideNav">Resume</li>
                  </a>
                </ul>
              </nav>
              <div className="logos">
                <a
                  className="logoLinks"
                  href="https://www.linkedin.com/in/mitchell-r-bennett/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="logo" />
                </a>
                <a
                  className="logoLinks"
                  href="https://github.com/mrb5691"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="logo" />
                </a>
              </div>
            </div>
          </div>
        </NavBar>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/work"
              element={<Projects />}
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route component={Page404} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;