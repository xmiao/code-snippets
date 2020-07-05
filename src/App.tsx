import React, {Component} from 'react';
import './App.css';


// import * as tf from '@tensorflow/tfjs';

// import * as tf from "@tensorflow/tfjs";
// import tfvis from "@tensorflow/tfjs-vis";

// import * as mobilenet from '@tensorflow-models/mobilenet';


class App extends Component<any, any> {

    componentDidMount() {
        const tfvis = require('@tensorflow/tfjs-vis');

        const data = [
            {index: 0, value: 50},
            {index: 1, value: 100},
            {index: 2, value: 150},
        ];

        // Get a surface
        const surface = tfvis.visor().surface({name: 'Barchart', tab: 'Charts'});

        // Render a barchart on that surface
        tfvis.render.barchart(surface, data, {});

        const tf = require('@tensorflow/tfjs');


        setTimeout(() => {
        });

        // Define a model for linear regression.
        const model = tf.sequential();
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));

        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

        // Generate some synthetic data for training.
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
        const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

        // Train the model using the data.
        model.fit(xs, ys, {epochs: 10}).then(() => {
            // Use the model to do inference on a data point the model hasn't seen before:
            model.predict(tf.tensor2d([5], [1, 1])).print();
            // Open the browser devtools to see the output
        });

    }


    // async function getData() {
    //     const carsDataReq = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json');
    //     const carsData = await carsDataReq.json();
    //     const cleaned = carsData.map((car: any) => ({
    //         mpg: car.Miles_per_Gallon,
    //         horsepower: car.Horsepower,
    //     }))
    //         .filter((car: any) => (car.mpg != null && car.horsepower != null));
    //
    //     return cleaned;
    // }
    //
    // async function run() {
    //
    //     const model = await mobilenet.load();
    //
    //     // Load and plot the original input data that we are going to train on.
    //     const data = await getData();
    //     const values = data.map((d: any) => ({
    //         x: d.horsepower,
    //         y: d.mpg,
    //     }));
    //
    //     tfvis.render.scatterplot(
    //         {name: 'Horsepower v MPG'},
    //         {values},
    //         {
    //             xLabel: 'Horsepower',
    //             yLabel: 'MPG',
    //             height: 300
    //         }
    //     );
    //     // More code will be added below
    // }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    ok.
                </header>
            </div>
        );
    }
}

export default App;
