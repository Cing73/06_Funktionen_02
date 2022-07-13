
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten :check!
4. Ausgabe in Konsole : check!
*/

// application / App
// startApp();
function startApp() {
    output(calculator(getNumber("1"),getOp(),getNumber("2")));
}


function getNumber(numTxt) {
    const displayStr = "Bitte Zahl " + numTxt +  " eingeben:";
    let inputStr = prompt(displayStr);
    let num = parseInt(inputStr)
    return num;
}

//module: input operator | Test:
output(getOp());
function getOp() {
    const displayStr = "Bitte korrekten Operator ( + | - | * | / ) eingeben";
    let op = prompt(displayStr);

    // if op is NOT valid AND user DIDN'T click at Abbrechen
    while (!isOpValid(op) && (op !== null)) {
        op = prompt(displayStr);
    }

    return op;
    // return isOpValid();
    // return op;
}
// module: check operator | Test:
// agreement : "+","-","*","/"
// output(isOpValid("+"));
// output(isOpValid("-"));
// output(isOpValid("*"));
// output(isOpValid("/"));
// output(isOpValid("#?#"));
// output(isOpValid(""));
function isOpValid(op) {
    
    //1st variant
    // switch (op) {
    //     case "+":
    //     case "-":
    //     case "*":
    //     case "/":
    //         return true
    //     default:
    //         return false;
    // }
    
    // 2nd variant
    return op == "+" || op == "-" || op == "*" || op == "/";


}

// module: calculator | tests:
function calculator(a,op,b) {

    switch (op) {
        case "+": // addition
            return add(a,b);
        case "-": // subtraction
            return subtract(a,b);
        case "*": // multiplication
            return multiply(a,b);
        case "/": // division
            return divide(a,b);
        default:    
            return "Something went wrong!";
    }
 }


// module: division a / b |  test:
// output(divide(2,3));
// output(divide(2,-3));
// output(divide(2.1,3.2));
// output(divide(2,0));
function divide(a,b) {
    if (b == 0) {
       return "Division by 0 not possible!";
    } 
    return a / b;
}

// module: multiplication a * b |  test:

// output(multiply(2,3));
// output(multiply(2,-3));
// output(multiply(2.1,3.2));
// output(multiply(2,0));
function multiply(a,b) {
    return a * b;
}

// module: subtraction a - b |  test:

// output(subtract(2,3));
// output(subtract(2,-3));
// output(subtract(2.1,3.2));
// output(subtract(2,0));
function subtract(a,b) {
    return a - b;
}

// module: addition a + b |  test:

// output(add(2,3));
// output(add(2,-3));
// output(add(2.1,3.2));
// output(add(2,0));
function add(a,b) {
    return a + b;
}

// module: console output | test:
// output("hello");
// output(20);
function output(inputData) {
    if (typeof inputData == "number") {
        console.log("The result is: " + inputData);
    } else {
        console.log("Error: " + inputData);
    }
    
}

// TO DO:

 // output(20) ---> "The result is: "  20 --check!

 // output("Error") --> "Error"