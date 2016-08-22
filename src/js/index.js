import React from 'react';
import ReactDOM from 'react-dom';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.scss';
import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);