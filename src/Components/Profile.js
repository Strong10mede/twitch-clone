import "./Profile.css";

import React from "react";
import RecentItem from "./RecentItem";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://avatars.githubusercontent.com/u/60327839?s=280&v=4"
          alt="profile logo"
        />
        <div className="profile__topLeftDetails">
          <h1>cleverprogrammer</h1>
          <h3>826K</h3>
        </div>
      </div>
      <div className="profile__topRight">
        <i className="fas fa-heart graybg"></i>
        <i className="fas fa-bell graybg"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i class="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent Broadcast</h2>
        <div className="profile__recentItems">
          <RecentItem
            url={"https://www.youtube.com/embed/ktjafK4SgWM"}
            title="Learn the MERN Stack - Full Tutorial for Beginners"
          />
          <RecentItem
            url={"https://www.youtube.com/embed/ktjafK4SgWM"}
            title="Learn the MERN Stack - Full Tutorial for Beginners"
          />
          <RecentItem
            url={"https://www.youtube.com/embed/ktjafK4SgWM"}
            title="Learn the MERN Stack - Full Tutorial for Beginners"
          />
          <RecentItem
            url={"https://www.youtube.com/embed/ktjafK4SgWM"}
            title="Learn the MERN Stack - Full Tutorial for Beginners"
          />
        </div>
        <div className="profile__categories">
          <h2>cleverprogrammer 's recently streamed Categories</h2>
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285x380.jpg"
            alt=""
          />
          <h3>Science & Technology</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
