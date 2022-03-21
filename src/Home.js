import React from "react";
import "./home.css";


const Home = () => {
    return(
     <>

      <div className="homebackground">
        <div className="homepage">
            <h1 className="heading">BUY SELL OR SEND INR(D) TO INDIA </h1>            
        </div>
    </div>
      

       <div className="container section">
        <div className="row">
            <div className="col-md-6">
              <p className="topResearch" >Hundreds of thousands of NRIs trust Paypenny</p><br/>

                <p className="who-para">
                Get the highest exchange rates guaranteed. Download Paypenny now and experience the difference.
                </p>

                <button className="who-btn"><a href="#"> <i class="fa-solid fa-download"></i> &nbsp; Download Paypenny App</a></button> <br/><br/>
                <button className="who-btn1"><a href="#"><i class="fa-brands fa-apple"></i> &nbsp; Download Paypenny App</a></button>
                </div>

            <div className="col-md-6">
                <img src="media/2.jpg" alt="Who we are"/>
            </div>
        </div>
    </div>

     </>
    );
}

export default Home;