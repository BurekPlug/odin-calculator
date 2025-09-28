let elem1 = "0";
let MainOperator = "";
let elem2 = "0";


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

function generateCalcGUI () {
    
    // Generate Display Row
    const DisplDiv = document.createElement("div");
    DisplDiv.classList.add("DisplDiv");
    document.documentElement.appendChild(DisplDiv);
    DisplDiv.setAttribute("class", "display");
    DisplDiv.setAttribute("id", "MainDisplay");

    // fill the Display
    DisplDiv.textContent = "571";
    
    // Generate 1st Row
    const DivContainer1stRow = document.createElement("div");
    DivContainer1stRow.classList.add("DivContainer1stRow");
    document.documentElement.appendChild(DivContainer1stRow);
    DivContainer1stRow.setAttribute("class", "Row1st");

    //fill 1st Row
    const clearBtn = document.createElement("button");
    clearBtn.classList.add("clearBtn");
    DivContainer1stRow.appendChild(clearBtn);
    clearBtn.textContent = "clear";
    clearBtn.setAttribute("class", "btnStandard");

    const DivideBtn = document.createElement("button");
    DivideBtn.classList.add("DivideBtn");
    DivContainer1stRow.appendChild(DivideBtn);
    DivideBtn.textContent = "/";
    DivideBtn.setAttribute("class", "btnStandard");

    const multBtn = document.createElement("button");
    multBtn.classList.add("multBtn");
    DivContainer1stRow.appendChild(multBtn);
    multBtn.textContent = "*";
    multBtn.setAttribute("class", "btnStandard");

    const substrBtn = document.createElement("button");
    substrBtn.classList.add("substrBtn");
    DivContainer1stRow.appendChild(substrBtn);
    substrBtn.textContent = "-";
    substrBtn.setAttribute("class", "btnStandard");


    // Generate 2nd Row
    const DivContainer2ndRow = document.createElement("div");
    DivContainer2ndRow.classList.add("DivContainer2ndRow");
    document.documentElement.appendChild(DivContainer2ndRow);
    DivContainer2ndRow.setAttribute("class", "Row2nd");

    //fill 2nd Row
    
    const Btn7 = document.createElement("button");
    Btn7.classList.add("Btn7");
    DivContainer2ndRow.appendChild(Btn7);
    Btn7.textContent = "7";
    Btn7.setAttribute("class", "btnStandard");

    const Btn8 = document.createElement("button");
    Btn8.classList.add("Btn8");
    DivContainer2ndRow.appendChild(Btn8);
    Btn8.textContent = "8";
    Btn8.setAttribute("class", "btnStandard");

    const Btn9 = document.createElement("button");
    Btn9.classList.add("Btn9");
    DivContainer2ndRow.appendChild(Btn9);
    Btn9.textContent = "9";
    Btn9.setAttribute("class", "btnStandard");

    const addBtn = document.createElement("button");
    addBtn.classList.add("addBtn");
    DivContainer2ndRow.appendChild(addBtn);
    addBtn.textContent = "+";
    addBtn.setAttribute("class", "btnStandard");


    // Generate 3rd Row
    const DivContainer3rdRow = document.createElement("div");
    DivContainer3rdRow.classList.add("DivContainer3rdRow");
    document.documentElement.appendChild(DivContainer3rdRow);
    DivContainer3rdRow.setAttribute("class", "Row3rd");

    //fill 3rd Row
    
    const Btn4 = document.createElement("button");
    Btn4.classList.add("Btn4");
    DivContainer3rdRow.appendChild(Btn4);
    Btn4.textContent = "4";
    Btn4.setAttribute("class", "btnStandard");

    const Btn5 = document.createElement("button");
    Btn5.classList.add("Btn5");
    DivContainer3rdRow.appendChild(Btn5);
    Btn5.textContent = "5";
    Btn5.setAttribute("class", "btnStandard");

    const Btn6 = document.createElement("button");
    Btn6.classList.add("Btn6");
    DivContainer3rdRow.appendChild(Btn6);
    Btn6.textContent = "6";
    Btn6.setAttribute("class", "btnStandard");

    const equalBtn = document.createElement("button");
    equalBtn.classList.add("equalBtn");
    DivContainer3rdRow.appendChild(equalBtn);
    equalBtn.textContent = "=";
    equalBtn.setAttribute("class", "btnStandard");


    // Generate 4th Row
    const DivContainer4thRow = document.createElement("div");
    DivContainer4thRow.classList.add("DivContainer4thRow");
    document.documentElement.appendChild(DivContainer4thRow);
    DivContainer4thRow.setAttribute("class", "Row4th");

    //fill 3rd Row
    
    const Btn1 = document.createElement("button");
    Btn1.classList.add("Btn1");
    DivContainer4thRow.appendChild(Btn1);
    Btn1.textContent = "1";
    Btn1.setAttribute("class", "btnStandard");

    const Btn2 = document.createElement("button");
    Btn2.classList.add("Btn2");
    DivContainer4thRow.appendChild(Btn2);
    Btn2.textContent = "2";
    Btn2.setAttribute("class", "btnStandard");

    const Btn3 = document.createElement("button");
    Btn3.classList.add("Btn3");
    DivContainer4thRow.appendChild(Btn3);
    Btn3.textContent = "3";
    Btn3.setAttribute("class", "btnStandard");

    const Btn0 = document.createElement("button");
    Btn0.classList.add("Btn0");
    DivContainer4thRow.appendChild(Btn0);
    Btn0.textContent = "0";
    Btn0.setAttribute("class", "btnStandard");
}

/*  Initalize GUI */
generateCalcGUI();

/* display reaction */
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => updateDisplay(button.textContent));
});

function updateDisplay(content) {
    const DisplDiv = document.querySelector("#MainDisplay");

    switch (content) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (elem1[0] == "0") {
                elem1 = content;
            }
            else if(elem1.length < 10) {
                elem1 += content;
            }
            else {}
            MainDisplay.textContent = elem1;
            break;
        
        case "0":
            if(elem1.length < 10 && elem1.length != 0 && elem1[0] != "0") {
                elem1 += content;
            }
            else if (elem1 == "0") {
                elem1 = "0"
            }
            else {}

            MainDisplay.textContent = elem1;
            break;
        
        case "clear":
            elem1 = "0";
            MainDisplay.textContent = elem1;
            break;
        
        case "+":
            

        default:
            break;
    }
}