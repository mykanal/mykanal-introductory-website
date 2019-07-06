import React, { Component } from 'react';
import { Link} from "react-router-dom";

class Investors extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="page" className="page investors">

                        <div className="page-content">
                            <section className="section intro section__header">
                                <div className="section__inner"><img className="section-image" src={require("../images/investor/img-buildings2.jpg")} alt="CNBC" />
                                    <div className="section-content container">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h1>Access quality private investments</h1></div>
                                            <p>MyKanal gives you access to quality institutional private investments like commercial
                                                real estate and investment funds at lower minimums, allowing you to invest in
                                                opportunities previously out of reach.</p></div>
                                    </div>
                                </div>
                            </section>
                            <section className="section half-width investors__liquidity section__centered">
                                <div className="section__inner">
                                    <div className="section-content container section__pad-large">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Benefit from enhanced liquidity</h2></div>
                                          <p>Content.....</p>
                                            {/*<p>Historically, private investments have had very little liquidity, with no significant*/}
                                                {/*secondary market. MyKanal’s blockchain solution unlocks liquidity by reducing the*/}
                                                {/*frictions and barriers to trade. Private investments become more liquid, making it*/}
                                                {/*easier to connect with potential buyers around the world.</p>*/}
                                            <ul className="section-bullets">
                                                <li><h4>Secondary liquidity</h4>
                                                    <p>The potential to trade 24/7/365 on licensed trading platforms or peer-to-peer
                                                        under prevailing market conditions and the applicable transfer rules.</p>
                                                </li>
                                                <li><h4>Lower the illiquidity discount</h4>
                                                    <p>Private investments are often resold at severe discounts to their net asset
                                                        value. MyKanal helps reduce the friction to trade, lowering the illiquidity
                                                        discount.</p></li>
                                                <li><h4>Reach an expanding global market</h4>
                                                    <p>Exchanges and other market participants around the globe are providing
                                                        services to connect buyers and sellers in ways previously not possible.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section inset-image investors__opportunities section__image-left">
                                <div className="section__inner">
                                    <div className="section-content container">
                                        <div className="section-image"><img src={require("../images/investor/img-invest.jpg")} alt="CNBC" /></div>
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Gain value investing alongside institutional
                                                leaders</h2></div>
                                          <p>Content.....</p>

                                          {/*<p>Invest alongside leading operators and investors in premium assets with a level*/}
                                                {/*playing field and aligned incentives.</p>*/}
                                    </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section section__image-right">
                                <div className="section__inner"><img className="section-image"
                                                                 src={require("../images/investor/investor-dashboard-ui.png")} />
                                    <div className="section-content container">
                                      <p>Content.....</p>

                                      {/*<div className="section-copy">*/}
                                            {/*<div className="section-copy__header"><h2>An elegant investing experience</h2></div>*/}
                                            {/*<p>MyKanal makes the usual tedious paperwork quick and easy, on an elegant, all-in-one*/}
                                                {/*platform. Onboard once and get instant access to future investment opportunities.*/}
                                                {/*MyKanal brings everything together into a seamless user experience – including*/}
                                                {/*identity verification, payments, and paperwork.</p></div>*/}
                                    </div>
                                </div>
                            </section>
                            <section className="section section-footer section__centered">
                                <div className="section__inner">
                                    <div className="section-content container section__pad-small"><img className="blocks"
                                                                                                   src={require("../images/blocks.svg")}/>
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Create an investor account</h2></div>
                                            <div className="cta-row"><Link className="btn btn-primary"
                                                                    to="https://secure.mykanal.com/investor/start" style={{cursor: "not-allowed", background: "#5d5d5d24", opacity: 0.6}}>Sign Up</Link>
                                            </div>
                                        </div>
                                        <img className="blocks-row" src={require("../images/blocks-row.svg")}/></div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="gdprBanner__container">
                        <div className="gdprBanner">
                            <div className="bannerNotification"><p>MyKanal uses cookies to enhance your browsing experience and to
                                deliver you personalized content. By clicking or using this site, you agree to our <Link
                                    to="https://mykanal.com/privacy-policy#cookies" target="_blank"
                                    id="gdbrBanner__cookiePolicyLink">Cookie Policy</Link>.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Investors;