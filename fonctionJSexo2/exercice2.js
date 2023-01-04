function askUserOperation(){
    let operateur = "";
    while(operateur !== "+" && operateur !== "-" && operateur !== "*" && operateur !== "/" && operateur !== "&" ){
        operateur = window.prompt("je veux une operation");

    }
    return operateur;
}
function askUserFirstNumber(){
    let firstNumber = "";
        firstNumber = window.prompt("faites votre choix");

        return parseInt(firstNumber);
}
function askUserSecondNumber(){
    let secondNumber = "";
        secondNumber = window.prompt("faites encore votre choix");

        return parseInt(secondNumber);
}


let operateur =  askUserOperation();
let firstNumber = askUserFirstNumber();
let secondNumber = askUserSecondNumber();

console.log(operateur);
console.log(firstNumber);
console.log(secondNumber);