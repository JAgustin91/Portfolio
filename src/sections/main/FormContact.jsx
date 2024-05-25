import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FormContact.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "boxicons";

const FormContact = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(
        /^[A-Za-zÀ-ÿ\s]{1,40}$/,
        "El nombre debe contener solo letras y espacios."
      )
      .min(3, "El nombre debe tener al menos 3 caracteres.")
      .max(40, "El nombre no debe exceder los 40 caracteres.")
      .required("Nombre es requerido"),
    email: Yup.string()
      .min(20, "El email debe tener al menos 3 caracteres.")
      .max(40, "El email no debe exceder los 40 caracteres.")
      .email("Correo electrónico inválido")
      .required("Email es requerido"),
    title: Yup.string()
      .min(5, "El asunto debe tener al menos 5 caracteres.")
      .max(100, "El asunto no debe exceder los 100 caracteres.")
      .required("Asunto es requerido"),
    message: Yup.string()
      .min(10, "El mensaje debe tener al menos 10 caracteres.")
      .max(500, "El mensaje no debe exceder los 500 caracteres.")
      .required("Mensaje es requerido"),
  });

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    axios
      .post("https://formsubmit.co/ajax/javieragustinaguilar@gmail.com", values)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarme. Me pondré en contacto contigo pronto.",
        });
        resetForm();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema enviando tu mensaje. Por favor, inténtalo de nuevo más tarde.",
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center flex-column vh-100">
      <div className="row">
        <div className="col">
          <div className="text-center" id="contactame">
            <h1 className="text-light mb-5">Contáctame</h1>
          </div>
          <Formik
            initialValues={{ name: "", email: "", title: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="d-flex justify-content-center flex-column gap-2 contact">
                <label htmlFor="name" className="text-light text-center">
                  - Nombre -
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="rounded-3 bg-secondary text-light text-center placeholder-glow"
                  minLength="3"
                  maxLength="40"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger text-center"
                />

                <label htmlFor="email" className="text-light text-center">
                  - Email -
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-3 bg-secondary text-light text-center placeholder-glow"
                  minLength="20"
                  maxLength="50"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger text-center"
                />

                <label htmlFor="title" className="text-light text-center">
                  - Asunto -
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="rounded-3 bg-secondary text-light text-center placeholder-glow"
                  minLength="5"
                  maxLength="100"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger text-center"
                />

                <label htmlFor="message" className="text-light text-center">
                  - Mensaje -
                </label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  className="rounded-3 bg-secondary text-light text-center placeholder-glow"
                  minLength="10"
                  maxLength="500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-danger text-center"
                />

                <button
                  type="submit"
                  className="rounded-3 bg-primary p-2 text-light mt-2 fs-5"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Enviando...</span>
                    </div>
                  ) : (
                    "Enviar mensaje"
                  )}
                </button>
                <p className="text-light">
                  *Importante: puede que el mensaje demore unos segundos en ser
                  enviado, por favor espere.
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export { FormContact };
