//CONST
// window.onload = function(){
//     const pi = 3.142;
    
//     function calcArea(r){
//         const pi = 4;
//         console.log("The Area is " + pi*r*r);
//     }
//     console.log(pi);
//     calcArea(3);
// }


//LET
// window.onload = function(){
//     // var a = 10;
//     // if(a>5){
//     //     let a =5;
//     // console.log(a);
//     // }
//     // console.log(a);

//     var items = document.getElementsByTagName('li');
    
//     for(let x=0;x<items.length;x++){
//         items[x].onclick = function(){
//             console.log(x);
//         }
//     }
// }

//DEFAULT PARAMETERS

// window.onload = function(){

//     function ninja(name = "Ryu",color = "White",age = "26"){
//         console.log(" My name is "+ name +" Belt color is " +color +" And age is " + age);
//     }
// //    ninja("Mark","black",22);
// ninja();
// }

//SPREAD OPERATOR
// window.onload = function(){

//     // function meat(){
//     //     meat = ["ham","salami","bacon"];
//     //     console.log(...meat);
//     // }
//     // meat();

//     // function nums(){
//     //     num1 = [1,2,3];
//     //     num2 = [...num1,4,5,6];
//     //     console.log(num2);
//     // }
//     // nums();

//     //add nums using spread(...)
//     nums = [3,5,7];
//     function addNums(a,b,c){
//         console.log(a+b+c);
//     }
//     addNums(...nums);
// }

//TEMPLATE STRING 

// window.onload = function(){
//     function logName(name,age){
//         console.log(`My name is ${name} Age is ${98%77}`);
//     }
//     logName("Sam",98);
// }

//NEW STRING METHODS (ES6)

// window.onload = function(){
    // repeat
    // var str = `hello!   `
    // console.log(str.repeat(5));


    // startsWith
    // let x = `WaterMelon`;
    // console.log(x.startsWith('Melon',5));//Syntax('string','startingpostion')
    //returns true or false
    // var youSay = `goodbye`;
    // if(youSay.startsWith('good')){
    //     var iSay = 'hello';
    // }
    // console.log(`You Say ${youSay} I say ${iSay}`);


    // endsWith
    // var a = 'Hey there'
    // console.log(a.endsWith('Hey',a.length-6));

    // includes
//     var variable = `Hey Everyone today is my Birthday!`;
//     console.log(variable.includes("day"));

// }

//OBJECTS LITERAL ENHANCEMENT

// window.onload = function(){
//     var name = 'Ninja';
//     var belt = 'Black';

//     var ninja = {
//         name,belt,
//         chop(x){
//             console.log(`You cutted Sakura ${x} times`);
//         }
//     };
//     console.log(ninja.chop(100));
// }

//ARRAY FUNCTION (FAT ARROWS)

window.onload = function(){
    //Old-school way
    // var greet = function(){
    //     console.log('Heyyyyyy');
    // }
    // greet();

    //New dawn
    var greet = (name) => console.log(`${name}...How you doing ?`);
    greet('Leina');

}