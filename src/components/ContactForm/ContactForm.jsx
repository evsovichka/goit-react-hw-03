import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import style from "./ContactForm.module.css";

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const AddFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
  number: Yup.string()
    .test(
      "number-format",
      "Invalid number format (expected XXX-XX-XX)",
      (value) => {
        const regex = /^\d{3}-\d{2}-\d{2}$/;
        return regex.test(value);
      }
    )
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (value, actions) => {
    const newContactWithId = { ...value, id: nanoid() };
    onAdd(newContactWithId);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={AddFormSchema}
    >
      <Form>
        <div className={style.name}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
