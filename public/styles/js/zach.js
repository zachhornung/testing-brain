// const net = new brain.NeuralNetwork();
// console.log(net);
// net.train([
//   {input: [0,0], output: [0]},
//   {input: [1,0], output: [1]},
//   {input: [0,1], output: [1]},
//   {input: [1,1], output: [0]}

// ]);
// const diagram = document.getElementById('diagram');
// diagram.innerHTML = brain.utilities.toSVG(net);

// provide optional config object (or undefined). Defaults shown.
const config = {
  binaryThresh: 0.5,
  hiddenLayers: [5,5,5,5], // array of ints for the sizes of the hidden layers in the network
  activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
  leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

// create a simple feed forward neural network with backpropagation
// const net = new brain.NeuralNetwork(config);

// net.train([
//   { input: [0, 0], output: [0] },
//   { input: [0, 1], output: [1] },
//   { input: [1, 0], output: [1] },
//   { input: [1, 1], output: [0] },
// ]);

// const output = net.run([1, 0]); // [0.987]

const trainingData = [
  'Jane saw Doug.',
  'Doug saw Jane.',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
];

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, {
  iterations: 1500,
  log: details => console.log(details),
  // keepNetworkIntact: true,
  errorThresh: 0.011
});

const run1 = lstm.run('Jane');
const run2 = lstm.run('Doug');
const run3 = lstm.run('Spot');
const run4 = lstm.run('It');

console.log('run 1: Jane' + run1);
console.log('run 2: Doug' + run2);
console.log('run 3: Spot' + run3);
console.log('run 4: It' + run4);


var d = document.getElementById('d');
console.log(d);
d.innerHTML = brain.utilities.toSVG(lstm);
