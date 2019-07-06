import React, { Component } from 'react';
import { Link} from "react-router-dom";

class Platform extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="page" className="page platform">
                        <div className="page-content">
                            <section className="section platform__intro section__header">
                                <div className="section__inner"><img className="section-image" src={require("../images/platform/img-bridge.jpg")} alt="CNBC" />
                                    <div className="section-content container">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h1>All-in-one platform for tokenizing private
                                                investments</h1></div>
                                            <p>Tokenization is the process of using blockchain technology to digitally maintain
                                                transfers, records and ownership of private securities. But tokenizing is only part
                                                of the equation to ensure a compliant offering with enhanced liquidity. From initial
                                                offering to secondary transfers, MyKanal takes care of investor onboarding,
                                                compliance, and more.</p>
                                            <div className="cta-row"><Link className="btn btn-primary" to="/contact">Contact Us</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section platform__onboarding section__centered">
                                <div className="section__inner">
                                    <div className="section-content container section__pad-large">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Seamless onboarding</h2></div>
                                            <p>MyKanal makes investor onboarding easy and painless – including KYC, AML and
                                                accredited investor verification to gathering tax information and signing
                                                documents.</p></div>
                                    </div>
                                </div>
                            </section>
                            <section className="section platform__investing section__image-left">
                                <div className="section__inner"><img className="section-image" src={require("../images/img-issuer-platform.png")} alt="CNBC" />
                                    <div className="section-content container">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Elegant investing experience</h2></div>
                                            <p>Create a branded investing experience that is simple and pain free – from payments
                                                and legal documents to compliance and closing.</p></div>
                                    </div>
                                </div>
                            </section>
                            <section className="section platform__oneplace section__centered">
                                <div className="section__inner">
                                    <div className="section-content container section__pad-large">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Everything in one place</h2></div>
                                            <ul className="section-bullets">
                                                <li><h4>Investment details</h4>
                                                    <p>Access all of the details around your investments, anytime, on your MyKanal
                                                        account.</p></li>
                                                <li><h4>Documents</h4>
                                                    <p>Sign documents online and access them through your account.</p></li>
                                                <li><h4>Transaction history</h4>
                                                    <p>View your account activity, investment performance, dividends and more.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section platform__compliance section__image-right">
                                <div className="section__inner"><img className="section-image" src={require("../images/platform/img-whitepaper.png")} alt="CNBC" />
                                    <div className="section-content container section__pad-small">
                                        <div className="section-copy">
                                            {/*<div className="section-copy__header"><h2>Compliance at the core</h2></div>*/}
                                            {/*<p>With MyKanal, tokenized investments can only be transferred if they satisfy the*/}
                                                {/*applicable rules. This makes compliance with securities regulations and other*/}
                                                {/*relevant rules simple — from issuance through secondary transfers, wherever they*/}
                                                {/*occur.</p>*/}
                                            {/*<div className="cta-row"><Link className="btn btn-secondary btn-dark" to="/rtokenwhitepaper.pdf">Learn*/}
                                                {/*more about MyKanal compliance</Link></div>*/}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section section-footer section-footer__light section__centered">
                                <div className="section__inner">
                                    <div className="section-content container section__pad-small"><img className="blocks"
                                                                                                   src={require("../images/blocks.svg")} alt="CNBC" />
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Interested in using the MyKanal platform?</h2>
                                            </div>
                                            <div className="cta-row"><Link className="btn btn-primary" to="/contact">Contact Us</Link></div>
                                        </div>
                                        <img className="blocks-row" src={require("../images/blocks-row.svg")} alt="CNBC" /></div>
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

export default Platform;