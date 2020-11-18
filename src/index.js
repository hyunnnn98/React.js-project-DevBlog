import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
        fontFamily: 'NanumSquare_acBold',
        fontFamily: 'NanumSquare_acExtraBold',
        fontFamily: 'NanumSquare_acLight',
        fontFamily: 'NanumSquare_acRegular'
    }
})
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));