import React, { Component } from 'react'


export default class Hello extends Component {

    render(){
        return(
            <h3>Ola, eu sou {this.props.nome} e sou {this.props.adjetivo}</h3>
        )
    }
}

// export default function Hello(props){

//         return(
//         <h3>Ola, eu sou {props.nome} e sou {props.adjetivo}</h3>
//         )
    
// }