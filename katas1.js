function oneThroughTwenty() {
  let meuRetorno = [];
  for (let counter = 1; counter <= 20; counter++){
    meuRetorno.push(counter);
  }
    return meuRetorno;
}
console.log(oneThroughTwenty());
//call function oneThroughTwenty

function evensToTwenty() {
  let meuRetorno = [];
  for (let counter = 0; counter <= 20; counter=counter+2){
    meuRetorno.push(counter);
  }
return meuRetorno;
}
console.log(evensToTwenty());
//call function evensToTwenty

function oddsToTwenty() {
let meuRetorno = [];
for (let counter = 1; counter <=20; counter=counter+2){
 meuRetorno.push(counter);
}
return meuRetorno;
}
console.log(oddsToTwenty());
//call function oddsToTwenty

function multiplesOfFive() {
let meuRetorno = [];
for (let counter = 5; counter <= 100; counter++){
 if (counter % 5 === 0)
  meuRetorno.push(counter);
}
return meuRetorno;
}
console.log(multiplesOfFive());
//call function multiplesOfFive

function squareNumbers() {
  let meuRetorno = [];
  for (let counter = 0; counter <=100; counter++){
    if ((counter ** 2) / counter === counter)
      meuRetorno.push(counter);
  }
  return meuRetorno;
}
console.log(squareNumbers());
//call function squareNumbers

function countingBackwards() {
let meuRetorno = [];
for (let counter = 20; counter >= 1; counter--){
  meuRetorno.push(counter);
}
  return meuRetorno;
}
console.log(countingBackwards());
//call function countingBackwards

function evenNumbersBackwards() {
let meuRetorno = [];
for (let counter = 20; counter >= 1; counter=counter-2){
  meuRetorno.push(counter);
}
  return meuRetorno;
}
console.log(evenNumbersBackwards());
//call function evenNumbersBackwards

function oddNumbersBackwards() {
let meuRetorno = [];
for (let counter = 19; counter >= 1; counter=counter-2){
  meuRetorno.push(counter);
}
  return meuRetorno;
}
console.log(oddNumbersBackwards());
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
let meuRetorno = [];
for (let counter = 100; counter >= 1; counter=counter-5){
  meuRetorno.push(counter);
}
return meuRetorno;
}
console.log(multiplesOfFiveBackwards());
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  
 /* Your code goes below
Write a for or a while loop
return the result */
}

//call function squareNumbersBackwards