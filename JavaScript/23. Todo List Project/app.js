let input = prompt('what would you like to do?');
let toDoList = ["egg", "litter"];

if (!input) {
    input = prompt('invalid prompt');
}
while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") {
    if (input === "new") {
        input = prompt('add Todo');

        toDoList.push(input);

        input = prompt(`${input} added`);
    }
    else if (input === "list") {
        console.log("************")
        for (i = 0; i < toDoList.length; i++) {
            console.log(`${i}: ${toDoList[i]} `);
        }
        console.log("************")
    }
    else if (input === "delete") {
       let inputNum = prompt("type entry number");
        if ((inputNum < toDoList.length) && (inputNum >= 0)) {
            toDoList.splice(inputNum, 1);
        }
        else input === prompt("entry does not exist. type list to show entry lists");
    }
    else input = prompt('invalid prompt');
    input = prompt('what would you like to do?');
}

console.log("you quit the app")