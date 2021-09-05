// Randomize, probability, getRandomInt, etc in here. Shouldn't need more functions but if the situation changes, put them here.


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomize = (arr) =>{
      return arr[Math.floor(Math.random()*arr.length)];
};

function probability (n){
  return !!n && Math.random() <= n;
};
