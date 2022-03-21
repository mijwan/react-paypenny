import React from "react";
import "./component1.css";



const Component1 = () =>{
    return(
        <>

<div className="container section">
        <div className="row">

        <div className="col-md-6">
                <img src="media/5.png" alt="Who we are"/>
            </div>

            <div className="col-md-6">
            
              <h2 className="topResearch">Download Paypenny App from anywhere</h2>

              <div className="items-align">
              <button className="who-btn"><a href="#"> <i class="fa-solid fa-download"></i> &nbsp;<span>Download on the</span><br/>Play Store</a></button> <br/>
                <button className="who-btn1"><a href="#"><i class="fa-brands fa-apple"></i> &nbsp;<span>Get it on</span><br/> Google Play</a></button>
                <br/>
                <span className="font-icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram-square"></i>
                    <i class="fa-brands fa-twitter"></i>
                </span>
        </div>

                </div>

        </div>
    </div>

        </>
    )
}

export default Component1;
