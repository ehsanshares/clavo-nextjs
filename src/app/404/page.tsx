// Clavo template — this page's markup mirrors the original design; styling comes
// from /assets/css/styles.css. Edit copy and image sources directly below.
export default function Page404Page() {
  return (
    <>
      <div className="utility-page-wrap _404">
      <div className="error-page-content">
      <img alt="" className="_404-image reveal" src="/assets/images/404.svg" />
      <h2 className="_404-title reveal">
                Page Not Found
              </h2>
      <a className="primary-button-wrapper inline-block" href="/">
      <div className="primary-button-wrap">
      <div className="primary-button-text">
                    Back To Home
                  </div>
      <div className="primary-button-text">
                    Back To Home
                  </div>
      </div>
      <div className="primary-button-icon-wrap">
      <img alt="" className="primary-button-icon" loading="lazy" src="/assets/images/Primary-Button-Icon.svg" />
      </div>
      </a>
      </div>
      </div>
    </>
  );
}
