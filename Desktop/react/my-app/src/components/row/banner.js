'use strict'
import './banner.css'
import {home, wave, play} from '../../index';

function Banner(){
    return(
        <div id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="promo-title">Best Digital Agency</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quis
                            Expedita debitis rem vel, accusantium perferendis eum? Fuga, libero. Illum.
                        </p>
                        <a href="#"><img src={play} alt="play-btn" className="play"/>Watch Tutorials</a>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={home}  alt="home" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <img src={wave} alt="bottom img" className="bottom-img"/>
        </div>

)
}

export default Banner;