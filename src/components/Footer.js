import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

class Footer extends Component {
    render() {
        return (
            <footer className="py-5">
                <div className="footer-flex">
                    <div className="col-md-3">
                       <div className="footer-logo">
                          <Link  to={"/"}><img style={{width : "80px"}} src={logo}/></Link> 
                        </div>
                     </div>
                    <div className="col-md-7">
                         <div className="footer-nav">
                            <ul className="nav nav-list">
                                <li className="nav-list-item nav-membership nav-current"><a href="#">About</a></li>
                                <li className="nav-list-item nav-account-page nav-current"><a href="#">Privacy Policy</a></li>
                                <li className="nav-list-item nav-sign-in"><a href="#">Contact Us</a></li>
                                <li className="nav-list-item nav-sign-up"><a href="#">Advertising</a></li>
                                <li className="nav-list-item nav-404"><a href="#">Help</a></li>
                            </ul>
                            <div className="copyright">
                                <a href="#">Codelab</a> © {new Date().getFullYear()} - All rights reserved.
                            </div>
                         </div>
                    </div>
                    <div className="col-md-2">
                        <div className="social-link">
                            <a href="#" target="_blank" rel="noopener"><svg className="svg-facebook svg-social-media svg-icon svg-icon-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"></path></svg>
                            </a>
                            <a href="#" target="_blank" rel="noopener"><svg className="svg-twitter svg-social-media svg-icon svg-icon-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z"></path></svg></a>
                            <a href="#" target="_blank" rel="noopener"><svg className="svg-rss svg-social-media svg-icon svg-icon-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M119.9 336.1c-30.8 0-55.9 25.1-55.9 55.8 0 30.8 25.1 55.6 55.9 55.6 30.9 0 55.9-24.9 55.9-55.6 0-30.7-25-55.8-55.9-55.8z"></path><path d="M64 192v79.9c48 0 94.1 14.2 128 48.1 33.9 33.9 48 79.9 48 128h80c0-139.9-116-256-256-256z"></path><path d="M64 64v79.9c171 0 303.9 133 303.9 304.1H448C448 236.3 276 64 64 64z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;