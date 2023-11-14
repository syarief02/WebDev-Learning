const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("SUBMITTED!!");
    console.log(input.value);
    const catName = input.value;
    const newLi = document.createElement("LI");
    newLi.append(catName);
    console.log(newLi);
    list.append(newLi);
    input.value = "";
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
    for (let i = list.children.length - 1; i >= 0; i--) {
        list.removeChild(list.children[i]);
    }
})