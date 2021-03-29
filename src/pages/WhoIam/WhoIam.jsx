import React from "react";
import "./WhoIam.css";
import Chat from "../../components/Chat/Chat";
import { ReactComponent as Avatar } from "../../assets/female_avatar.svg";
import { ReactComponent as Me } from "../../assets/chatMe.svg";

export default function whoIam() {
  return (
    <>
      <div className="grid-container">
        <div className="pic">picarea</div>
        <div className="text">
          <h2>a conversation with me</h2>
        </div>
        <div className="avatar">
          <Avatar className="avatar1" />
          <Avatar className="avatar2" />
          <Avatar className="avatar3" />
        </div>
        <div className="chatleft">
          <Chat left content="so, what do you do?" className="l1" />
          <Chat left content="where do you work?" className="l2" />
          <Chat
            left
            content="anything else you'd like to share?"
            className="l3"
          />
        </div>
        <div className="chatright">
          <Chat
            right
            content="im an engineer who deploys fullstack applications for the web"
            className="r1"
          />
          <Chat
            right
            content="I’m well versed in React & Node, see my resume for more!"
            className="r2"
          />
          <Chat
            right
            content="i’ve been a developer with Deloitte for a little over a year now working in their digital practice"
            className="r3"
          />
          <Chat
            right
            content="i’m great at learning independently, new, unfamiliar technologies excite me!"
            className="r4"
          />
          <Chat
            right
            content="oh, and i’m a monster at ping-pong. "
            className="r5"
          />
        </div>
        <div className="myAvatar">
          <Me className="myAvatar1" />
          <Me className="myAvatar2" />
          <Me className="myAvatar3" />
        </div>
      </div>
    </>
  );
}
