import React from "react";

import Heading from "../../components/Heading";
import Container from "../../components/Container";
import Info from "../../components/Info";
import ContactForm from "../../components/ContactForm";

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
          <Heading className={styles.contentTitle} level={2}>
            {contactText[language].subtitle}
          </Heading>
          <div className={styles.wrapper}>
            <div className={`${styles.block} ${styles.blue}`}>
              <Heading className={styles.blockTitle} level={3}>
                {contactText[language].blocks.left.title}
              </Heading>
              <Info items={contactText[language].blocks.left.items} />
            </div>
            <div className={styles.block}>
              <Heading
                className={`${styles.blockTitle} ${styles.black}`}
                level={3}
              >
                {contactText[language].blocks.right.title}
              </Heading>
              <ContactForm language={language} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
