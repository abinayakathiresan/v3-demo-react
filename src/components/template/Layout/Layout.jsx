import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import RouteConfig from '../RoutesConfig/RoutesConfig';
import './Layout.css';
import Footer from '../Footer/Footer';
function Layout() {
  return (
    <BrowserRouter>
    <div className="layout__wrapper">
      
        <div className="layout__header ">
          <div className="layout__logo">
            <div className="container">
            <h3>Demo App</h3>
            </div>
          </div>
          <div className="layout__nav">
            <div className="container">
              <ul>
                <li>
                  <Link to="/" exact>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/context-api" exact>
                    Context API
                  </Link>
                </li>
                <li>
                  <Link to="/users" exact>
                    Users
                  </Link>
                </li>                
                <li>
                  <Link to="/contact-us" exact>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="layout__content">
          <div className="container">
            <RouteConfig />
          </div>
        </div>
        <div className="layout__footer">
          <Footer />
        </div>
      
    </div>
    </BrowserRouter>
  );
}
export default Layout;
