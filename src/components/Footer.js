import React, {Component} from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (

        <footer className="footer">
            <div className="container">
                <nav>
                    <div className="footer__logo-column"><a id="footerHomeLink" className="nav__home-link"
                                                            href="/">
                        {/*<span className="footer__logo"></span>*/}
                        <img style={{width: '100px'}} src={require("../images/logos/mykanal-logo.png")}/>
                    </a></div>
                    <ul>
                        <li><a aria-current="false" id="footerPlatformLink" title="Platform"
                               href="platform">Platform</a>
                        </li>
                        <li><a aria-current="false" id="footerIssuersLink" title="Issuers"
                               href="issuers">Issuers</a></li>
                        <li><a aria-current="false" id="footerInvestorsLink" title="Investors"
                               href="investors">Investors</a>
                        </li>
                    </ul>
                    <ul>
                        <li><a className="disabled-link" aria-current="false" id="footerTeamLink" title="Team" >Team</a></li>
                        <li><a className="disabled-link" aria-current="false" id="footerPressLink" title="News" >News</a></li>
                        <li><a className="disabled-link" >Careers</a></li>
                        <li><a className="disabled-link" >Blog</a></li>
                    </ul>
                    <ul>
                        <li><a className="disabled-link" >Support</a></li>
                        <li><a className="disabled-link" aria-current="false" id="footerPrivacyLink" title="Privacy"
                               >Privacy</a>
                        </li>
                        <li><a className="disabled-link" aria-current="false" id="footerTermsLink" title="Terms of Service" >Terms
                            of Service</a></li>
                        <li><a className="disabled-link" aria-current="false" id="footerContactLink" title="Contact" href="/contact"
                               >Contact</a></li>
                    </ul>
                    <ul className="footer__cta-links">
                        <li>
                            <a className="btn btn-primary btn-dark disabled-link" style={{cursor: "not-allowed", background: "#5d5d5d24", opacity: 0.6}} >Sign Up</a>
                        </li>
                        <li>
                            <a className="btn btn-secondary btn-dark disabled-link" style={{cursor: "not-allowed", background: "#5d5d5d24", opacity: 0.6}} >Log In</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container copyright"><p>© 2019 MyKanal Platform, Inc.</p>
                <ul className="social-links">
                    <li><a className="disabled-link" title="Facebook" >
                        <svg width="8" height="18" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M-5-1h18.667v19.515H-5z"></path>
                                <path fill="#FFF" className="icon"
                                      d="M5.458 17.303H2.382V8.818H.333V5.902h2.05V4.205c0-2.44.615-3.872 3.331-3.872H7.97V3.25H6.535c-1.077 0-1.128.424-1.128 1.167v1.485H7.97l-.256 2.916H5.458v8.485"></path>
                            </g>
                        </svg>
                    </a></li>
                    <li><a className="disabled-link" title="LinkedIn" >
                        <svg width="19" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path className="icon"
                                  d="M17.174.176c.733 0 1.326.572 1.326 1.277v15.27c0 .705-.593 1.277-1.326 1.277H1.882c-.733 0-1.326-.572-1.326-1.277V1.453c0-.705.593-1.277 1.326-1.277h15.292zM3.321 15.2h2.71V7.153h-2.71V15.2zm1.355-9.147c.945 0 1.534-.618 1.534-1.39-.018-.79-.589-1.391-1.516-1.391s-1.533.6-1.533 1.39c0 .773.588 1.39 1.498 1.39h.017zm2.748 9.197h2.71v-4.495c0-.24.018-.481.09-.653.196-.48.642-.978 1.39-.978.981 0 1.373.738 1.373 1.82v4.306h2.71v-4.615c0-2.473-1.337-3.623-3.12-3.623-1.462 0-2.104.807-2.46 1.356h.017V7.202h-2.71c.036.755 0 8.049 0 8.049z"
                                  fill="#FFF" fill-rule="evenodd"></path>
                        </svg>
                    </a></li>
                    <li><a className="disabled-link" title="Twitter" >
                        <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
                            <path className="icon"
                                  d="M20 1.977c-.746.322-1.497.577-2.368.64.871-.51 1.497-1.34 1.81-2.297-.81.513-1.684.83-2.619 1.022C16.14.512 15.015 0 13.893 0c-2.24 0-4.111 1.854-4.111 4.216 0 .32.061.64.124.957C6.48 4.981 3.488 3.32 1.432.765A4.102 4.102 0 0 0 .871 2.87a4.34 4.34 0 0 0 1.807 3.51 3.747 3.747 0 0 1-1.87-.512v.064a4.155 4.155 0 0 0 3.301 4.087c-.375.065-.683.128-1.058.128-.251 0-.5 0-.746-.063.5 1.662 2.053 2.875 3.8 2.94-1.371 1.147-3.176 1.789-5.11 1.789-.312 0-.683 0-.995-.065a11.3 11.3 0 0 0 6.292 1.918c7.54 0 11.653-6.386 11.653-11.943v-.512c.809-.705 1.497-1.405 2.055-2.235"
                                  fill="#FFF" fill-rule="evenodd"></path>
                        </svg>
                    </a></li>
                    <li><a className="disabled-link" title="Medium" >
                        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path className="icon"
                                  d="M0 18V0h18v18H0zM4.295 6.02v5.345a.615.615 0 0 1-.163.53l-1.27 1.54v.204h3.601v-.203l-1.27-1.541a.638.638 0 0 1-.175-.53V6.742l3.161 6.897h.367l2.716-6.897v5.497c0 .147 0 .175-.096.271l-.977.948v.204h4.742v-.204l-.942-.925a.282.282 0 0 1-.108-.271v-6.8a.282.282 0 0 1 .108-.272l.965-.925v-.203h-3.342l-2.383 5.942-2.71-5.942H3.015v.203l1.13 1.36c.11.1.167.246.151.395z"
                                  fill="#FFF" fill-rule="evenodd"></path>
                        </svg>
                    </a></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;