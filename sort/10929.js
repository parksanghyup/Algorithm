const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
  })
  .on('close', function () {
    input.sort((a,b) => a-b).forEach(item => console.log(item))
  });

// 맞게 풀었지만..
// 단순 입력만으로도 이미 메모리 초과가 떠서 node로는 풀수 없는 문제....,..