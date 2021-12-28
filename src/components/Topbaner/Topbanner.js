import React from "react";
// import { Parallax } from "react-parallax";

import "./topbanner.css";

function Topbanner({ Bg, title }) {
  return (
    <div
      style={{ backgroundImage: `url(${Bg})` }}
      className="lb_topbanner_wrap"
    >
      <div className="container">
        <div className="row">
          <div className="col l10">
            <h3 className="lb_topbanner">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbanner;
