import React from "react";
import "./component.css";


const Component = () =>{
    return(
        <>

<div className="container section">
        <div className="row">
            <div className="col-md-6">
              <p className="topResearch" >With Paypenny You Can Transfer INR(D) from Canada to 125+ banks across India</p><br/>

                <p className="who-para">
                Paypenny gives you nationwide coverage of India. Transfer INR(D) easily to bank accounts at ICICI, SBI, Citi Bank, Axis Bank and many more!
                </p>

                <button className="who-btn"><a href="#"> <i class="fa-solid fa-download"></i> &nbsp; Download Paypenny App</a></button> <br/><br/>
               
                </div>

            <div className="col-md-6">
                <img src="media/3.png" alt="Who we are"/>
            </div>
        </div>
    </div>

        </>
    )
}

export default Component;