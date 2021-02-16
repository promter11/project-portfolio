import React, { Fragment, useState } from "react";
import { string } from "prop-types";
import { Form, Field } from "react-final-form";
// import axios from "axios";

import Heading from "../Heading";
import Modal from "../Modal";

import { contactText } from "../../common/jsonText/contactText";

import styles from "./ContactForm.module.scss";
import modalStyles from "../Modal/Modal.module.scss";

const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const ContactForm = ({ language }) => {
  const [modalStatus, setModalStatus] = useState(false);

  const required = (value) =>
    value ? undefined : contactText[language].blocks.right.form.errors.required;
  const maxLength = (max) => (value) =>
    value.length <= max
      ? undefined
      : contactText[language].blocks.right.form.errors.maxLength;
  const checkEmail = (pattern) => (value) =>
    pattern.test(value)
      ? undefined
      : contactText[language].blocks.right.form.errors.checkEmail;

  const onSubmit = (values) => {
    // It's need to correctly build express
    // axios.post("/send", values);

    setModalStatus((value) => !value);
  };

  return (
    <Fragment>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, values }) => (
          <form
            className={styles.form}
            onSubmit={async (event) => {
              await handleSubmit(event);

              form.reset();
              Object.keys(values).forEach((field) =>
                form.resetFieldState(field)
              );
            }}
          >
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div className={styles.field}>
                  <span className={styles.text}>
                    {contactText[language].blocks.right.form.name}
                  </span>
                  <label className={styles.label}>
                    <input {...input} className={styles.input} type="text" />
                  </label>
                  {meta.error && meta.touched && (
                    <span className={styles.error}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field
              name="email"
              validate={composeValidators(
                required,
                maxLength(64),
                checkEmail(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
              )}
            >
              {({ input, meta }) => (
                <div className={styles.field}>
                  <span className={styles.text}>
                    {contactText[language].blocks.right.form.email}
                  </span>
                  <label className={styles.label}>
                    <input {...input} className={styles.input} type="text" />
                  </label>
                  {meta.error && meta.touched && (
                    <span className={styles.error}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field
              name="message"
              validate={composeValidators(required, maxLength(255))}
            >
              {({ input, meta }) => (
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <span className={styles.text}>
                    {contactText[language].blocks.right.form.message}
                  </span>
                  <label className={styles.label}>
                    <textarea {...input} className={styles.textarea} />
                  </label>
                  {meta.error && meta.touched && (
                    <span className={styles.error}>{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <button
              className={styles.submit}
              type="submit"
              disabled={submitting}
            >
              {contactText[language].blocks.right.form.submit}
            </button>
          </form>
        )}
      />
      <Modal
        modalStatus={modalStatus}
        toggleModal={() => setModalStatus((value) => !value)}
      >
        <div className={modalStyles.modalInner}>
          <Heading className={modalStyles.modalTitle} level={2}>
            {contactText[language].modal.title}
          </Heading>
          <p className={modalStyles.modalDesc}>
            {contactText[language].modal.text}
          </p>
        </div>
      </Modal>
    </Fragment>
  );
};

ContactForm.propTypes = {
  language: string,
};

export default ContactForm;
