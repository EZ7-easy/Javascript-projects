"use strict"
import './footer.css'
import {wave2, logo} from '../../index'
function Footer(){
    return(
        <div id="footer">
            <img src={wave2} alt="wave2" className="footer-img"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-box">
                            <img src={logo} alt="demo-logo"/>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis
                                    Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                                </p>
                        </div>
                        <div className="col-md-4 footer-info">
                            <p>CONTACT US</p>
                            <p><i className="fa-solid fa-location-dot"></i>TexnoPark Building, Navoiy</p>
                            <p><i className="fa-solid fa-phone"></i>+998 123456789</p>
                            <p><i className="fa-solid fa-envelope"></i>infotexno@mail.com</p>
                        </div>
                        <div className="col-md-4 footer-box">
                            <p>SUUBSCRIBE NEWSLETTER</p>
                            <input type="email" className="form-control" placeholder="Your Email"/>
                                <button type="button" className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                    <hr/>
                        <p className="copyright text-center">Website created by Bobur</p>
                </div>
        </div>
    )
}
export default Footer