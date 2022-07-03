import React from "react";
import "./Sidebar.css";
import Channel from "./Channel";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>Followed Channels</h5>
        <Channel
          avatar="https://avatars.githubusercontent.com/u/60327839?s=280&v=4"
          name="cleverprogrammer"
          followers="816K"
        />
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/b1763715-7b44-4d46-8d9d-f3ca6d17bdcb-profile_image-70x70.png"
          name="PiNNyBoy"
          followers="200K"
        />
        <h5>Recommended Channels</h5>
        <Channel
          avatar="https://media-exp2.licdn.com/dms/image/C4D03AQGhOXbe5O4kDA/profile-displayphoto-shrink_400_400/0/1565357510049?e=1661990400&v=beta&t=zNFizsueiKsPv-M1hEmb_fmyku2iqTQzi_Jdrs4z2dY"
          name="@davidrakosi"
          followers="1352"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
