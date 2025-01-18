import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './components/counter'; 
//*import ToDoList from './components/ToDoList';*/
/*import DigitalClock from './components/DigitalClock';*/
import Stopwatch from './components/Stopwatch';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Stopwatch/> {/* Use Counter with uppercase C */}
    {/* You might want to render App as well if needed */}
    {/* <App /> */}
  </React.StrictMode>
);

// Optional for performance monitoring
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

