import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import './scss/index.scss';
import App from './app/App';

ReactDOM.render(<Router><App /></Router>, document.querySelector('#root'));