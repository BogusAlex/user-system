import React from "react";
import RegisterFormik from "./RegisterFormik";
import "./style.css";

const Register = () => {
  return (
    <div className="container">
      <div className="card text-center mx-auto">
        <div className="card-header">
          <h3>Elija una opcion para Registrarse</h3>
        </div>
        <div className="card-body">
          <RegisterFormik />
          <p className="mt-5">O inicia sesion con Google</p>
          <div>
            <button type="submit" class="btn btn-primary w-100">
              Inicia sesion con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
