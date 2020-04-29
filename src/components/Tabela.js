
import React, { Component } from 'react'
{/*
    1º - CRIAR TABELA COMO COMPONENTE 
    2º - CRIAR COMPONENTE COMO FUNCTION NO MESMO ARQUIVO
    3º - PASSAR UM ARRAY COMO PROPS E DAR CONSOLE LOG NELE
    4º - CARREGAR PROPS EM UMA VARIAVEL USANDO MAPS E PRINTAR ISSO
*/}

const TabelaHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preços</th>
                <th>Remover</th>
            </tr>
        </thead>
    )
}

const TabelaBody = props => {

    //Mostrar erro do key 
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index} >
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button>Remover</button></td>
            </tr>
        );
    })
    return(
        <tbody>
            {linhas}
        </tbody>
    )
    // return (
    //     <tbody>
    //     <tr>
    //         <td>Paulo</td>
    //         <td>React</td>
    //         <td>1000</td>
    //         <td><button>Remover</button></td>
    //     </tr>
    //     <tr>
    //         <td>Nico</td>
    //         <td>React</td>
    //         <td>1000</td>
    //         <td><button>Remover</button></td>
    //     </tr>
    //     <tr>
    //         <td>Daniel</td>
    //         <td>React</td>
    //         <td>1000</td>
    //         <td><button>Remover</button></td>
    //     </tr>
    // </tbody>
    // )
}


class Tabela extends Component {
    render() {

        //Tem que ter o mesmo nome que esta sendo passado em <Tabela />
        const { autores } = this.props
        console.log(autores)
        return (
            <table>
                <TabelaHead />
                <TabelaBody autores={autores} />
                {/* Mostrar que pode virar um componente no mesmo arquivo atravez de função 
                TRANSFORMAR O BODY TBM
                <thead>
                    <tr>
                        <th>Autores</th>
                        <th>Livros</th>
                        <th>Preços</th>
                        <th>Remover</th>
                    </tr>
                </thead> */}
                {/*
                    FAZER UM COMPONENTE PASSANDO OS PROPS POR MAP
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
                </tbody> */}
            </table>

        );
    }

}
export default Tabela

