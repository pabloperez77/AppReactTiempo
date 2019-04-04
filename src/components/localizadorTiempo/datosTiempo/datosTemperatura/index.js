import React, { Component } from 'react';

class DatosTemperatura extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const {temperatura, viento, humedad} = this.props;

        return (
            <div className="App-datostemp">
                <div id="App-temp">
                    <span>{`${temperatura} Cº`}</span>
                </div>

                <div id="App-hum">
                    <span>{humedad} % </span>
                </div>

                <div id="App-viento">
                    <span>{viento} km/h </span>
                </div>

            </div>
        )
    }
}

export default DatosTemperatura;