import React from "react";
import Topbanner from "../../../components/Topbaner/Topbanner";
import paroBg from "../../../assets/images/topbanners/product.jpg";
import Heading from "../../../helpers/Headings/Heading";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import productImage from "../../../assets/images/vibro.jpg";
import "../products.css"; 

function VibroRipper() {
  return (
    <div>
      <Topbanner title="Vibro Ripper" Bg={paroBg} />

      {/*<Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>*/}
        
      <div className=" lb_product_wrap">
        <Heading style="center" title="Vibro Ripper" />
        <div className="row">
          <div className="col l12">
            <table className=" centered card z-depth-1">
              <thead className="rj_table_head">
                <tr>
                  <th>Technical Specifications </th>
                  <th> Unit </th>
                  <th> BMVR14</th>
                  <th> BMVR22</th>
                  <th> BMVR35</th>
                  <th> BMVR45</th>
                  <th> BMVR55</th>
                </tr>
              </thead>

              <tbody className="rj_table_body">
              <tr>
                  <td></td>
                  <td></td>
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
                  <td>Suitable Excavator</td>
                  <td> ton </td>
                  <td> 11~17 </td>
                  <td> 18~26 </td>
                  <td> 20~38</td>
                  <td> 35~44</td>
                  <td> 40~60</td>
                </tr>
                <tr>
                  <td>Frequency </td>
                  <td> vpm </td>
                  <td>1600 </td>
                  <td>1500 </td>
                  <td>1400 </td>
                  <td>1200 </td>
                  <td>1100 </td>
                </tr>
                <tr>
                  <td> Weight(Incl. Mounting Cap)</td>
                  <td> Kg </td>
                  <td>1450 </td>
                  <td>2200 </td>
                  <td>3370 </td>
                  <td> 4080</td>
                  <td> 5050</td>
                </tr>
                <tr>
                  <td> Oil Pressure /Setting Pressure </td>
                  <td> bar  </td>
                  <td> 150/180</td>
                  <td> 180/220</td>
                  <td> 200/240</td>
                  <td> 240/280</td>
                  <td> 260/300</td>
                </tr>
                <tr>
                  <td> Max.Operating Oil Flow </td>
                  <td> lpm </td>
                  <td> 130</td>
                  <td> 180</td>
                  <td> 200</td>
                  <td> 220</td>
                  <td> 250</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VibroRipper;
