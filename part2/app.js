let baseURL = 'https://deckofcardsapi.com/api/deck';

$.getJSON(`${baseURL}/new/draw/`).then(data => {
    console.log(data.cards);
    let suit = data.cards[0]['suit'];
    let value = data.cards[0]['value'];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
});

let firstCard;
$.getJSON(`${baseURL}/new/draw`)
    .then(data => {
        firstCard = data.cards[0];
        return $.getJSON(`${baseURL}/${data.deck_id}/draw`);
    })
    .then(data => {
        let secondCard = data.cards[0];
        console.log(`${firstCard.value.toLowerCase()} of ${firstCard.suit.toLowerCase()}`);
        console.log(`${secondCard.value.toLowerCase()} of ${secondCard.suit.toLowerCase()}`);
    })

let deckId = null;
let $btn = $('button');
let $cardArea = $('#cards');
  
$.getJSON(`${baseURL}/new/shuffle/`).then(data => {
    deckId = data.deck_id;
});

$btn.on('click', function() {
    $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
        let cardImageURL = data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardImageURL,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (data.remaining === 0) $btn.remove();
    });
});