function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operation = document.getElementById("operation").value;
    var resultElement = document.getElementById("result");
    var errorElement = document.getElementById("error");

    if (isNaN(num1) || isNaN(num2)) {
        errorElement.innerText = "Wprowadź poprawne liczby.";
        resultElement.innerText = "";
    } else {
        errorElement.innerText = "";

        switch (operation) {
            case "add":
                resultElement.innerText = "Wynik: " + (num1 + num2);
                break;
            case "subtract":
                resultElement.innerText = "Wynik: " + (num1 - num2);
                break;
            case "multiply":
                resultElement.innerText = "Wynik: " + (num1 * num2);
                break;
            case "divide":
                if (num2 !== 0) {
                    resultElement.innerText = "Wynik: " + (num1 / num2);
                } else {
                    resultElement.innerText = "";
                    errorElement.innerText = "Nie można dzielić przez zero.";
                }
                break;
            default:
                resultElement.innerText = "";
                errorElement.innerText = "Wybierz poprawną operację.";
                break;
        }
    }
}