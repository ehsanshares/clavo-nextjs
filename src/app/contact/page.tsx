// Clavo template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function ContactPage() {
  return (
    <>
      <section className="section">
      <div className="layout-blockcontainer container container">
      <div className="top-hero-content-wrapper contact reveal">
      <h1 className="hero-title contact">
                    We’re passionate about impactful design
                  </h1>
      <p className="hero-description">
                    We are a full-service design and development agency specializing in creating custom digital experiences.
                  </p>
      <a className="hero-button-wrapper inline-block" href="#Scroll">
      <img alt="" className="scroll-button-icon" loading="lazy" src="/assets/images/Home-Icon-.svg" />
      <div className="hero-button-text">
                      Scroll
                    </div>
      </a>
      </div>
      </div>
      </section>
      <section className="section contact" id="Scroll">
      <div className="layout-blockcontainer container container">
      <div className="contact-content-wrapper">
      <div className="contact-left-content-wrapper reveal">
      <h2 className="contact-title">
                      Let's Connect
                    </h2>
      <p className="contact-description">
                      Have a project in mind? Let’s turn your ideas into stunning realities. Reach out and let’s contact
                    </p>
      <div className="contact-social-icons">
      <a className="footer-link-block-wrapper inline-block" href="https://www.facebook.com">
      <div className="footer-link-text-wrapper">
      <div className="footer-link-text">
                            FACEBOOK
                          </div>
      <div className="footer-link-text">
                            FACEBOOK
                          </div>
      </div>
      <div className="footer-link-icon-wrapper">
      <img alt="" className="footer-arrow-normal-icon" loading="lazy" src="/assets/images/Footer-Arrow-White.svg" />
      <img alt="" className="footer-arrow-black-icon reveal" loading="lazy" src="/assets/images/Footer-Arrow-Black.svg" />
      </div>
      </a>
      <a className="footer-link-block-wrapper inline-block" href="https://www.instagram.com">
      <div className="footer-link-text-wrapper">
      <div className="footer-link-text">
                            INSTAGRAM
                          </div>
      <div className="footer-link-text">
                            INSTAGRAM
                          </div>
      </div>
      <div className="footer-link-icon-wrapper">
      <img alt="" className="footer-arrow-normal-icon" loading="lazy" src="/assets/images/Footer-Arrow-White.svg" />
      <img alt="" className="footer-arrow-black-icon reveal" loading="lazy" src="/assets/images/Footer-Arrow-Black.svg" />
      </div>
      </a>
      <a className="footer-link-block-wrapper inline-block" href="https://www.linkedin.com">
      <div className="footer-link-text-wrapper">
      <div className="footer-link-text">
                            LINKEDIN
                          </div>
      <div className="footer-link-text">
                            LINKEDIN
                          </div>
      </div>
      <div className="footer-link-icon-wrapper">
      <img alt="" className="footer-arrow-normal-icon" loading="lazy" src="/assets/images/Footer-Arrow-White.svg" />
      <img alt="" className="footer-arrow-black-icon reveal" loading="lazy" src="/assets/images/Footer-Arrow-Black.svg" />
      </div>
      </a>
      </div>
      </div>
      <div className="contact-right-box">
      <div className="form-block">
      <form className="contact-form" data-demo-form="1" data-name="Contact Message" id="wf-form-Contact-Message" name="wf-form-Contact-Message">
      <div className="contact-forms-wrapper fast reveal">
      <div className="contact-form-wrap">
      <input className="contact-text-field" data-name="Name" id="name" maxLength={256} name="name" placeholder="First Name" required type="text" />
      </div>
      <div className="contact-form-wrap">
      <input className="contact-text-field" data-name="Last name" id="Last-name" maxLength={256} name="Last-name" placeholder="Last name" required type="text" />
      </div>
      </div>
      <div className="contact-forms-wrapper reveal">
      <div className="contact-form-wrap">
      <input className="contact-text-field" data-name="Phone" id="Phone" maxLength={256} name="Phone" placeholder="Phone" required type="tel" />
      </div>
      <div className="contact-form-wrap">
      <input className="contact-text-field" data-name="Email" id="Email" maxLength={256} name="Email" placeholder="Email" required type="email" />
      </div>
      </div>
      <div className="contact-forms-wrapper _02 reveal">
      <div className="contact-form-wrap">
      <textarea className="contact-text-field message" data-name="Field" id="field" maxLength={5000} name="field" placeholder="Message" required></textarea>
      </div>
      </div>
      <input className="form-submit-button reveal" type="submit" value="Send message" />
      </form>
      <div className="footer-form-success-message" data-form-done="1" hidden>
      <div>
                          Thank you! Your submission has been received!
                        </div>
      </div>
      <div className="footer-form-error-message" data-form-fail="1" hidden>
      <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      <section className="section">
      <div className="layout-blockcontainer container container">
      <div className="section-top-wrapper reveal">
      <h3 className="section-sub-title">
                    Client Say
                  </h3>
      </div>
      <div className="review-content-wrapper">
      <div className="review-content-wrap reveal">
      <div className="tabs">
      <div className="tabs-content-wrapper tab-content">
      <div className="tab-pane tab-pane" data-tab="Tab 1">
      <div className="tab-content-wrapper">
      <img alt="" className="tab-quotation-icon" loading="lazy" src="/assets/images/Tab-Quotation-Icon.svg" />
      <h4 className="tab-comments">
                              Working with this team has been an exceptional experience. They truly understood our vision and delivered results beyond our expectations. Their professionalism creativity and attention to detail made the entire process smooth and enjoyable. Highly recommended
                            </h4>
      <h5 className="tab-client-name">
                              Owen K.
                            </h5>
      <h6 className="tab-client-designation">
                              Head of verse
                            </h6>
      </div>
      </div>
      <div className="tab-pane tab-pane" data-tab="Tab 2">
      <div className="tab-content-wrapper">
      <img alt="" className="tab-quotation-icon" loading="lazy" src="/assets/images/Tab-Quotation-Icon.svg" />
      <h4 className="tab-comments">
                              The professionalism and creativity of this team are unmatched. They listened carefully to our needs and delivered a website that is not only visually appealing but also highly functional. The process was efficient and enjoyable, and the outcome has transformed our business.
                            </h4>
      <h5 className="tab-client-name">
                              Alex Smith
                            </h5>
      <h6 className="tab-client-designation">
                              Head of zeer
                            </h6>
      </div>
      </div>
      <div className="tab-pane tab-pane" data-tab="Tab 3">
      <div className="tab-content-wrapper">
      <img alt="" className="tab-quotation-icon" loading="lazy" src="/assets/images/Tab-Quotation-Icon.svg" />
      <h4 className="tab-comments">
                              Working with this team has been nothing short of amazing. From the first consultation to the final launch, they demonstrated exceptional creativity and attention to detail. Our website not only looks fantastic but also functions flawlessly. We’re beyond thrilled with their work.
                            </h4>
      <h5 className="tab-client-name">
                              Jhon.L
                            </h5>
      <h6 className="tab-client-designation">
                              Head of elio
                            </h6>
      </div>
      </div>
      <div className="tab-pane tab-pane" data-tab="Tab 4">
      <div className="tab-content-wrapper">
      <img alt="" className="tab-quotation-icon" loading="lazy" src="/assets/images/Tab-Quotation-Icon.svg" />
      <h4 className="tab-comments">
                              We were blown away by the quality of work and dedication this team showed throughout the project. They took our ideas and transformed them into a beautiful, user-friendly website that truly captures our brand’s essence. Their professionalism and passion are unmatched.
                            </h4>
      <h5 className="tab-client-name">
                              Karly.ai
                            </h5>
      <h6 className="tab-client-designation">
                              Head of exon
                            </h6>
      </div>
      </div>
      <div className="tab-pane tab-pane" data-tab="Tab 5">
      <div className="tab-content-wrapper">
      <img alt="" className="tab-quotation-icon" loading="lazy" src="/assets/images/Tab-Quotation-Icon.svg" />
      <h4 className="tab-comments">
                              Choosing this team was the best decision we made for our business. They crafted a website that not only meets but surpasses our needs. Their creativity, technical skills, and dedication to client satisfaction are unparalleled. We’re incredibly happy with the outcome.
                            </h4>
      <h5 className="tab-client-name">
                              Jelly
                            </h5>
      <h6 className="tab-client-designation">
                              Head of relax.
                            </h6>
      </div>
      </div>
      </div>
      <div className="tabs-menu-wrapper tab-menu">
      <a className="tab-button inline-block tab-link" data-tab="Tab 1">
      <img alt="" className="tab-image" loading="lazy" src="/assets/images/Company-Logo.svg" />
      </a>
      <a className="tab-button inline-block tab-link" data-tab="Tab 2">
      <img alt="" className="tab-image" loading="lazy" src="/assets/images/Company-Logo-2.svg" />
      </a>
      <a className="tab-button inline-block tab-link" data-tab="Tab 3">
      <img alt="" className="tab-image" loading="lazy" src="/assets/images/Company-Logo-3.svg" />
      </a>
      <a className="tab-button inline-block tab-link" data-tab="Tab 4">
      <img alt="" className="tab-image" loading="lazy" src="/assets/images/Company-Logo-4.svg" />
      </a>
      <a className="tab-button inline-block tab-link" data-tab="Tab 5">
      <img alt="" className="tab-image" loading="lazy" src="/assets/images/Company-Logo-5.svg" />
      </a>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
    </>
  );
}
