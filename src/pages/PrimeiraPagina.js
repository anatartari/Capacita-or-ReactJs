import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

import Tabela from '../components/Tabela'
// import Hello from '../components/apresentar'


const  autores =  [
  {
    nome: 'Paulo',
    livro: 'React',
    preco: '1000'
  },
  {
    nome: 'Daniel',
    livro: 'Java',
    preco: '99'
  },
  {
    nome: 'Marcos',
    livro: 'Design',
    preco: '150'
  },
  {
    nome: 'Bruno',
    livro: 'DevOps',
    preco: '100'
  }
];


function Primeira() {
  return (
    <div style={{ textAlign: 'center' }}>

      <h2 className='estiloso'>Hello Word</h2>

      <Tabela autores = { autores }/>

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

export default Primeira;
