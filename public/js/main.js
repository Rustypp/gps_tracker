function doPoll(){
    $.get('/current_loc.txt', function(data) {
        $('div#current-location').text(data);  // process results here
        setTimeout(doPoll,500);
    });
}

doPoll();
