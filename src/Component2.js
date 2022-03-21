import React from "react";
import "./Component2.css";



const Component2 = () =>{
    return(
        <>

<div className="container section">
        <div className="faq-header"> Frequently Asked Questions </div>
<hr/>
        <div className="row">
        <div className="col-md-6 component-part">
               <h2 className="topResearch">How can I top up my Paypenny account?</h2>
            <p>You can top up your paypenny account through a bank wire transfer or Interac E- transfer. <br/><br/><br/></p>
            </div>

            <div className="col-md-6 component-part">
              <h2 className="topResearch">Do I need to verify my account?</h2>
              <p>
              As a fully regulated financial services business, we are required to verify the identity of all our customers. Where possible we attempt to speed up the process through electronic checks. Where this isn’t possible, we require proof of identification.
                </p>               
            </div>
        </div>
    </div>

        </>
    )
}

export default Component2;
