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
                <a class="grey-text text-lighten-3" href={tool.Url}>
                  <img
                    className="responsive-img lb_tool_img"
                    src={tool.imgUrl}
                    alt=""
                  /> </a>
                  </div>
                  <div class=" black-text lb_tool_title">
                    <a class="black-text lb_tool_title" href={tool.Url}> 
                    {tool.text}
                    </a>
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
