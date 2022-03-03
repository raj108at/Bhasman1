import React from "react";
import Topbanner from "../../../components/Topbaner/Topbanner";
import paroBg from "../../../assets/images/topbanners/product.jpg";
import Heading from "../../../helpers/Headings/Heading";
import premium from "../../../assets/images/drumcutter.jpg";
import economy from "../../../assets/images/drumcutter.jpg";
// import economy1 from "../../../assets/images/economy1.jpg";
import "../products.css";

function drumcutter() {
  return (
    <div>
      <Topbanner title="Pile Driver" Bg={paroBg} />

      <div className=" lb_product_wrap">
        <Heading style="center" title="Pile Driver" />
        <div className="row">
          <div className="col l12">
            {/* <table className=" centered card z-depth-1">
              <thead className="rj_table_head">
                <tr>
                  <th>Specifications</th>
                  <th> BMDC-5LD</th>
                  <th> BMDC-10LD </th>
                  <th> BMDC-20LD</th>
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
                </tr>
                <tr>
                  <td>Maximum pressure/Kw</td>
                  <td> 25</td>
                  <td> 50 </td>
                  <td> 80 </td>
                </tr>
                <tr>
                  <td>Oil/LPM</td>
                  <td>85</td>
                  <td>210</td>
                  <td>265</td>
                </tr>
                <tr>
                  <td>Flow range/LPM</td>
                  <td>40-70</td>
                  <td>100-150</td>
                  <td>110-170</td>
                </tr>
                <tr>
                  <td>Greatest pressure/Bar</td>
                  <td>205</td>
                  <td>310</td>
                  <td>380</td>
                </tr>
                <tr>
                  <td>Output torque/Nm</td>
                  <td>2200</td>
                  <td>10272 </td>
                  <td>14272 </td>
                </tr>

                <tr>
                  <td>Output shaft speed/RPM</td>
                  <td>95 </td>
                  <td>80 </td>
                  <td> 65 </td>
                </tr>

                <tr>
                  <td>Weight/Kg </td>
                  <td>210 </td>
                  <td>750</td>
                  <td> 750</td>
                </tr>

                <tr>
                  <td>Number of cutter heads</td>
                  <td>28 </td>
                  <td>36</td>
                  <td> 42</td>
                </tr>

                <tr>
                  <td>Carrier/T</td>
                  <td>2.5-6 </td>
                  <td>8-15</td>
                  <td>18-30</td>
                </tr>
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default drumcutter;
