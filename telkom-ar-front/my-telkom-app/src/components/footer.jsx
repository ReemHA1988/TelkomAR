import React from 'react';
import '../style/footer.css';

const Footer = () => {

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* col1*/}
          <div className="col">
            <h4>Fiber And Mobile Offers&gt;</h4>
            <ul className="list-unstyled">
              <li>TelkomAR One unlimted Advanced 300Mbps</li>
              <li>Family Rates</li>
              <li>Mobile Rate + Fiber TelkomAR</li>
              <li>Internet Second Residence</li>
              <li>Fiber and 2 mobile lines</li>
            </ul>
          </div>
            {/* col2*/}
          <div className="col">
            <h4>Mobile Rates&gt;</h4>
            <ul className="list-unstyled">
              <li>Mobile Rate Lite</li>
              <li>Unlimted Mobile Rate</li>
              <li>Prepaid Rates</li>
              <li>Roming and international calls</li>
            </ul>
          </div>
          {/* col3*/}
          <div className="col">
            <h4>Phones and Devices&gt;</h4>
            <ul className="list-unstyled">
              <li>Mobile Catalog</li>
              <li>Tablets Catalog</li>
              <li>Smartwatch Catalog</li>
              <li>Smart Speakers Catalog</li>
              <li>5G Mobiles</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TELKOMAR | All right reserved | Terms Of Service | Privacy
          </p>
        </div>
      </div>

    </div>
  )

};

export default Footer;
