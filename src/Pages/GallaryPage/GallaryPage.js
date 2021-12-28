import React from "react";
import Gallary from "../../components/Gallary/Gallary";
import Topbanner from "../../components/Topbaner/Topbanner";
import paroBg from "../../assets/images/topbanners/gallery.jpg";

function GallaryPage() {
  return (
    <div>
      <Topbanner title="Gallery" Bg={paroBg} />
      <div style={{ paddingTop: 30 }} className="container">
        <div className="row">
        </div>
      </div>
    </div>
  );
}

export default GallaryPage;
