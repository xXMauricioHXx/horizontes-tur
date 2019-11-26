import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="container">
          <div className="row">
            <div className="col">
              <h6>Endereço:</h6>
              <p>795 Folsom Ave, Suite 600 San Francisco, CA 94107</p>
              <ul>
                <li>
                  <span>Tefone:</span> (51) 88888-8888
                </li>
                <li>
                  <span>Email:</span> teste@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
