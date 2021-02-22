import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import axios from 'axios';


axios.defaults.withCredentials = (process.env.NODE_ENV === "development") ? true : false;
axios.defaults.baseURL = (process.env.NODE_ENV === 'development')
                            ? "http://localhost:8000" : "https://stude-group4.herokuapp.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);