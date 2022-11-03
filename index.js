// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  return cats.push(name);
}
destructivelyAppendCat("Simon");

function destructivelyPrependCat(name){
  return cats.unshift(name);
}
destructivelyPrependCat("Annie");

function destructivelyRemoveLastCat(name){
  return cats.pop();
}
destructivelyRemoveLastCat();
       
function destructivelyRemoveFirstCat(name){
  return cats.shift();
}
destructivelyRemoveFirstCat();
        
     
function appendCat(name){
  const cats1 = [...cats, name]
  return cats1
}

function prependCat(name){
  const cats2 = [name, ...cats]
  return cats2
}

function removeLastCat(){
  const cats3 = cats.slice(0,-1);
  return cats3;
}

function removeFirstCat(){
  const cats4 = cats.slice(1);
  return cats4;
}