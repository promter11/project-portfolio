import React from "react";
import { string } from "prop-types";

import Heading from "../Heading";

import styles from "./User.module.scss";

const User = ({ name, position, avatar }) => {
  return (
    <div className={styles.user}>
      <img className={styles.avatar} src={avatar} alt="Avatar" />
      <Heading className={styles.title} level={3}>
        {name}
      </Heading>
      <p className={styles.position}>{position}</p>
    </div>
  );
};

User.propTypes = {
  name: string.isRequired,
  position: string.isRequired,
  avatar: string.isRequired,
};

export default User;
