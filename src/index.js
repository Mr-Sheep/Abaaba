import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from "@reach/router";
import './index.css';
import Fact from './components/Fact';
import Home from './components/Home';
import data from "./data/facts.json";
import * as serviceWorker from './serviceWorker';

// var data;
// fetch("https://cat-fact.herokuapp.com/facts")
//     .then((response) => response.json())
//     .then((res) => data = res);

// let Home = () => <div> Home </div>;
let Dashboard= () => <div> Dashboard </div>;
const App = ({ children }) => (
<div>
    <nav className = "navbar">
        <Link id="nav" to="/">Home</Link> 
        <Link id="nav" to="fact">FactsList</Link>
        <Link id="nav" to="dashboard">Dashboard</Link>
    </nav>

    <Router>
    <Home path="/" cats={data}/>
    <Dashboard path="dashboard" />
    <Fact path ="fact" cats={data}/>
    </Router>
</div>
);
ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(<Fact cats={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
