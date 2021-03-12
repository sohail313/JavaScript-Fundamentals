


// let a = 10;

// console.log(a);

// const b  = 100;

// console.log(b);


///closure


function makeadder(x){
    return function(y){
        return x+y;
    };
}

var add5 = makeadder(5);

var add10 = makeadder(10);

console.log(add5(2));

console.log(add10(5));