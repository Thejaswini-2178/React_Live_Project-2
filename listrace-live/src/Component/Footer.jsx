import React from 'react'

const Footer = () => {
  return (
    <div>
  <footer id="footer" className="footer">
  <div className="container">
    <div className="footer-menu">
      <div className="row">
        <div className="col-sm-3">
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">list<span>race</span></a>
          </div>{/*/.navbar-header*/}
        </div>
        <div className="col-sm-9">
          <ul className="footer-menu-item">
            <li className="scroll"><a href="#works">how it works</a></li>
            <li className="scroll"><a href="#explore">explore</a></li>
            <li className="scroll"><a href="#reviews">review</a></li>
            <li className="scroll"><a href="#blog">blog</a></li>
            <li className="scroll"><a href="#contact">contact</a></li>
            <li className=" scroll"><a href="#contact">my account</a></li>
          </ul>{/*/.nav */}
        </div>
      </div>
    </div>
    <div className="hm-footer-copyright">
      <div className="row">
        <div className="col-sm-5">
          <p>
            ©copyright. designed and developed by <a href="https://www.themesine.com/">themesine</a>
          </p>{/*/p*/}
        </div>
        <div className="col-sm-7">
          <div className="footer-social">
            <span><i className="fa fa-phone"> +1  (222) 777 8888</i></span>
            <a href="#"><i className="fa fa-facebook" /></a>	
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
            <a href="#"><i className="fa fa-google-plus" /></a>
          </div>
        </div>
      </div>
    </div>{/*/.hm-footer-copyright*/}
  </div>{/*/.container*/}
  <div id="scroll-Top">
    <div className="return-to-top">
      <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title data-original-title="Back to Top" aria-hidden="true" />
    </div>
  </div>{/*/.scroll-Top*/}
</footer>

    </div>
  )
}
export default Footer
