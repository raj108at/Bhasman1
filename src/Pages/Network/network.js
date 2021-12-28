import React from "react";
import Topbanner from "../../components/Topbaner/Topbanner";
import paroBg from "../../assets/images/topbanners/Network1.png";

function Network() {
  return (
    <div>
      <Topbanner title="Our Network" Bg={paroBg} />
        <div style={{ paddingTop: 30 }} className="container">
          <div className="row">
            <p>Coming Soon</p>
          </div>
        </div>

    </div>
  );
}

export default Network;
