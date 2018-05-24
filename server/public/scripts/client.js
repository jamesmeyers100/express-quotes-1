$(document).ready(onReady);

function onReady(){
    console.log(`I'm ready`);
    getQuotes();
    $('#addButton').on('click', addQuote);
    // $('#refreshButton').on('click', getQuotes);
}

function getQuotes(){
    console.log('in getQuote');
    $.ajax({
        method: 'GET',
        url: '/quotes',
    }).then( function(response){
        console.log('back from server with:', response);
        displayQuotes(response);
    });
}//end getQuote

function displayQuotes(quotes){
    let el = $('#quoteList');
    el.empty();
    for(let quote of quotes){
        el.append(`<li>"${quote.quote}" - ${quote.author}</li>`);
    };// End for
}//end displayQuotes

function addQuote(){
    let objectToSend = {
        quote: $('#quoteIn').val(),
        author: $('#authorIn').val(),
    };
    $('.inputs').val('');
    $.ajax({
        method: 'POST',
        url: '/quotes',
        data: objectToSend,
    }).then(function (response){
        console.log('posting Quote', response);
    });
    getQuotes();
}