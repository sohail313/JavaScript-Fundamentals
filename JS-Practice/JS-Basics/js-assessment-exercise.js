//Initialising Conditions

NameCond = null;
ageCond = null;
heightCond = null;
petNameCond = null;


//Taking Info for Spy-Check
fname = prompt("Enter Your First Name");
lname = prompt("Enter Your Last Name");
age = prompt("How old are you?");
height = prompt("What's your height in cms?");
petName = prompt("What's your pet name");
alert("Thank You for the information");

//Checking info
if (fname[0] === lname[0]) {
    NameCond = true;
}
if (age >= 20 && age <=30){
    ageCond = true;
}
if (height >= 170) {
    heightCond = true;
}
if (petName[petName.length-1] =='y' || petName[petName.length-1] =='Y') {
    petNameCond = true;
    // console.log("Petname Condition checked");
}
if( NameCond == true && ageCond == true && heightCond == true && petNameCond == true ){
    console.log("Hello Comrade,Good to see you;)");
}
else{
    console.log("Sorry, Nothing to see here");
}