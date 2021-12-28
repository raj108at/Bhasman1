import React from "react";
import Topbanner from "../../../components/Topbaner/Topbanner";
import paroBg from "../../../assets/images/topbanners/product.jpg";
import Heading from "../../../helpers/Headings/Heading";
import productImage from "../../../assets/images/Quick Coupler.jpg";
import "../products.css";

function QuickCoupler() {
  return (
    <div>
      <Topbanner title="Quick Coupler" Bg={paroBg} />

      <div className=" lb_product_wrap">
        <Heading style="center" title="Quick Coupler" />
        <div className="row">
          <div className="col l12">
            <table className=" centered card z-depth-1">
              <thead className="rj_table_head">
                <tr>
                  <th>Models </th>
                  <th> Unit </th>
                  <th> BMQ04 </th>
                  <th> BMQ05</th>
                  <th> BMQ06</th>
                  <th> BMQ08</th>
                  <th> BMQ09</th>
                  <th> BMQ10</th>
                </tr>
              </thead>

              <tbody className="rj_table_body">
              <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <img width={100} src={productImage} alt="" />
                  </td>
                  <td>
                    <img width={120} src={productImage} alt="" />
                  </td>
                  <td>
                    <img width={140} src={productImage} alt="" />
                  </td>
                  <td>
                    <img width={160} src={productImage} alt="" />
                  </td>
                  <td>
                    <img width={180} src={productImage} alt="" />
                  </td>
                  <td>
                    <img width={200} src={productImage} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Overall Length(L)</td>
                  <td> mm </td>
                  <td> 550~590 </td>
                  <td> 610~650 </td>
                  <td> 800~860</td>
                  <td> 1000~1050</td>
                  <td> 1080~1150</td>
                  <td> 1150~1300</td>
                </tr>
                <tr>
                  <td>Overall Height(H)</td>
                  <td>mm</td>
                  <td>310</td>
                  <td>322</td>
                  <td>426</td>
                  <td>500</td>
                  <td>540</td>
                  <td>540</td>
                </tr>
                <tr>
                  <td>Overall Width(W)</td>
                  <td> mm </td>
                  <td> 245~320</td>
                  <td> 300~380</td>
                  <td> 360~420</td>
                  <td> 480~560</td>
                  <td> 550~650</td>
                  <td> 600~680</td>
                </tr>
                <tr>
                  <td>Center Distance(C)</td>
                  <td> mm </td>
                  <td>245~300 </td>
                  <td>290~360 </td>
                  <td>350~420 </td>
                  <td>400~510 </td>
                  <td>500~600 </td>
                  <td>580~650 </td>
                </tr>
                <tr>
                  <td>Arm Width(Wi)</td>
                  <td>mm </td>
                  <td>150~230 </td>
                  <td>220~280 </td>
                  <td>250~320 </td>
                  <td> 300~390</td>
                  <td>350~420 </td>
                  <td>400~450 </td>
                </tr>

                <tr>
                  <td>Pin Diameter(D)</td>
                  <td>φ </td>
                  <td>40~50 </td>
                  <td>50~60 </td>
                  <td>60~70 </td>
                  <td>80~90 </td>
                  <td>90~110 </td>
                  <td>100~130 </td>
                </tr>

                <tr>
                  <td></td>
                  <td> mm </td>
                  <td>210 </td>
                  <td> 210</td>
                  <td>260 </td>
                  <td> 295</td>
                  <td>325 </td>
                  <td>355 </td>
                </tr>

                <tr>
                  <td>Pressure </td>
                  <td>Kgf/cm2 </td>
                  <td>40~380 </td>
                  <td>40~380 </td>
                  <td> 40~380</td>
                  <td>40~380 </td>
                  <td>40~380 </td>
                  <td> 40~380</td>
                </tr>

                <tr>
                  <td>Oil Flow </td>
                  <td>L/min </td>
                  <td>10~20 </td>
                  <td>10~20 </td>
                  <td>10~20 </td>
                  <td>10~20 </td>
                  <td>10~20 </td>
                  <td>10~20 </td>
                </tr>

                <tr>
                  <td>Suitable Carrier</td>
                  <td>Ton </td>
                  <td>6~8 </td>
                  <td>8~15 </td>
                  <td>15~18 </td>
                  <td>18~25 </td>
                  <td>25~36 </td>
                  <td>36~45 </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickCoupler;
