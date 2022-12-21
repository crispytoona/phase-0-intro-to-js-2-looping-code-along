const cardNames = ["Guadalupe", "Ollie", "Aki"]
const cardEvent = ["surprise"]

function writeCards(cardNames){
    const card = []
    for (let i = 0; i < cardNames.length; i++) {
    card.push(`Thank you, ${cardNames[i]}, for the wonderful ${cardEvent} gift!`)
    }
    return card
}

writeCards(cardNames);
//

let numero = 10

function countDown(numero){
    for (let countDown = 10; countDown > -1; countDown--){
    console.log(countDown);
    }
    return numero
}

countDown(numero)