import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextWrapper from './context/ContextWrapper';
import { ThemeProvider } from 'styled-components';

const dark = {

  color_active: "#ea5c5c",
  color_simple: "#fff",
  color_invert: "#000",
  bg_color_general: "#fff",
  bg_color_additional: "#fff",
}
const light = {

  color_active: "#ff3030",
  color_active_hover: "#d92e2e",
  color_active_invert: "#fff",
  color_simple: "#000",
  color_simple_invert: "#fff",
  color_disabled: "#ccc",
  color_disabled_hover: "#ccc",
  bg_color_general: "#fff",
  bg_color_additional: "#efefefa8",
  border_color: '#000',
  border_color_additional: "#dfdfdf",
}

// ${props => props.theme. }
const theme = {
  fzsm: "1.2rem",
  fzsmxl: "1.5rem",
  fz: "2rem",
  fzxl: "4rem",
  ...light


};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ContextWrapper>
      <ThemeProvider theme={theme}>

        <App />

      </ThemeProvider>
    </ContextWrapper >
  </React.Fragment>
);

