import React from "react";
import "./blockQuote.css";

function BlockQuote() {
  return (
    <div className="lb_blockquate_wrap">
      <div className="lb_blockquate_container ">
        <blockquote>
          <div className="row">
            <div className="col l9 s12">
              <h5>
              There will always be Rocks in the Road ahead of us, We Break then to make our own path.
              </h5>
            </div>

            <div className="col l3 s12">
              <button className="btn btn-large red accent-4 waves-effect waves-light">
                contact Us
              </button>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  );
}

export default BlockQuote;
