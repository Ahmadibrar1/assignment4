// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import 'semantic-ui-css/semantic.min.css'


// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
