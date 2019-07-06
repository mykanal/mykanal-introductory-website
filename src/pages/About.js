import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class About extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="page" className="page about-page">
                        <div className="page-content">
                            <section className="section about__header section__header">
                                <div className="section__inner"><img className="section-image"
                                                                     src={require("../images/blocks-row-2.svg")}
                                                                     alt="CNBC"/>
                                    <div className="section-content container">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h1>Our mission</h1></div>
                                            <p>Transforming private investments with blockchain technology to unlock
                                                liquidity and
                                                value.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/*<div className="section section-people about__team section__centered">*/}
                                {/*<div className="section__inner">*/}
                                    {/*<div className="people__images"><img className="image-0"*/}
                                                                         {/*src={require("../images/blocks.svg")}*/}
                                                                         {/*alt="CNBC"/><img*/}
                                        {/*className="image-1" src={require("../images/team-1.jpg")} alt="CNBC"/><img*/}
                                        {/*className="image-2"*/}
                                        {/*src={require("../images/team-2.jpg")} alt="CNBC"/><img*/}
                                        {/*className="image-3" src={require("../images/team-3.jpg")} alt="CNBC"/></div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                        <br/>
                        {/*<section className="section about__footer section__centered">*/}
                            {/*<div className="section__inner">*/}
                                {/*<div className="section-content container section__pad-small">*/}
                                    {/*<div className="section-copy">*/}
                                        {/*<div className="section-copy__header"><h2>Careers</h2></div>*/}
                                        {/*<p>We are always looking for talented people. Join us!</p>*/}
                                        {/*<div className="cta-row"><Link className="btn btn-primary" to="/careers">See*/}
                                            {/*Open*/}
                                            {/*Positions</Link>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</section>*/}
                    </div>

                </div>
                <div className="gdprBanner__container">
                    <div className="gdprBanner">
                        <div className="bannerNotification">
                            <p>
                                MyKanal uses cookies to enhance your browsing experience and to deliver you
                                personalized content.By clicking or using this site, you agree to our
                                <Link to="https://mykanal.com/privacy-policy#cookies" target="_blank" id="gdbrBanner__cookiePolicyLink">Cookie Policy</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
