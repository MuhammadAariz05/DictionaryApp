var dword = document.getElementById("wordinp");
var dmeaning = document.getElementById("wordmeaning");
var errorsection = document.getElementById("errorsection");

function meaning(word) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b49cda3399msh839ec7e70ef06c4p103424jsn192b5b030984',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then(response => display(response))
        .catch(err => console.error(err));
}

function display(values) {
    dword.innerHTML = values.word;
    if (values.valid == true) {
        errorsection.style.display = "none";
        dmeaning.innerHTML = values.definition.replace("2.", "<br/><br/>2.").replace("3.", "<br/><br/>3.").replace("4.", "<br/><br/>4.").replace("5.", "<br/><br/>5.").replace("6.", "<br/><br/>6.").replace("7.", "<br/><br/>7.").replace("8.", "<br/><br/>8.").replace("9.", "<br/><br/>9.").replace("10.", "<br/><br/>10.");
    } else {
        errorsection.style.display = "block";
        dmeaning.innerHTML = "Cannot find the meaning of <strong>" + values.word + "</strong>";
    }
}