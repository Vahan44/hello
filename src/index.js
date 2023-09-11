import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Component } from 'react';
import Form from './components/form/Form';
import YellowPart from "./components/yellowPart/yellowPart"
class App extends Component {
  


  render() {
      return (
          <div className="container">
             <YellowPart/>
             <Form/>
          </div>
      )
  }
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

