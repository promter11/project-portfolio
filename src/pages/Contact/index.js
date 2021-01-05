import React from "react";

import Pin from "../../assets/icons/contact/pin.svg";
import Phone from "../../assets/icons/contact/phone-call.svg";
import Email from "../../assets/icons/contact/email.svg";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.content}>
        <h2 className={styles.contentTitle}>Let's keep in touch</h2>
        <div className={styles.wrapper}>
          <div className={`${styles.block} ${styles.blue}`}>
            <h3 className={styles.blockTitle}>Contacts</h3>
            <div className={styles.data}>
              <img className={styles.dataImage} src={Pin} alt="Pin" />
              <span className={styles.dataText}>Volgograd, Russia</span>
            </div>
            <div className={styles.data}>
              <img className={styles.dataImage} src={Phone} alt="Phone" />
              <span className={styles.dataText}>+7 (937) 098-05-94</span>
            </div>
            <div className={styles.data}>
              <img className={styles.dataImage} src={Email} alt="Email" />
              <span className={styles.dataText}>promter11@gmail.com</span>
            </div>
          </div>
          <div className={styles.block}>
            <h2 className={`${styles.blockTitle} ${styles.black}`}>
              Send me a message
            </h2>
            <form className={styles.form}>
              <label className={styles.formLabel}>
                <span className={styles.formText}>Name *</span>
                <input
                  className={styles.formInput}
                  type="text"
                  maxLength={40}
                />
              </label>
              <label className={styles.formLabel}>
                <span className={styles.formText}>E-Mail *</span>
                <input
                  className={styles.formInput}
                  type="text"
                  maxLength={40}
                />
              </label>
              <label className={styles.formLabel}>
                <span className={styles.formText}>Message *</span>
                <textarea className={styles.formTextarea} maxLength={200} />
              </label>
              <button className={styles.formSubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
