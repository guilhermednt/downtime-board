const fs = require('fs');
const before = require('./board.json');
const time = require('./time-converter');

var board = JSON.parse(JSON.stringify(before));

board.last = new Date().toJSON();

const newBestCandidate = time.toUnit(new Date(board.last) - new Date(before.last), 'days');

if (newBestCandidate > board.best) {
    board.best = newBestCandidate;
}

fs.writeFile('board.json', JSON.stringify(board), 'utf8', () => console.log('done'));
