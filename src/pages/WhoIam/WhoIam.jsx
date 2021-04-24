import React from "react";
import "./WhoIam.css";
import Chat from "../../components/Chat/Chat";
import { ReactComponent as Avatar } from "../../assets/female_avatar.svg";
import { ReactComponent as Me } from "../../assets/chatMe.svg";
import { copy } from "../../assets/copy";

export default function whoIam() {
  const data = copy.WhoIAm;

  return (
    <>
      <div className="grid-container">
        <div className="banner">
          <h2>{data.chatting_with}</h2>
        </div>
          <div className="avatar">
            <Avatar className="avatar1" />
            <Avatar className="avatar2" />
            <Avatar className="avatar3" />
          </div>
          <div className="chatleft">
            <Chat leftSm content={data.ask.what_you_do} className="l1" />
            <Chat leftSm content={data.ask.where_do_you_work} className="l2" />
            <Chat leftLg content={data.ask.anything_else} className="l3" />
          </div>
          <div className="chatright">
            <Chat right content={data.answer.what_i_do} className="r1" />
            <Chat right content={data.answer.what_i_do_2} className="r2" />
            <Chat right content={data.answer.where_i_work} className="r3" />
            <Chat right content={data.answer.something_else_to_share} className="r4" />
            <Chat right content={data.answer.something_else_to_share_2} className="r5" />
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
