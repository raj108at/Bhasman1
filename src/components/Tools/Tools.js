import React from "react";
import ToolCategory from "../../assets/data/tools";
import "./tool.css";

function Tools() {
  return (
    <div>
      <div className="row">
        {ToolCategory.map((tool) => {
          return (
            <div className="col l3 s6">
              <div class="card z-depth-1 hoverable">
                <div class="card-image">
                  <img
                    className="responsive-img lb_tool_img"
                    src={tool.imgUrl}
                    alt=""
                  />
                  </div>
                  <div class=" black-text lb_tool_title">
                    {tool.text}
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tools;
