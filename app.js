class Die {
    constructor() {
        $('#dice-container').append(`<div class="dice border border-3 border-dark rounded-3 m-3" id="${counter}"></div>`);
        this.div = $(`#${counter}`);
        this.roll();
        this.value = value;
    };

    roll() {
        let value = Math.floor(Math.random() * 6) + 1;
        this.value = `${value}`;
        this.div.text(this.value);
        return value;
    }
}

let div;
let value;
let counter = 0;
let dice = [];

$('#generate').click(function() {
    counter++;
    let newDie = new Die;
    newDie;
    dice.push(newDie);
    console.log(dice);
});

$('#roll').click(function() {
    dice.forEach((i) => i.roll());
});

// $('#sum').click(function(