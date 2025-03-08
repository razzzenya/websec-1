function checkInput(num1, num2) {
    if (isNaN(num1)){
        var firstInput = document.getElementById("num1");
        firstInput.style.border = "3px solid red";
        alert("Введите корректное число в первое поле!");
        return false;
    }
    if (isNaN(num2)){
        var secondInput = document.getElementById("num2");
        secondInput.style.border = "3px solid red";
        alert("Введите корректное число во второе поле!");
        return false;
    }
    return true;
}

function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;

    if (checkInput(num1, num2)) {
        document.getElementById("num1").style.border = "2px dashed red";
        document.getElementById("num2").style.border = "2px dashed red";

        let result, prevResult = "";
        if (document.getElementById("curResult") != null) {
            prevResult = document.getElementById("curResult").innerHTML;
            console.log(prevResult);
        }
        switch (operator) {
            case "+": 
                result = num1 + num2; break;
            case "-": 
                result = num1 - num2; break;
            case "*": 
                result = num1 * num2; break;
            case "/": 
                if (num2 === 0) {
                    document.getElementById("num2").style.border = "3px solid red";
                    alert("Деление на ноль невозможно!");
                    return;
                } 
                else {
                    result = num1 / num2;
                }
        }
        document.getElementById("result").innerHTML = 
            `<span id="prevResult" class="muted">${prevResult}</span><br>
            <span id="curResult">${num1} ${operator} ${num2} = ${result}</span>`;
    }
}