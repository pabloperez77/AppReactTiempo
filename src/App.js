import React, { Component } from 'react';
import  Header from './components/commons/Header';
import Footer from './components/commons/Footer/Footer';
import LocalizadorTiempo from './components/localizadorTiempo'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <LocalizadorTiempo />
                <Footer />
            </div>
        );
    }
}

export default App;