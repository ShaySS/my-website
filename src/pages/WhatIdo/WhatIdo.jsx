import React from "react";
import styles from "./WhatIdo.module.css";
import Chat from "../../components/Chat/Chat";
import Chat2 from "../../components/Chat2/Chat2";
import { ReactComponent as Avatar } from "../../assets/female_avatar.svg";
import { ReactComponent as Me } from "../../assets/chatMe.svg";
import { copy } from "../../assets/copy";
import { ChatBanner } from "../../components/ChatBanner/ChatBanner";

export default function whatIdo() {
  const data = copy.WhatIdo;

  return (
    <>
      <div className={styles.gridContainer}>
        <div className={styles.banner}>
          <ChatBanner content={data.banner.chatting_with} />
        </div>
        <div className={styles.question}>
          <Avatar className={styles.avatarAlign} />
          <Chat2 TL content={data.ask.what_you_do}></Chat2>
        </div>
        <div className={styles.answer}>
          <Chat2 TR content={data.answer.what_i_do} />
          <Me className={styles.myAvatarAlign} />
        </div>
        <div className={`${styles.answer} ${styles.padded}`}>
          <Chat2 TR content={data.answer.what_i_do_2} />
        </div>
        <div className={styles.question}>
          <Avatar className={styles.avatarAlign} />
          <Chat2 TL content={data.ask.where_do_you_work} />
        </div>
        <div className={styles.answer}>
          <Chat2 TR content={data.answer.where_i_work} />
          <Me className={styles.myAvatarAlign} />
        </div>
        <div className={styles.question}>
          <Avatar className={styles.avatarAlign} />
          <Chat2 TL content={data.ask.anything_else} />
        </div>
        <div className={styles.answer}>
          <Chat2 TR content={data.answer.something_else_to_share} />
          <Me className={styles.myAvatarAlign} />
        </div>
        <div className={`${styles.answer} ${styles.padded}`}>
          <Chat2 TR content={data.answer.something_else_to_share_2} />
        </div>
      </div>
    </>
  );
}
