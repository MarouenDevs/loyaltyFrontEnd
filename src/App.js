import React, {Component} from 'react';
import './App.css';

import openSocket from 'socket.io-client';
import Routes from "./config/Routes";

const socket = openSocket('http://localhost:8000');

class App extends Component {


    render() {
        return (
           <Routes socket={socket}/>

        );
    }
}

export default App;
