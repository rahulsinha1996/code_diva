import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VideoCall } from "../../zoom/VideoCall";
import { Notification } from "../../zoom/Notification";
import { Options } from "../../zoom/Options";
function Video() {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/login");
    }
  }, [userId]);

  const handleClick = () => {};
  return (
    <>
      <button onClick={handleClick}>Logout</button>
      <div>
        <VideoCall />
        <Options />
        <Notification />
      </div>
    </>
  );
}

export default Video;
