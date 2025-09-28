let elem1 = 0;
let MainOperator = "+";
let elem2 = 0;


function add (a,b) {
    return a + b
}

function subtract (a,b) {
    return a - b
}

function multiply (a,b) {
    return a * b
}

function divide (a,b) {
    if (b != 0)
    {
        return a/b;
    }   
}

function operate () {
    switch(MainOperator) {
        case "+":
            add(elem1, elem2);
            break;
        case "-":
            substract(elem1, elem2);
            break;
        case "*":
            multiply(elem1, elem2);
            break;
        case "/":
            divide(elem1, elem2);
            break;
        default:
            break;
    }
}