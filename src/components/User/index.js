import React from "react";

import styles from "./User.module.scss";

const User = ({ name, position, avatar }) => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={avatar} alt="Аватар пользователя" />
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.position}>{position}</p>
    </div>
  );
};

export default User;
