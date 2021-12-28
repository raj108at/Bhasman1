import React from "react";
import Topbanner from "../../../components/Topbaner/Topbanner";
import paroBg from "../../../assets/images/topbanners/product.jpg";
import "../products.css";
import imgOne from "../../../assets/images/HydrolicAttachments/RotatableCrusher.png";
import imgtwo from "../../../assets/images/HydrolicAttachments/RotatableClamshell.png";
import imgthree from "../../../assets/images/HydrolicAttachments/RotatableGrapple.png";
import imgfour from "../../../assets/images/HydrolicAttachments/Ripper.png";

function HydraulicBreaker() {
  return (
    <div>
      <Topbanner title="Hydraulic Attachments" Bg={paroBg} />

      <div className=" lb_product_wrap">
        <div className="container-fluid">
          <div className="row Rj_ha_layout">
            <div className="col l8">
            <h2>Rotary Hydraulic Crusher </h2>
            <p>
            The Crusher is made primary and secondary demolition for reinforced concrete and shearing for scrap Steels. This allows dedicated and precise demolition, minimum noise level and vibrations with 360-degree rotation.
            </p>
            </div>
            <div className="col l4">
              <img src={imgOne} alt=""/>
            </div>
          </div>
          <div className="row Rj_ha_layout">
            <div className="col l8">
            <h2>Rotatable Clamshell</h2>
            <p>
            Clamshell bucket is designed to be attached any excavator. The dual hydraulic cylinders/rams mounted on the outer top side of the bucket provide excellent digging force. </p>
            <p> They are used for unloading coal, iron-ore and clinker from the wagon. Powerful Bucket with two vertical cylinder using hardox steel and less wear in surfaces and wedges. Optional rotating design available.
            </p>
            </div>
            <div className="col l4">
              <img src={imgtwo} alt=""/>
            </div>
          </div>
          <div className="row Rj_ha_layout">
            <div className="col l8">
            <h2>Rotatable Grapple</h2>
            <p>
            Rotatable Grappler can we easily mounted on an excavator. They are designed to handle for scrap, stone, and garbage. High strength and abrasion resistant steel for durability. Minimize assembly clearance for accurate working. Much comfortable space design for easy maintenance.
            </p>
            </div>
            <div className="col l4">
              <img src={imgthree} alt=""/>
            </div>
          </div>
          <div className="row Rj_ha_layout">
            <div className="col l8">
            <h2>Ripper</h2>
            <p>
            Ripper used for trenching and pipeline work, digging soil and irrigation work break hard soil, Frozen Ground, pavement and rock
            </p>
            </div>
            <div className="col l4">
              <img src={imgfour} alt=""/>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default HydraulicBreaker;
