import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

const RegisterFormik = () => {
  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("Se requiere nombre de usuario"),
    lastName: Yup.string().required("Se requiere apellido del usuario"),
    email: Yup.string()
      .email("Formato de email invalido")
      .required("Se requiere email"),
    password: Yup.string()
      .min(8, "La contraseña es muy corta, minimo 8 caracteres")
      .required("Se requiere contraseña"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref("password")], "Passwords must match"),
      })
      .required("Debes confirmar la contraseña"),
  });

  return (
    <div className="mx-auto">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirm: "",
        }}
        // data validation YUP
        validationSchema={registerSchema}
        // submit event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <div className="row">
              <div className="col mb-3">
                <Field
                  id="firstName"
                  name="firstName"
                  placeholder="Nombre"
                  className="form-control"
                />
              </div>

              {/* firstname Errors */}
              {errors.firstName && touched.firstName && (
                <ErrorMessage name="firstName" component="div"></ErrorMessage>
              )}

              <div className="col mb-3">
                <Field
                  id="lastName"
                  name="lastName"
                  placeholder="Apellido"
                  className="form-control"
                />
              </div>
            </div>

            {/* lastname Errors */}
            {errors.lastName && touched.lastName && (
              <ErrorMessage name="lastName" component="div"></ErrorMessage>
            )}

            <Field
              id="email"
              name="email"
              placeholder="Direccion de correo electronico"
              type="email"
              className="form-control mb-3"
            />

            {/* Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              className="form-control mb-3"
            />

            {/* password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <div class="form-text mb-3">
              La contraseña debe tener entre 8-20 caracteres, conteniendo letras
              y numeros, no debe contener espacios, caracteres especiales, ni
              emojis.
            </div>

            <Field
              id="confirm"
              name="confirm"
              type="password"
              placeholder="Repita la contraseña"
              className="form-control mb-3"
            />

            {/* Confirm Password Errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}

            <button type="submit" class="btn btn-primary w-100">
              Submit
            </button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
