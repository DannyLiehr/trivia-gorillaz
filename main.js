// Let's start by getting a randoom item from every band member's quotes and putting them in an array.
var candidates=["2D", "Murdoc", "Noodle", "Russel"];


var chosenBandMember;
var chosenQuote;

// Select the quote element to fill it. Likewise, add event listeners.
var quoteSec= document.querySelector("#quote");
var answerGrid = document.querySelector("#answer-grid");


function checkAnswer(id){
    if (id == chosenBandMember){
        // Right answer
        document.getElementById(id).className="correct";

    } else {
        // console.log("Wrong.")
        document.getElementById(id).className="incorrect";
        document.getElementById(chosenBandMember).className="correct";
    }
    document.getElementById("avatar").src=`./img/${chosenBandMember}.gif`;
    setTimeout(function(){ trivia(); }, 2000);
}

function trivia(){
    for (i in candidates){
        document.getElementById(candidates[i]).className="choice";
        document.getElementById("avatar").src=`./img/no_one.png`;
    }
    switch(randomize(candidates)){
        case "2D":
            chosenBandMember="2D";
            chosenQuote= randomize(twoDeeQuotes);
            break;
        case "Murdoc":
            chosenBandMember="Murdoc";
            chosenQuote= randomize(murdocQuotes);
            break;
        case "Russel":
            chosenBandMember="Russel";
            chosenQuote= randomize(russelQuotes);
            break;
        case "Noodle":
            chosenBandMember="Noodle";
            chosenQuote= randomize(noodleQuotes);
            break;
    }
    quoteSec.innerHTML=`${chosenQuote.quote}`;
    // Now, grab the right answer.
    let rightAnswer= document.getElementById(chosenBandMember);
}

trivia();
