var johnHeight = Math.floor(Math.random() * 100 + 100);
var johnAge = Math.floor(Math.random() * 100 + 18);

var davHeight = Math.floor(Math.random() * 100 + 100);
var davAge = Math.floor(Math.random() * 100 + 18);

var micHeight = Math.floor(Math.random() * 100 + 100);
var micAge = Math.floor(Math.random() * 100 + 18);

console.log('John age: ' + johnAge);
console.log('Dave age: ' + davAge);
console.log('Mic age: ' + micAge);

//var scores = new Array(0, 0, 0);
var scores = new Array(johnHeight + 5 * johnAge, davScore = davHeight + 5 * davAge, micHeight + 5 * micAge);

console.log(scores);

var johnScore = johnHeight + 5 * johnAge;
var davScore = davHeight + 5 * davAge;

console.log('John scores: ' + scores[0] + '\n');
console.log('Dav scores: ' + scores[1] + '\n');
console.log('Mic scores: ' + scores[2] + '\n');


if (scores[0] === scores[1] && scores[1] === scores[2]){
    console.log('Draw game!!!');
} else if (scores[0] > scores[1] && scores[0] > scores[2]) {
    console.log('John wins.');
    
} else if (scores[1] > scores[0] && scores[1] > scores[2]) {
    console.log('Dav wins.');
} else if (scores[2] > scores[0] && scores[2] > scores[1]) {
    console.log('Mic wins.');
}