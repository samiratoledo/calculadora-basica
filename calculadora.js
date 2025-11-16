let form = document.querySelector(".form");
let calc = " ";
let result = "";
let htmlResult = document.querySelector(".htmlResult");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    //pegar e colocar para o usuario aparecer os sinais certos 
    let submitter = event.submitter.name

    if (submitter == "=") {
        result = eval(calc);
        htmlResult.innerHTML = `${result}`
    } else if (submitter == "ce") {
        calc = " ";
        htmlResult.innerHTML = `${calc}`
    } else if (submitter == "c") {
        calc = calc.slice(0, -1);
        htmlResult.innerHTML = `${calc}`
    } else {
        calc = calc + submitter;
        htmlResult.innerHTML = `${calc}`
    }

})
