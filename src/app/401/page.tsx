// Clavo template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function Page401Page() {
  return (
    <>
      <div className="utility-page-wrap reveal">
      <div className="utility-page-content">
      <div className="password-top-title-wrapper">
      <div className="password-top-title">
                  Password Protected
                </div>
      <div className="password-description">
                  At Clavo, we understand the importance of protecting your personal data and privacy.
                </div>
      </div>
      <form className="utility-page-form" data-demo-form="1" data-name="Email Form" id="email-form-password" name="email-form">
      <img alt="" className="lock-icon" src="/assets/images/lock-01.svg" />
      <h2 className="password-title">
                  Locked Content
                </h2>
      <label className="password-main-description" htmlFor="pass">
                  This page is password protected. If you are the website admin, or have access to this page, please type your password below
                </label>
      <div className="password-content-wrap">
      <input autoFocus className="password-text-field" data-name="field" id="pass" maxLength={256} name="pass" placeholder="Enter your password" type="password" />
      <input className="password-submit-button" type="submit" value="Submit Now" />
      </div>
      <div data-form-fail="1" hidden>
      <div>
                    Incorrect password. Please try again.
                  </div>
      </div>
      <div className="embed">
      <input name="path" type="hidden" value="&lt;%WF_FORM_VALUE_PATH%&gt;" />
      <input name="page" type="hidden" value="&lt;%WF_FORM_VALUE_PAGE%&gt;" />
      </div>
      <div className="embed">
      </div>
      </form>
      </div>
      </div>
    </>
  );
}
