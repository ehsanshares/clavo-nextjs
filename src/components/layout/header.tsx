// Header — Clavo's original navbar + secondary-navbar markup, reproduced verbatim so
// assets/css/styles.css styles it identically. ClavoScripts drives the full-screen
// nav overlay, the Pages mega-dropdown and the cart button.
export function Header() {
  return (
    <>
      <div className="navbar" role="banner">
      <div className="layout-blockcontainer container container">
      <div className="navbar-wrapper-2">
      <a aria-current="page" className="brand-logo" href="/">
      <img alt="" className="brand-image" src="/assets/images/Logo.svg" />
      </a>
      <div className="main-menu-nav-item">
      <img alt="" className="main-navbar-dot-icon" loading="lazy" src="/assets/images/Rectangle-36.svg" />
      <div className="main-navbar-menu-wrapper">
      <div className="main-navbar-menu-title">
                        Design Agency
                      </div>
      <div className="main-navbar-menu-title">
                        Design Agency
                      </div>
      </div>
      </div>
      <div className="main-menu-nav-item">
      <img alt="" className="main-navbar-dot-icon" loading="lazy" src="/assets/images/Rectangle-36.svg" />
      <div className="main-navbar-menu-wrapper">
      <div className="main-navbar-menu-title">
                        Ba, London
                      </div>
      <div className="main-navbar-menu-title">
                        Ba, London
                      </div>
      </div>
      </div>
      <div className="main-menu-nav-item">
      <img alt="" className="main-navbar-dot-icon" loading="lazy" src="/assets/images/Rectangle-36.svg" />
      <a aria-haspopup="dialog" aria-label="Open cart" className="cart-button-2" data-cart-open="" role="button">
      <div className="text-block">
                        Cart(
                      </div>
      <div className="cart-quantity-2" data-cart-count="">
                        0
                      </div>
      <div className="text-block">
                        )
                      </div>
      </a>
      </div>
      <nav className="nav-menu-2" role="navigation">
      <div className="navbar-wrapper-2 _02">
      <a className="brand-logo" href="/">
      <img alt="Site Image" className="brand-image" loading="lazy" src="/assets/images/Footer-Logo.svg" />
      </a>
      <div className="main-menu-nav-item">
      <img alt="" className="main-navbar-dot-icon" loading="lazy" src="/assets/images/Rectangle-36.svg" />
      <div className="main-navbar-menu-wrapper">
      <div className="main-navbar-menu-title">
                            Design Agency
                          </div>
      <div className="main-navbar-menu-title">
                            Design Agency
                          </div>
      </div>
      </div>
      <div className="main-menu-nav-item">
      <img alt="" className="main-navbar-dot-icon" loading="lazy" src="/assets/images/Rectangle-36.svg" />
      <div className="main-navbar-menu-wrapper">
      <div className="main-navbar-menu-title">
                            Ba, London
                          </div>
      <div className="main-navbar-menu-title">
                            Ba, London
                          </div>
      </div>
      </div>
      <div className="menu-button-2">
      <div className="div-block">
      <img alt="" className="main-navbar-dot-icon" loading="lazy" src="/assets/images/Rectangle-36.svg" />
      <div className="main-navbar-menu-wrapper">
      <div className="main-navbar-menu-title">
                              Close
                            </div>
      <div className="main-navbar-menu-title">
                              Close
                            </div>
      </div>
      </div>
      </div>
      </div>
      <div className="main-nav-menu-wrap">
      <div className="nav-menu-wrap">
      <h6 className="page-top-title">
                          Pages
                        </h6>
      <div className="main-nev-menu-item-wrap">
      <a className="nav-link" href="/about">
                            About
                          </a>
      <a className="nav-link" href="/service">
                            Service
                          </a>
      <a className="nav-link" href="/works">
                            Works
                          </a>
      <a className="nav-link" href="/blog">
                            Blog
                          </a>
      <a className="nav-link" href="/pricing">
                            Pricing
                          </a>
      <a className="nav-link" href="/contact">
                            Contact us
                          </a>
      </div>
      <div className="navbar-link-items">
      <a className="footer-link-block-wrapper v1 inline-block" href="https://www.facebook.com">
      <div className="footer-link-text-wrapper">
      <div className="footer-link-text">
                                Instagram
                              </div>
      <div className="footer-link-text">
                                Instagram
                              </div>
      </div>
      <div className="footer-link-icon-wrapper">
      <img alt="" className="footer-arrow-normal-icon" loading="lazy" src="/assets/images/Footer-Arrow-White.svg" />
      <img alt="" className="footer-arrow-black-icon" loading="lazy" src="/assets/images/Footer-Arrow-Black.svg" />
      </div>
      </a>
      <a className="footer-link-block-wrapper v1 inline-block" href="https://www.facebook.com">
      <div className="footer-link-text-wrapper">
      <div className="footer-link-text">
                                LinkedIn
                              </div>
      <div className="footer-link-text">
                                LinkedIn
                              </div>
      </div>
      <div className="footer-link-icon-wrapper">
      <img alt="" className="footer-arrow-normal-icon" loading="lazy" src="/assets/images/Footer-Arrow-White.svg" />
      <img alt="" className="footer-arrow-black-icon" loading="lazy" src="/assets/images/Footer-Arrow-Black.svg" />
      </div>
      </a>
      <a className="footer-link-block-wrapper v1 inline-block" href="https://www.facebook.com">
      <div className="footer-link-text-wrapper">
      <div className="footer-link-text">
                                Dribbble
                              </div>
      <div className="footer-link-text">
                                Dribbble
                              </div>
      </div>
      <div className="footer-link-icon-wrapper">
      <img alt="" className="footer-arrow-normal-icon" loading="lazy" src="/assets/images/Footer-Arrow-White.svg" />
      <img alt="" className="footer-arrow-black-icon" loading="lazy" src="/assets/images/Footer-Arrow-Black.svg" />
      </div>
      </a>
      </div>
      </div>
      <div className="nav-menu-wrap">
      <img alt="" className="navbar-image" loading="lazy" sizes="100vw" src="/assets/images/W-02_1.webp" srcSet="/assets/images/W-02_1.webp 720w" />
      </div>
      </div>
      </nav>
      <div className="menu-button-2">
      <div className="div-block">
      <img alt="" className="main-navbar-dot-icon" loading="lazy" src="/assets/images/Rectangle-36.svg" />
      <div className="main-navbar-menu-wrapper">
      <div className="main-navbar-menu-title">
                          Menu
                        </div>
      <div className="main-navbar-menu-title">
                          Menu
                        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="secondary-navbar" role="banner">
      <div className="auto-container container">
      <div className="navbar-content">
      <a aria-current="page" className="navbar-logo-wrapper" href="/">
      <img alt="" className="navbar-logo" loading="lazy" src="/assets/images/Logo.svg" />
      </a>
      <nav className="nave-menu light-mood" role="navigation">
      <div className="nav-menu-content">
      <a aria-current="page" className="nav-link-two" href="/">
                        Home
                      </a>
      <a className="nav-link-two" href="/about">
                        About
                      </a>
      <a className="nav-link-two" href="/service">
                        Services
                      </a>
      <a className="nav-link-two" href="/blog">
                        Blog
                      </a>
      <div className="menu-dropdown-wrapper nav-dropdown">
      <div className="drapdown-toggle">
      <div className="dropdown-toggle-text-block">
                            Pages
                          </div>
      </div>
      <nav className="dropdown-colum-wrapper">
      <div className="dropdown-main dark">
      <div className="nav-menu-main-wrap">
      <div className="nav-all-menu-wrap">
      <div className="nav-inner-flex-wrap">
      <div className="nav-dropdown-left-wrap-13">
      <div className="nav-link-wrapper">
      <div className="description-medium primary-color">
                                        Main Pages
                                      </div>
      <div className="navbar-menu-wrap">
      <a aria-current="page" className="navbar-menu" href="/">
                                          Home
                                        </a>
      <a className="navbar-menu" href="/about">
                                          About
                                        </a>
      <a className="navbar-menu" href="/works">
                                          Works
                                        </a>
      <a className="navbar-menu" href="/service">
                                          Services
                                        </a>
      <a className="navbar-menu" href="/blog">
                                          Blog
                                        </a>
      <a className="navbar-menu" href="/pricing">
                                          Pricing
                                        </a>
      </div>
      </div>
      <div className="nav-link-wrapper second">
      <div className="description-medium primary-color">
                                        Inner Page
                                      </div>
      <div className="navbar-menu-wrap">
      <a className="navbar-menu" href="/contact">
                                          Contact
                                        </a>
      <a className="navbar-menu" href="/work/anox">
                                          Project Single
                                        </a>
      <a className="navbar-menu" href="/service/marketing-design">
                                          Services Single
                                        </a>
      <a className="navbar-menu" href="/blog/beyond-aesthetics-designing-for-functionality-and-user-experience">
                                          Blog Single
                                        </a>
      <a className="navbar-menu" href="/product/basic-plan">
                                          Pricing Details
                                        </a>
      </div>
      </div>
      <div className="nav-link-wrapper _3rd">
      <div className="description-medium primary-color">
                                        Utility Page
                                      </div>
      <div className="navbar-menu-wrap">
      <a className="navbar-menu" href="/style-guide">
                                          Style Guide
                                        </a>
      <a className="navbar-menu" href="/changelog">
                                          Change Log
                                        </a>
      <a className="navbar-menu" href="/license">
                                          License
                                        </a>
      <a className="navbar-menu" href="/401">
                                          Password
                                        </a>
      <a className="navbar-menu" href="/404">
                                          404
                                        </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </nav>
      </div>
      <div className="primary-button-wrapper-two mobile">
      <a className="primary-button-wrapper inline-block" href="/contact">
      <div className="primary-button-wrap">
      <div className="primary-button-text">
                              Let’s Contact
                            </div>
      <div className="primary-button-text">
                              Let’s Contact
                            </div>
      </div>
      <div className="primary-button-icon-wrap">
      <img alt="" className="primary-button-icon" loading="lazy" src="/assets/images/Primary-Button-Icon.svg" />
      </div>
      </a>
      </div>
      </div>
      <div className="mobile-nav-wrap">
      <div className="mobile-page-box">
      <div className="description-medium primary-color">
                          Pages
                        </div>
      </div>
      <div className="navbar-dropdown-left-wrap">
      <div className="nav-link-wrapper">
      <div className="navbar-menu-wrap">
      <a aria-current="page" className="navbar-menu" href="/">
                              Home
                            </a>
      <a className="navbar-menu" href="/about">
                              About
                            </a>
      <a className="navbar-menu" href="/works">
                              Works
                            </a>
      <a className="navbar-menu" href="/service">
                              Services
                            </a>
      <a className="navbar-menu" href="/blog">
                              Blog
                            </a>
      <a className="navbar-menu" href="/pricing">
                              Pricing
                            </a>
      </div>
      </div>
      <div className="nav-link-wrapper second">
      <div className="navbar-menu-wrap">
      <a className="navbar-menu" href="/contact">
                              Contact
                            </a>
      <a className="navbar-menu" href="/work/anox">
                              Project Single
                            </a>
      <a className="navbar-menu" href="/service/marketing-design">
                              Services Single
                            </a>
      <a className="navbar-menu" href="/blog/beyond-aesthetics-designing-for-functionality-and-user-experience">
                              Blog Single
                            </a>
      <a className="navbar-menu" href="/product/basic-plan">
                              Pricing Details
                            </a>
      </div>
      </div>
      <div className="nav-link-wrapper _3rd">
      <div className="description-medium primary-color">
                            Utility Page
                          </div>
      <div className="navbar-menu-wrap">
      <a className="navbar-menu" href="/style-guide">
                              Style Guide
                            </a>
      <a className="navbar-menu" href="/changelog">
                              Change Log
                            </a>
      <a className="navbar-menu" href="/license">
                              License
                            </a>
      <a className="navbar-menu" href="/401">
                              Password
                            </a>
      <a className="navbar-menu" href="/404">
                              404
                            </a>
      </div>
      </div>
      </div>
      </div>
      </nav>
      <div className="navbar-right-content">
      <div className="primary-button-wrapper-two desktop">
      <div className="nav-right-btn-wrap">
      <a aria-haspopup="dialog" aria-label="Open cart" className="cart-button inline-block" data-cart-open="" role="button">
      <div className="cart-quantity" data-cart-count="">
                            0
                          </div>
      <img alt="" loading="lazy" src="/assets/images/Cart-Icon.svg" />
      </a>
      <div className="menu-button">
      <div aria-hidden="true" className="menu-icon">
      <svg className="menu-icon-open" fill="none" height="26" viewBox="0 0 26 26" width="26">
      <path d="M4 9h18M4 17h18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8">
      </path>
      </svg>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
