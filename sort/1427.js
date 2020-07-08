const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
  })
  .on('close', function () {
      let result = input[0].split('').sort(function(a,b) {return b-a}).join('');
      console.log(result);
  });