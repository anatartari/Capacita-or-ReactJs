import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";

import Tabela from "../Components/Tabela";
// import Hello from '../components/apresentar'

const instance = axios.create({
  baseURL: "http://127.0.0.1:3333/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

async function getAutores(callback) {
  await instance
    .get("/autores")
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function Primeira() {
  const [autores, setAutores] = useState([]);
  useEffect(() => {
    getAutores(function (data) {
      setAutores(data);
    });
    console.log("chamou");
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="estiloso">Hello Word</h2>

      <Tabela autores={autores} />

      {/* 
       DAR EXEMPLO DE COMPONENTE E PROPS
      <Hello nome="Ana" adjetivo="braba" />
      <Hello nome="Billy" adjetivo="fedido" />
      <Hello nome="Joao" adjetivo="forte" />
     */}

      {/* MOSTRAR QUE UM CODIGO "GRANDE" PODE VIRAR UMA TAG
       <table>
        <thead>
          <tr>
            <th>Autores</th>
            <th>Livros</th>
            <th>Preços</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paulo</td>
            <td>React</td>
            <td>1000</td>
            <td><button>Remover</button></td>
          </tr>
          <tr>
            <td>Nico</td>
            <td>React</td>
            <td>1000</td>
            <td><button>Remover</button></td>
          </tr>
          <tr>
            <td>Daniel</td>
            <td>React</td>
            <td>1000</td>
            <td><button>Remover</button></td>
          </tr>
        </tbody>
      </table> */}

      {/* 
         NAVEGAÇÃO E EXPLICAÇÃO DE ROUTES
         <Link to="/SegundaPagina">
          <button>Segunda</button>
        </Link>
         */}
    </div>
  );
}
