import React from "react";

import styles from "./Form.module.scss";

const Form = () => {
  return (
    <form className={styles.form}>
      <label className={styles.label}>
        <span className={styles.text}>Name</span>
        <input className={styles.input} type="text" maxLength={40} />
      </label>
      <label className={styles.label}>
        <span className={styles.text}>E-Mail</span>
        <input className={styles.input} type="text" maxLength={40} />
      </label>
      <label className={`${styles.label} ${styles.full}`}>
        <span className={styles.text}>Message</span>
        <textarea className={styles.textarea} maxLength={200} />
      </label>
      <button className={styles.submit}>Submit</button>
    </form>
  );
};

export default Form;
