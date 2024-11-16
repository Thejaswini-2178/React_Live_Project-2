import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header id="header-top" className="header-top">
        <ul>
          <li>
            <div className="header-top-left">
              <ul>
                <li className="select-opt">
                  <select name="language" id="language">
                    <option value="default">EN</option>
                    <option value="Bangla">BN</option>
                    <option value="Arabic">AB</option>
                  </select>
                </li>
                <li className="select-opt">
                  <select name="currency" id="currency">
                    <option value="usd">USD</option>
                    <option value="euro">Euro</option>
                    <option value="bdt">BDT</option>
                  </select>
                </li>
                <li className="select-opt">
                  <a href="#"><span className="lnr lnr-magnifier"></span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="head-responsive-right pull-right">
            <div className="header-top-right">
              <ul>
                <li className="header-top-contact">
                  +1 222 777 6565
                </li>
                <li className="header-top-contact">
                  <a href="#">sign in</a>
                </li>
                <li className="header-top-contact">
                  <a href="#">register</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <section className="top-area">
        <div className="header-area">
          <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop={70} data-minus-value-mobile={55} data-speed={1000}>
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars" />
                </button>
                <a className="navbar-brand" href="index.html">list<span>race</span></a>
              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className=" scroll active"><Link to="/">Home</Link></li>
                  <li className="scroll"><Link to="/howitworks">How it works</Link></li>
                  <li className="scroll"><Link to="/explore">Explore</Link></li>
                  <li className="scroll"><Link to="/reviwe">Riviwe</Link></li>
                  <li className="scroll"><Link to="/blog">Blog</Link></li>
                  <li className="scroll"><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      <div className="clearfix"></div>
      </section>
      </header>
    </div>
  )
}
export default Header
