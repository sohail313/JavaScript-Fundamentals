//Problem 1
//Print hello 5 times
// for (let x = 0; x <5; x++) {
//     console.log("Hello");
// }

// let y = 0;

// while (y < 5) {
//     console.log("Hola");
//     y++;
// }

//problem 2
//print odd no bt 1 - 25

//method 1 while loop
let num = 0;
while (num<25) {
    if (num%2 !==0){
        console.log("Number is "+num);
    }
    num+=1;
}

//method 2 for loop

let num1 = 0;
for (let num1 = 0; num1 < 25; num1++) {
    if(num1%2 !==0){
        console.log("Number is "+num1);
    }
}