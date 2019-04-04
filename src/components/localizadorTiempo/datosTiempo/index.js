import React, { Component } from 'react';
import IconoTiempo from './iconoTiempo';
import DatosTemperatura from './datosTemperatura';
import Conversor from 'convert-units';

class DatosTiempo extends Component {
    constructor(props){
        super(props)
    }

    calcularTemperatura(temperatura){
        return Conversor(temperatura).from('K').to('C');
    }

    calcularViento(viento){
        return Math.round(Conversor(viento).from('m/s').to('km/h'*100)/100);
    }

    render(){
        const {data} = this.props;
        const TempBase = 20;
        return(
            <div id="datosTiempo">
                <h1>Datos Tiempo</h1>
                <IconoTiempo icono={data} />
                <DatosTemperatura temperatura={data.main ? this.calcularTemperatura(data.main.temp): TempBase}
                viento={data.wind ? this.calcularViento(data.wind.speed) : 5}
                humedad={data.main ? data.main.humidity : 20}               />
            </div>
        )
    }
}

export default DatosTiempo;