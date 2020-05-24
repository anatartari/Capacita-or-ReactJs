import React from "react";
import { Link } from "react-router-dom";

import Formulario from "../Components/Formulario";

export default function Sudanda() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>ESTOU NA SEGUNDA PAGINA !</h1>

      <Formulario style={{ textAlign: "center" }} />

      <Link to="/hooks">VAMOS PARA OS HOOKS</Link>
    </>
  );
}
