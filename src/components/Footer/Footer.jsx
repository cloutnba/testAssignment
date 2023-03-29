
import './Footer.scss';

import {Link} from "react-router-dom";
import {useState} from "react";
import Contacts from "../Contacts/Contacts";
import Subscribe from "./Subscribe/Subscribe";
import {brown} from "@mui/material/colors";


const Footer = () => {

  return(
      <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <h2 className="footer__logo">Logo Here</h2>
                  <hr className="line"/>
                  <div className="footer__links">
                      <div className="footer__contacts">
                          <h3 className="footer__title">Reach us</h3>
                          <Contacts componentOwner="footer"/>
                      </div>

                      <div className="footer__column">
                          <h3 className="footer__title">Reach us</h3>
                          <Link className="footer__link"  to='/about'>About</Link>
                          <Link className="footer__link"  to='/contact'>Contact</Link>
                          <Link className="footer__link"  to='/Blogs'>About</Link>
                      </div>
                      <div className="footer__column">
                          <h3 className="footer__title">Legal</h3>
                          <Link className="footer__link"  to='/about'>Privacy Policy</Link>
                          <Link  className="footer__link" to='/contact'>Terms & Services</Link>
                          <Link className="footer__link"  to='/Blogs'>Terms of Use</Link>
                          <Link  className="footer__link" to='/Blogs'>Refund Policy</Link>
                      </div>
                      <div className="footer__column">
                          <h3 className="footer__title">Quick Links</h3>
                          <Link  className="footer__link" to='/about'>Techlabz Keybox</Link>
                          <Link  className="footer__link" to='/contact'>Downloads</Link>
                          <Link  className="footer__link" to='/Blogs'>Forum</Link>
                      </div>

                      <div className="footer__subscribe subscribe">
                          <Subscribe />
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer;