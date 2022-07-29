import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VideoCall } from "../../zoom/VideoCall";
import { Notification } from "../../zoom/Notification";
import { Options } from "../../zoom/Options";
import styles from "./Video.module.css"
function Video() {
  const userId = JSON.parse(localStorage.getItem("userId"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/signin");
    }
  }, [userId]);


  return (
    <>
      <div id= {styles.contain}>
        <VideoCall />
        <Options />
        <Notification />
      </div>
    </>
  );
}

export default Video;
