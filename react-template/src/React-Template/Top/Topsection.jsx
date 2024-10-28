import React, { Component } from 'react';
import topsectionData from './topsectionData.json'; 

class Topsection extends Component {
    render() {
        const { headerArea } = topsectionData.topArea;
        const { navbar } = headerArea;
        const { container } = navbar;
        
        return (
            <section className="top-area">
                <div className="header-area">
                    {/* Start Navigation */}
                    <nav
                        className={navbar.className}
                        data-minus-value-desktop={navbar.attributes['data-minus-value-desktop']}
                        data-minus-value-mobile={navbar.attributes['data-minus-value-mobile']}
                        data-speed={navbar.attributes['data-speed']}
                    >
                        <div className="container">
                            {/* Start Header Navigation */}
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    className={container.navbarHeader.navbarToggle.className}
                                    data-toggle={container.navbarHeader.navbarToggle.attributes['data-toggle']}
                                    data-target={container.navbarHeader.navbarToggle.attributes['data-target']}
                                >
                                    <i className={container.navbarHeader.navbarToggle.iconClassName} />
                                </button>
                                <a className="navbar-brand" href={container.navbarHeader.brand.href}>
                                    {container.navbarHeader.brand.text}
                                    <span>{container.navbarHeader.brand.spanText}</span>
                                </a>
                            </div>{/*/.navbar-header*/}
                            {/* End Header Navigation */}
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className={container.navbarCollapse.className} id={container.navbarCollapse.id}>
                                <ul
                                    className="nav navbar-nav navbar-right"
                                    data-in="fadeInDown"
                                    data-out="fadeOutUp"
                                >
                                    {container.navbarCollapse.navItems.map((item, index) => (
                                        <li key={index} className={item.className}>
                                            <a href={item.href}>{item.text}</a>
                                        </li>
                                    ))}
                                </ul>{/*/.nav */}
                            </div>{/* /.navbar-collapse */}
                        </div>{/*/.container*/}
                    </nav>{/*/nav*/}
                    {/* End Navigation */}
                </div>{/*/.header-area*/}
                <div className="clearfix" />
            </section>
        );
    }
}

export default Topsection;
