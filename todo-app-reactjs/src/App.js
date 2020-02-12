import React from 'react';
import './App.css';
import ToDo from "./components/ToDo";

let list = [
    { id: 1, text: "Create Vue.js apps"},
    { id: 2, text: "Create React apps"},
    { id: 3, text: "Create Svelte apps"}
];

function App() {
    return (
        <div className="App">
            <ToDo list={list} />
        </div>
    );
}

export default App;
