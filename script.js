function selectAnswer(color) {
    let resultText = "";

    if(color === "red") resultText = "you're a lily!";
    else if(color === "yellow") resultText = "you're a rose!";
    else if(color === "green") resultText = "you're a daffodil!";

    document.getElementById("result").innerHTML = '<h2>${resultText}</h2>';
}