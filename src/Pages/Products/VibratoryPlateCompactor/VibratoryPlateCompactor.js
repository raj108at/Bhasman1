import React from "react";
import Topbanner from "../../../components/Topbaner/Topbanner";
import paroBg from "../../../assets/images/topbanners/product.jpg";
import Heading from "../../../helpers/Headings/Heading";
import productImage from "../../../assets/images/vibratory.png";
import "../products.css";

function VibratoryPlateCompactor() { 
  return (
    <div>
      <Topbanner title="Vibratory Plate Compactor" Bg={paroBg} />

      <div className=" lb_product_wrap">
        <Heading style="center" title="Vibratory Plate Compactor" />
        <div className="row">
          <div className="col l12">
            <table className=" centered card z-depth-1">
              <thead className="rj_table_head">
                <tr>
                  <th>Models </th>
                  <th> Unit </th>
                  <th> BMC10 </th>
                  <th> BMC14</th>
                  <th> BMC22</th>
                  <th> BMC35</th>
                </tr>
              </thead>

              <tbody className="rj_table_body">
              <tr>
                  <td></td>
                  <td></td>
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
                  <td>Vibration Frequency</td>
                  <td> vpm </td>
                  <td> 2100 </td>
                  <td> 2100 </td>
                  <td> 2250</td>
                  <td> 2250</td>
                </tr>
                <tr>
                  <td>Oil Flow</td>
                  <td>l/min</td>
                  <td>60~90</td>
                  <td>70~100</td>
                  <td>120~180</td>
                  <td>130~200</td>
                </tr>
                <tr>
                  <td>Working Pressure</td>
                  <td>bar</td>
                  <td>90-140</td>
                  <td>90-140</td>
                  <td>140-180</td>
                  <td>140-180</td>
                </tr>
                <tr>
                  <td>Impact Force</td>
                  <td>KN</td>
                  <td>40</td>
                  <td>80</td>
                  <td>150</td>
                  <td>160</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>Kg </td>
                  <td>320 </td>
                  <td>810</td>
                  <td>1050</td>
                  <td>1220</td>
                </tr>

                <tr>
                  <td>Suitable Crrier</td>
                  <td>ton </td>
                  <td>6~10</td>
                  <td>10~16</td>
                  <td>17~26</td>
                  <td>24~40</td>
                </tr>

                <tr>
                  <td>Plate Size </td>
                  <td>mm</td>
                  <td>850 x 500</td>
                  <td>1100 x 700 </td>
                  <td>1360 x 860 </td>
                  <td>1470 x 960</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VibratoryPlateCompactor;
