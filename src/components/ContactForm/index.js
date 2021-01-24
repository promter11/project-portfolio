import React from "react";
import { Form, Field } from "react-final-form";

import { contactText } from "../../common/jsonText/contactText";

import styles from "./ContactForm.module.scss";

const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

const onSubmit = (values) => console.log(JSON.stringify(values));

const ContactForm = ({ language }) => {
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

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <button className={styles.submit} type="submit" disabled={submitting}>
            {contactText[language].blocks.right.form.submit}
          </button>
        </form>
      )}
    />
  );
};

export default ContactForm;
