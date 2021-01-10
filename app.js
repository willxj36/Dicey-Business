class Die {
    constructor() {
        this.value = this.roll();
        $('#dice-container').append(`<div class="dice border border-3 border-dark rounded-3 m-3" id="${counter}">${this.value}</div>`);
    };

    roll= () => Math.floor(Math.random() * 6) + 1;
}

let counter = 0;

$('#generate').click(function() {
    counter++;
    new Die;
    });

$('#roll').click(function(e) {
    
});