import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Header extends Component {
  state = {
    activeTab: 'platform'
  }

  componentDidMount() {
    const {pathname} = this.props.location;
    switch ((pathname)) {
      case '/about':
        this.setState({activeTab: 'about'})
        break;

      case '/platform':
        this.setState({activeTab: 'platform'});
        break;

      case '/investors':
      case '/issuers':
        this.setState({activeTab: 'howItWorks'})
        break;

      default:
        this.setState({activeTab: 'home'})
    }
  }

  onChangeRoute = (activeTab) => {
    this.setState({activeTab})
  }

  render() {
    console.log(this.props)
    const {activeTab} = this.state;
    const {onChangeRoute} = this;
    console.log(this.state)
    return (
      <nav className="nav">
        <div className="container">
          <Link id="headerPageTitle" className="nav__home-link" to="/" onClick={() => onChangeRoute('home')}>
            <img style={{width: '130px'}} src={require("../images/logos/Navigation-menu-logo-copy.png")}/>
            {/*<span className="nav__logo"></span>*/}
          </Link>
          <button className="nav__toggler">
            <span className="nav__toggler-icon"></span>
          </button>
          <span className="nav__sign-up"><Link className="btn btn-primary"
                                               to="https://secure.mykanal.com/investor/start">Sign Up</Link></span>
          <ul className="nav__links">
            <li>
              <Link className={`nav__link ${activeTab === 'platform' ? "active" : ''}`} aria-current="false"
                    id="headerPlatformLink" to="/platform" onClick={() => onChangeRoute('platform')}>Platform</Link>
            </li>
            <li className="nav__submenu-container">
              <button className={`nav__link nav__submenu-toggle ${activeTab === 'howItWorks' ? "active" : ''}`}>How It
                Works
              </button>
              <ul className="nav__submenu">
                <li>
                  <Link className="nav__link" aria-current="true" id="headerInvestorsLink" to="/investors"
                        onClick={() => onChangeRoute('howItWorks')}>Investing</Link>
                </li>
                <li>
                  <Link className="nav__link" aria-current="false" id="headerIssuersLink" to="/issuers"
                        onClick={() => onChangeRoute('howItWorks')}>Raising Capital</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className={`nav__link ${activeTab === 'about' ? "active" : ''}`} aria-current="false"
                    id="headerAboutLink" to="/about" onClick={() => onChangeRoute('about')}>About Us</Link>
            </li>
            <li className="nav__cta-links">
              <Link className="btn btn-secondary"
                    style={{cursor: "not-allowed", background: "#5d5d5d24", opacity: 0.6}}>Log In</Link>
              <Link className="btn btn-primary" style={{cursor: "not-allowed", background: "#707687", opacity: 0.6}}>Sign
                Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header);