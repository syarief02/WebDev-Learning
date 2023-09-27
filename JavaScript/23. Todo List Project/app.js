let input = prompt('what would you like to do?');
let toDoList = [""];

if (!input) { input = prompt('invalid prompt'); }
while (input.toLowerCase() !== "quit") {
    if (input === "new") {
        input = prompt('add Todo');

        toDoList.push(input);

        input = prompt(`${input} added`);
    }
    else if (input === "list") {
        console.log("************")
        for (i = 0; i < input.length; i++) {
            console.log(`${i}: ${input[i]} `);

            break;
        }
        console.log("************")
    }
    else input = prompt('invalid prompt');
    input = prompt('what would you like to do?');
}

console.log("you quit the app")