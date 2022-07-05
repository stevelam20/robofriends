import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import CardList from './components/CardList'
import 'tachyons';
import { robots } from './robots';
/*import registerServiceWorker from './registerServiceWorker';*/

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*registerServiceWorker();*/
