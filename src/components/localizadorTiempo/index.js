import React, {Component} from 'react';
import Localizador from './localizador';
import serviceApi from '../../services/serviceAPI';
import DatosTiempo from './datosTiempo';

const location = "Murcia, es";

class LocalizadorTiempo extends Component {

    constructor(...props) {
        super(...props);
        this.state = {data:{}}

    }


    async componentDidMount(){
        let data = await serviceApi.getData();
        this.setState({data:data})
    }

    render(){
        const data = this.state;
        return(
            <div>
                <Localizador ciudad={location}/>
                <DatosTiempo data={data} />
            </div>
        )
    }
}


export default LocalizadorTiempo;