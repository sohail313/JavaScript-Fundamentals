let nameList = []

choice = prompt("Would You like to play roster web app? \n Make a CHOICE. \n y/n")
// while(1){
    if(choice == 'y'){

        while (1) {

        action = prompt('Select an Action \n Add \n Remove \n Display \n Quit');

        switch(action){
            case 'add':
                addFunction();
                break;

            case 'remove':
                removeName();
                break;

            case 'display':
                displayNames();
                break;

            case 'quit':
                quitGame();
                break;
        }

        }
    }
    alert("Congratulations! You Survived \n refresh to play again");

function addFunction(){
    addName = prompt("Enter the Name to be added")
    nameList.push(addName);
}

function displayNames(){
    console.log(nameList);
}

function removeName(){
    removed = prompt("Enter name to be eliminated")
    let index = nameList.indexOf(removed);
    nameList.splice(index,1); 
    // nameList.pop(removed)
}

function quitGame(){
    exit();
}