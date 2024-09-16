export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="top-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-12">
              <a href="/" className="logo">
                <img src="/assets/img/LOGO.png" alt="" />
              </a>
            </div>
            <div className="col-lg-6 col-md-12 align-center"></div>
            <div className="col-lg-3 col-md-12 align-right">
              <ul className="social-icons">
                <li>
                  <a href="https://x.com/TonDailyN" target="_blank">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="widget">
                <h6 className="widget-title">Live Charts</h6>
                <ul className="chart-list">
                  <li>
                    <a href="#">Bitcoin Price</a>
                  </li>
                  <li>
                    <a href="#">Bitcoin Cash Price</a>
                  </li>
                  <li>
                    <a href="#">Bitcoin Gold Price</a>
                  </li>
                  <li>
                    <a href="#">Ethereum Price</a>
                  </li>
                  <li>
                    <a href="#">Ethereum Classic Price</a>
                  </li>
                  <li>
                    <a href="#">Litecoin Price</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12"></div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <ul className="menu-list">
                <li>
                  <a href="#">Write for Us</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 TON Daily News. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
