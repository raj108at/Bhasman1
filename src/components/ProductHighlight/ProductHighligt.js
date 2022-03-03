import React, { useState } from "react";
import ProductCategory from "../../assets/data/productHighlightData";
import Heading from "../../helpers/Headings/Heading";
import Highlight from "../../helpers/HighLight/Highlight";
import "./productHighligh.css";

function ProductHighligt() {
  //const [category ,setCategory] = useState()
  return (
    <div className="lb_productlist_wrap">
      <Highlight
        style="center
"
        title="FOR EVERY CONSTRUCTION AND DEMOLITION NEEDS"
      />
      <Heading style="center" title="OUR MAIN PRODUCT" />

      {/* <div className="container">
        <div className="row">
          {ProductCategory.map((catergory) => {
            return (
              <div className="col l6 s12">
                <div className="col l12 s12">
                  <h6 className="lb_product_name">{catergory.imgUrl} {catergory.text}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
}

export default ProductHighligt;
