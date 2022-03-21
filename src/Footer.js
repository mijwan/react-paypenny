import React from "react";
import "./footer.css";



const Footer = () =>{
    return(
        <>
  <section id="footer">
  <div className="container">
      <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
              <h3>Main Menu</h3>
              <img src="media/paypenny.png" sizes="100x100" alt="logo" />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
          <h3>All Services</h3>
           <img src="media/6.png"className="logo-second" />
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
              <h3>Legal</h3>
             <p>
             Trackon Canada private Limted T/as Paypenny is registered with the Financial Transactions and Reports Analysis Centre (FINTRAC). To view our registration details visit FINTRAC and reference our registration number M20726025
             </p>
          </div>
      </div>
      <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                   <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-facebook-square"></i></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-whatsapp-square"></i></a></li>
                  <li className="list-inline-item"><a href="#" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </ul>
          </div>
          <hr/>
      </div>

      <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
             
              <p className="h6">© paypenny all Rights Reserved.<br/>
               The Brand PayPenny belongs to Trackon Canada Private Limited registered in Alberta,Canada.<a className="text-green ml-2" href="" target="_blank">   </a></p>
          </div>
          <hr/>
      </div>	
  </div>
</section>
        </>
    )
}

export default Footer;