import React from "react";

import Container from "../../components/Container";
import Info from "../../components/Info";
import Form from "../../components/Form";

import Pin from "../../assets/icons/contact/pin.svg";
import Phone from "../../assets/icons/contact/phone-call.svg";
import Email from "../../assets/icons/contact/email.svg";
import styles from "./Contact.module.scss";

const items = [
  {
    id: 0,
    image: Pin,
    value: "Volgograd, Russia",
  },
  {
    id: 1,
    image: Phone,
    value: "+7 (937) 098-05-94",
    path: "tel:79370980594",
  },
  {
    id: 2,
    image: Email,
    value: "promter11@gmail.com",
    path: "mailto:promter11@gmail.com",
  },
];

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Container>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.content}>
          <h2 className={styles.contentTitle}>Let's keep in touch</h2>
          <div className={styles.wrapper}>
            <div className={`${styles.block} ${styles.blue}`}>
              <h3 className={styles.blockTitle}>Contacts</h3>
              <Info items={items} />
            </div>
            <div className={styles.block}>
              <h3 className={`${styles.blockTitle} ${styles.black}`}>
                Send me a message
              </h3>
              <Form />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
