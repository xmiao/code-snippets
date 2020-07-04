import React from 'react';
import './App.css';
// import tf from "@tensorflow/tfjs";
import tfvis from "@tensorflow/tfjs-vis";


function App() {

    async function getData() {
        const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
        const carsData = await carsDataReq.json();
        const cleaned = carsData.map((car: any) => ({
            mpg: car.Miles_per_Gallon,
            horsepower: car.Horsepower,
        }))
            .filter((car: any) => (car.mpg != null && car.horsepower != null));

        return cleaned;
    }

    async function run() {
        // Load and plot the original input data that we are going to train on.
        const data = await getData();
        const values = data.map((d: any) => ({
            x: d.horsepower,
            y: d.mpg,
        }));

        tfvis.render.scatterplot(
            {name: 'Horsepower v MPG'},
            {values},
            {
                xLabel: 'Horsepower',
                yLabel: 'MPG',
                height: 300
            }
        );
        // More code will be added below
    }

    return (
        <div className="App">
            <header className="App-header">
                ok.
                {run()}
            </header>
        </div>
    );
}

export default App;
