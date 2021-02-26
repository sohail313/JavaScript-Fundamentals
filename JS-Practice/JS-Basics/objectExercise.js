
///PROBLEM 1


//to print name length into console

var employee = {
    name : "John Smith",
    job : "Programmer",
    age : 31,
    nameLength : function(){
        console.log(this.name.length)
    }
}


///PROBLEM 2

//wap to create an alert for each objects

var employee = {
    name : "John Smith",
    job : "Programmer",
    age : 31,
    Alert : function(){
        alert("Name is "+this.name)
        alert("Job is "+this.job)
        alert("Age is "+this.age)
    }
}


///PROBLEM 3

//add a method called last name that prints lastname onto console

var employee = {
    name : "John Smith",
    job : "Programmer",
    age : 31,
    lastName : function(){
        res = this.name.split(" ");
        console.log(res[1]);
    }
}