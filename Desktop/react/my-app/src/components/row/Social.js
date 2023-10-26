"use strict"
import {icon1, icon2, icon3, icon4, icon5, icon6} from '../../index'
import './social.css'
function Social(){
    return(
        <div id="social-media">
            <div className="container text-center">
                <p>FIND US ON SOCIAL MEDIA</p>
                <div className="social-icons">
                    <a href="#"><img src={icon1} alt="facebook-icon"/></a>
                    <a href="#"><img src={icon2} alt="instagram-icon"/></a>
                    <a href="#"><img src={icon3} alt="twitter-icon"/></a>
                    <a href="#"><img src={icon4} alt="whatsapp-icon"/></a>
                    <a href="#"><img src={icon5} alt="linkedin-icon"/></a>
                    <a href="#"><img src={icon6} alt="snapchat-icon"/></a>
                </div>
            </div>
        </div>

)
}
export default Social