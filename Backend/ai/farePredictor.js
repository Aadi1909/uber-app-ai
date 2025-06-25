const tf = require('@tensorflow/tfjs-node');

// Mock training data: [distance (km), duration (min)] => fare ($)
const xs = tf.tensor2d([
  [2, 5],
  [5, 10],
  [10, 20],
  [7, 15],
  [3, 7]
]);
const ys = tf.tensor2d([
  [7],
  [15],
  [30],
  [21],
  [10]
]);

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [2]}));
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

async function train() {
  await model.fit(xs, ys, {epochs: 200});
}
train();

async function predictFare(distance, duration) {
  const input = tf.tensor2d([[distance, duration]]);
  const prediction = model.predict(input);
  return prediction.dataSync()[0];
}

module.exports = { predictFare };