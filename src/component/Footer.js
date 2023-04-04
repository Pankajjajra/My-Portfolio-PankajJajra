import React from "react";
var d = new Date();
var currYear = d.getFullYear();

function Footer() {
  return (
    <React.StrictMode>
      <div className="copyright-details">
        <div className="about-social-icon text-center">
          <ul className="about-social">
            <li className="wow fadeIn" data-wow-delay=".8s">
              <a href="https://twitter.com/pankajjajra" target="newtab">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="wow fadeIn" data-wow-delay=".6s">
              <a href="https://www.linkedin.com/in/pankajjajra" target="newtab">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>

            <li className="wow fadeIn" data-wow-delay="1.2s">
              <a href="https://github.com/pankajjajra" target="newtab">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="copyright">
          <h3>&copy; {currYear}, Made with ❤️ by Pankaj Jajra.</h3>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Footer;
