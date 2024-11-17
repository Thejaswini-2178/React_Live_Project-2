import React, { Component } from 'react';
import footerData from './footerData.json';

class Footer extends Component {
  render() {
    return (
      <div>
        {/* Footer */}
        <footer id="footer" className="footer">
          <div className="container">
            <div className="footer-menu">
              <div className="row">
                <div className="col-sm-3">
                  <div className="navbar-header">
                    <a className="navbar-brand" href={footerData.brand.url}>
                      {footerData.brand.name}
                    </a>
                  </div>
                </div>
                <div className="col-sm-9">
                  <ul className="footer-menu-item">
                    {footerData.menuItems.map((item, index) => (
                      <li className="scroll" key={index}>
                        <a href={item.link}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="hm-footer-copyright">
              <div className="row">
                <div className="col-sm-5">
                  <p>
                    {footerData.copyright.text}{' '}
                    <a href={footerData.copyright.link.url}>
                      {footerData.copyright.link.name}
                    </a>
                  </p>
                </div>
                <div className="col-sm-7">
                  <div className="footer-social">
                    <span>
                      <i className="fa fa-phone">{footerData.contact.phone}</i>
                    </span>
                    {footerData.socialLinks.map((social, index) => (
                      <a href={social.url} key={index}>
                        <i className={`fa ${social.icon}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scroll-Top">
            <div className="return-to-top">
              <i className="fa fa-angle-up" id="scroll-top" data-toggle="tooltip" data-placement="top" title="Back to Top" aria-hidden="true" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
