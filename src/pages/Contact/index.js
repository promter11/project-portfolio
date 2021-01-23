import React from "react";

import Heading from "../../components/Heading";
import Container from "../../components/Container";
import Info from "../../components/Info";
import Form from "../../components/Form";

import { contactText } from "../../common/jsonText/contactText";

import styles from "./Contact.module.scss";

const Contact = ({ language }) => {
  return (
    <section className={styles.contact}>
      <Container>
        <Heading className={styles.title} level={1}>
          {contactText[language].title}
        </Heading>
        <div className={styles.content}>
          <h2 className={styles.contentTitle}>
            {contactText[language].subtitle}
          </h2>
          <div className={styles.wrapper}>
            <div className={`${styles.block} ${styles.blue}`}>
              <h3 className={styles.blockTitle}>
                {contactText[language].blocks.left.title}
              </h3>
              <Info items={contactText[language].blocks.left.items} />
            </div>
            <div className={styles.block}>
              <h3 className={`${styles.blockTitle} ${styles.black}`}>
                {contactText[language].blocks.right.title}
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
