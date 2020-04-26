import React, { Component } from 'react'

export default class Hello extends Component {

    styles = {
        fontStyle: 'blond',
        color: 'blue' 
    }

    render() {
        return(
            /**
             * Mostrar primeiro um componente sem props
             * Mostrar um componente com props
             * mostrar o style
             */
            <h2 style={this.styles}>Ola, meu nome é {this.props.name}, eu gosto de ir na(o) {this.props.lugar}</h2>
        );
    }
}