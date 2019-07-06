import React, { Component } from 'react';
import { Link} from "react-router-dom";

class Issuers extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="page" className="page issuers">

                        <div className="page-content">
                            <section className="section intro section__header">
                                <div className="section__inner"><img className="section-image" src={require("../images/issuers/img-building.jpg")} alt="CNBC" />
                                    <div className="section-content container">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h1>A better way <br/>to raise capital</h1></div>
                                            <p>Contetn....</p>
                                            {/*<p>MyKanal provides an end-to-end platform to help you raise capital faster, easier, at*/}
                                                {/*lower cost. You can syndicate investments far more widely to access more capital*/}
                                                {/*from a broader, potentially global investor pool. Provide a superior investor*/}
                                                {/*experience with confidence that MyKanal has your critical compliance needs*/}
                                                {/*covered.</p>*/}
                                            <div className="cta-row"><Link className="btn btn-primary" to="/contact">Contact MyKanal</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section half-width issuers__trading section__centered">
                                <div className="section__inner">
                                    <div className="section-content container section__pad-large">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Lock up capital, <br/>not the investors</h2></div>
                                            <p>Contetn....</p>
                                            {/*<p>Investors value liquidity. MyKanal allows you to provide it with peace of mind. Built*/}
                                                {/*on blockchain technology, MyKanal automatically enforces compliant transfers between*/}
                                                {/*buyers and sellers around the world, 24/7/365, with near instantaneous settlement*/}
                                                {/*and no counterparty risk.</p>*/}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section inset-image issuers__realestate section__image-left">
                                <div className="section__inner">
                                    <div className="section-content container">
                                        <div className="section-image"><img src={require("../images/issuers/img-buildings.jpg")} alt="CNBC" /></div>
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>Unbundle and <br/>re-bundle real estate <br/>in
                                                exciting new ways</h2></div>
                                            <p>MyKanal creates a cost-effective way to fractionalize ownership at the individual
                                                asset level, allowing assets to bundled in exciting new ways in the future. For
                                                example, equity from tokenized commercial real estate can be bundled to create funds
                                                by neighborhood, cities, building type, and more.</p></div>
                                    </div>
                                </div>
                            </section>
                            <section className="section issuers__art section__image-right">
                                <div className="section__inner"><img className="section-image" src={require("../images/issuers/img-investors.jpg")} alt="CNBC" />
                                    <div className="section-content container">
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>An institutional-grade platform <br/>you can trust
                                            </h2></div>
                                            {/*<p>MyKanal’s all-in-one platform is built with the highest levels of security and*/}
                                                {/*compliance with institutional-grade BitGo Custody, BitGo multi-signature wallets,*/}
                                                {/*electronic signatures, and fully integrated investor verifications, including KYC,*/}
                                                {/*AML and accreditation checks.</p>*/}
                                            <p>Content...</p>
                                            <div className="cta-row"><Link className="btn btn-secondary" to="platform">Learn more about the
                                                MyKanal platform</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section section-footer section__centered">
                                <div className="section__inner">
                                    <div className="section-content container section__pad-small"><img className="blocks"
                                                                                                   src={require("../images/blocks.svg")} alt="CNBC" />
                                        <div className="section-copy">
                                            <div className="section-copy__header"><h2>What will you tokenize?</h2></div>
                                            <div className="cta-row"><Link className="btn btn-primary" to="/contact">Contact MyKanal</Link></div>
                                        </div>
                                        <img className="blocks-row" src={require("../images/blocks-row.svg")} alt="CNBC" />
                                    </div>
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

export default Issuers;