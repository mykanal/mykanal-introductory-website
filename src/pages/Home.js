import React, { Component } from 'react';
import { Link} from "react-router-dom";
import Slider from "react-slick";

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="page" className="page home">
                        <div className="page-content">
                            <section className="section home__intro home__intro-1">
                                <div className="section__inner">
                                    <div className="section-content container">
                                        <ul className="carousel">
                                            <li className="active"><img src={require("../images/home/header-1.jpg")} alt="CNBC" /></li>
                                            <li className=""><img src={require("../images/home/header-2.jpg")} alt="CNBC" /></li>
                                            <li className=""><img src={require("../images/home/header-3.jpg")} alt="CNBC" /></li>
                                            <li className=""><img src={require("../images/home/header-4.jpg")} alt="CNBC" /></li>
                                            <li className="previous"><img src={require("../images/home/header-5.jpg")} alt="CNBC" /></li>
                                        </ul>
                                        <div className="box">
                                            <div className="section-copy">
                                                <div className="section-copy__header"><h1>Your property is your company - Sale its shares</h1>
                                                </div>
                                                <p>MyKanal is turning your property into digital shares and getting you maximum and fastest returns.</p>
                                                <div className="cta-row"><Link className="btn btn-primary"
                                                                        to="/https://secure.mykanal.com/investor/start">Sign
                                                    Up</Link><Link className="btn btn-secondary" to="/issuers">Raise Capital</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section home__logos section__centered">
                                <div className="section__inner">
                                    <div className="section-content container"><h3>Featured In</h3>
                                        <ul className="logos">
                                            <li><img src={require("../images/logos/wsj.svg")} alt="The Wall Street Journal" /></li>
                                            <li><img src={require("../images/logos/cnbc.svg")} alt="CNBC" /></li>
                                            <li><img src={require("../images/logos/forbes.svg")} alt="Forbes" /></li>
                                            <li><img src={require("../images/logos/techcrunch.svg")} alt="TechCrunch" /></li>
                                            <li><img src={require("../images/logos/fortune.svg")} alt="Fortune" /></li>
                                            <li><img src={require("../images/logos/trd.svg")} alt="The Real Deal" /></li>
                                        </ul>
                                        <span className="blocks-image"><img src={require("../images/blocks.svg")} alt="CNBC" /></span>
                                    </div>
                                </div>
                            </section>
                            <section className="section home__platform section__centered">
                                <div className="section__inner">
                                    <div className="section-content container section__pad-large">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>An all-in-one real-estate platform.</h2></div>
                                            <p>From raising capital for your project, investing in hot projects to all the best real-estate investments. — MyKanal is modernizing
                                                traditional way of real-estate investments.
                                                Unlock efficiencies and new opportunities for raising capitals and investors.</p>
                                            <div className="cta-row"><Link className="btn btn-secondary" to="/platform">Learn More</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="gdprBanner__container">
                        <div className="gdprBanner">
                            <div className="bannerNotification"><p>MyKanal uses cookies to enhance your browsing experience and to
                                deliver you personalized content. By clicking or using this site, you agree to our <Link
                                    to="/https://mykanal.com/privacy-policy#cookies" target="_blank"
                                    id="gdbrBanner__cookiePolicyLink">Cookie Policy</Link>.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
