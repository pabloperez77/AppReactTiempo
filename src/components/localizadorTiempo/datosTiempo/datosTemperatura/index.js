import React, { Component } from 'react';

class DatosTemperatura extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {temperatura, viento, humedad} = this.props;

        return (
            <div>
                <h1>{`${temperatura} Cº`}</h1>
                <div>
                    <span>Humedad {humedad} % </span>
                    <span>Vel Viento {viento} km/h </span>
                </div>
            </div>
        )
    }
}

export default DatosTemperatura;