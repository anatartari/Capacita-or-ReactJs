import React, { Component } from 'react'

export default class Formulario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            idade: 0,
            email: '',
            mensagem: ''
        }

    }

    criarUser = (event) => {
        
        alert(
        `
        ${this.state.nome} 
        ${this.state.idade}
        ${this.state.email}
        ${this.state.mensagem}`
        )
    }
    render() {
        return (
            <>
                <form onSubmit={this.criarUser}>
                    <input type="text" placeholder="Qual o seu nome?"
                        defaultValue={this.state.nome} onChange={(event) => this.setState({ nome: event.target.value })} /><br/>
                    <input type="number" placeholder="Qual sua idade"
                        defaultValue={this.state.idade} onChange={(event) => this.setState({ idade: event.target.value })} /><br/>
                    <input type="email" placeholder="Qual o seu e-mail?"
                        defaultValue={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} /><br/>
                    <textarea  placeholder="Qual a sua mensagem?"
                        defaultValue={this.state.mansagem} onChange={(event) => this.setState({ mensagem: event.target.value })} /> <br/>
                    <button type="submit">Enviar</button>
                </form>
                {this.state.nome !== '' ?
                    <div>
                        <h3>
                            {this.state.nome}
                        </h3>
                        <h3>
                            {this.state.email}
                        </h3>
                    </div>
                    :
                    <h3>Nada aqui</h3>}
            </>
        )
    }
}