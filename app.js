// Escribe tu código aquí.
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
let bigWords = 'bocina';


let funcionArray = (myArray, bigWords) => {
    let newArray = [];
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index].length > bigWords.length) {
            newArray.push(myArray[index]);
        }
    }

    return console.log(newArray);;

};

let myNewArray = [];



funcionArray(myArray,bigWords)

let ulist = document.querySelector("#list");
for (let index = 0; index < myArray.length; index++) {
    let listItem = document.createElement("li");
    ulist.append(listItem);
    listItem.append(myArray[index]);
}
