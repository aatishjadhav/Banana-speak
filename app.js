var btnTranslate = document.querySelector("#btn-translate");

var textInput = document.querySelector("#txt-area");

var outputDiv = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslatedUrl(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("problem with server, try again after sometime!");
}

function clickEventHandler() {
    
    var inputText = textInput.value

    fetch(getTranslatedUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);