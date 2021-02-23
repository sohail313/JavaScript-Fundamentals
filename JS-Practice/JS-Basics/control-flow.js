let temp = prompt("Enter Temperature in degree celsius");

if (temp > 80){
    console.log("Its Burning Hot");
}
else if(temp <=80 && temp >= 40){
    console.log("Its Very Hot Outside");
}

else if(temp <40 && temp >= 20){
    console.log("Weather is awesome !");
}
else{
    console.log("Its Cold Out");
}