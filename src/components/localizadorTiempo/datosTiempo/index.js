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
        const HumBase = 20;
        const VientoBase = 5;
        return(
            <div id="datosTiempo">
                <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link></head>

                  <div id="titulos">
                    <div id="p1" className="animated fadeInLeft">
                        <p>Temperatura</p>
                    </div>
                    <div id="p2" className="animated fadeInUp">
                        <p>Humedad</p>
                    </div>
                    <div id="p3" className="animated fadeInRight">
                        <p>Velocidad del <br/>Viento</p>
                    </div>
                  </div>
                <IconoTiempo icono={data} />
                <DatosTemperatura temperatura={data.main ? this.calcularTemperatura(data.main.temp): TempBase}
                viento={data.wind ? this.calcularViento(data.wind.speed) : VientoBase}
                humedad={data.main ? data.main.humidity : HumBase}               />

            </div>
        )
    }
}

export default DatosTiempo;