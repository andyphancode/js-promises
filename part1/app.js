let favNum = 42;
let baseURL = "http://numbersapi.com"

$.getJSON(`${baseURL}/${favNum}?json`)
.then(data => {
    console.log(data);
});

let multiNum = [42, 43, 44]

$.getJSON(`${baseURL}/${multiNum}?json`)
.then(data => {
    console.log(data);
    for (num in data) {
        $("body").append(`<p>${data[num]}</p>`);        
    }

});

let fourFacts = [];

for (let i = 1; i < 5; i++) {
    fourFacts.push($.getJSON(`${baseURL}/${favNum}?json`))
}

Promise.all(fourFacts)
.then(facts => {
    facts.forEach(fact => $("body").append(`<p>${fact.text}</p>`))
})