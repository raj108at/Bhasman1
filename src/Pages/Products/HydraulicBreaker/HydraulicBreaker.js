import React from "react";
import Topbanner from "../../../components/Topbaner/Topbanner";
import paroBg from "../../../assets/images/topbanners/product.jpg";
import Heading from "../../../helpers/Headings/Heading";
import premium from "../../../assets/images/premium.jpg";
import economy from "../../../assets/images/economy.jpg";
// import economy1 from "../../../assets/images/economy1.jpg";
import "../products.css";

function HydraulicBreaker() {
  return (
    <div>
      <Topbanner title="Hydraulic Rock Breaker" Bg={paroBg} />

      <div className=" lb_product_wrap">
        <Heading style="center" title="Hydraulic Breaker (Premium)" />
        <div className="row">
          <div className="col l12">
            <table className=" centered card z-depth-1">
              <thead className="rj_table_head">
                <tr>
                  <th>Specifications </th>
                  <th>BM7D</th>
                  <th> BM10D </th>
                  <th> BM14D </th>
                  <th> BM22D</th>
                  <th> BM35D</th>
                  <th> BM45D</th>
                </tr>
              </thead>

              <tbody className="rj_table_body">
              <tr>
                  <td></td>
                  <td>
                    <img width={100} src={premium} alt="" />
                  </td>
                  <td>
                    <img width={120} src={premium} alt="" />
                  </td>
                  <td>
                    <img width={140} src={premium} alt="" />
                  </td>
                  <td>
                    <img width={160} src={premium} alt="" />
                  </td>
                  <td>
                    <img width={180} src={premium} alt="" />
                  </td>
                  <td>
                    <img width={200} src={premium} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Operating Weight (in KGs)</td>
                  <td> 330</td>
                  <td> 510 </td>
                  <td> 820 </td>
                  <td> 1580 </td>
                  <td> 2450</td>
                  <td> 2950</td>
                </tr>
                <tr>
                  <td>Height in MM</td>
                  <td>1600</td>
                  <td>1800</td>
                  <td>2200</td>
                  <td>2600</td>
                  <td>3000</td>
                  <td>3300</td>
                </tr>
                <tr>
                  <td>Impact Rate in BPM</td>
                  <td>600~1100</td>
                  <td>500~950</td>
                  <td>440~700</td>
                  <td>350~500</td>
                  <td>330~450</td>
                  <td>280~360</td>
                </tr>
                <tr>
                  <td>Working Pressure in Bar</td>
                  <td>90~150</td>
                  <td>110~160</td>
                  <td>150~180</td>
                  <td>150~180</td>
                  <td>150~180</td>
                  <td>150~180</td>
                </tr>
                <tr>
                  <td>Working Flow in LPM</td>
                  <td>40~80</td>
                  <td>60~100 </td>
                  <td>90~120 </td>
                  <td>140~180</td>
                  <td>160~210</td>
                  <td>190~230</td>
                </tr>

                <tr>
                  <td>Rod Diameter in MM</td>
                  <td>75 </td>
                  <td>90 </td>
                  <td> 105 </td>
                  <td> 135 </td>
                  <td> 150</td>
                  <td>165</td>
                </tr>

                <tr>
                  <td>Hose Diameter in MM </td>
                  <td>19 </td>
                  <td>19</td>
                  <td> 19</td>
                  <td> 25 </td>
                  <td> 25 </td>
                  <td>32</td>
                </tr>

                <tr>
                  <td>Back Head Gas Pressure in Bar </td>
                  <td>9 </td>
                  <td>10</td>
                  <td> 11</td>
                  <td> 12 </td>
                  <td> 12 </td>
                  <td>12</td>
                </tr>

                <tr>
                  <td>Excavator Range in Tons</td>
                  <td>5~7 </td>
                  <td>6~10</td>
                  <td>10~15</td>
                  <td>18~24 </td>
                  <td>26~38 </td>
                  <td>35~40</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className=" lb_product_wrap">
        <Heading style="center" title="Hydraulic Breaker (Economy)" />
        <div className="row">
          <div className="col l12">
            <table className=" centered card z-depth-1">
              <thead className="rj_table_head">
                <tr>
                  <th>Specifications</th>
                  <th> BM10S</th>
                  <th> BM14S </th>
                  <th> BM22S</th>
                  <th> BM35S</th>
                  <th> BM45S</th>
                </tr>
              </thead>

              <tbody className="rj_table_body">
              <tr>
                  <td></td>
                  <td>
                    <img width={120} src={economy} alt="" />
                  </td>
                  <td>
                    <img width={140} src={economy} alt="" />
                  </td>
                  <td>
                    <img width={160} src={economy} alt="" />
                  </td>
                  <td>
                    <img width={180} src={economy} alt="" />
                  </td>
                  <td>
                    <img width={200} src={economy} alt="" />
                  </td>
                </tr>
                <tr>
                  <td>Operating Weight (in KGs)</td>
                  <td> 400</td>
                  <td> 900 </td>
                  <td> 1690 </td>
                  <td> 2550</td>
                  <td> 2916</td>
                </tr>
                <tr>
                  <td>Impact Rate in BPM</td>
                  <td>400~800</td>
                  <td>350~700</td>
                  <td>400~800</td>
                  <td>350~700</td>
                  <td>250~400</td>
                </tr>
                <tr>
                  <td>Working Pressure in Bar</td>
                  <td>120~150</td>
                  <td>150~170</td>
                  <td>160~180</td>
                  <td>160~180</td>
                  <td>160~180</td>
                </tr>
                <tr>
                  <td>Working Flow in LPM</td>
                  <td>50~90</td>
                  <td>80~110 </td>
                  <td>130~160 </td>
                  <td>150~190</td>
                  <td>200~260</td>
                </tr>

                <tr>
                  <td>Rod Diameter in MM</td>
                  <td>75 </td>
                  <td>100 </td>
                  <td> 135 </td>
                  <td> 150</td>
                  <td>165</td>
                </tr>

                <tr>
                  <td>Hose Diameter in MM </td>
                  <td>19 </td>
                  <td>19</td>
                  <td> 25 </td>
                  <td> 25 </td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>Excavator Range in Tons</td>
                  <td>6~10</td>
                  <td>10~15</td>
                  <td>18~26 </td>
                  <td>27~38 </td>
                  <td>30~45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HydraulicBreaker;
