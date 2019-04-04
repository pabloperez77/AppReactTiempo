import React, { Component } from 'react';
import './localizador.css';

class Localizador extends Component {
    constructor(...props){
        super(...props);
    }

    render(){
        const {ciudad} = this.props;
        return(
            <div id="localizador"><h1>{ciudad}</h1></div>
        )
    }
}


export default Localizador;