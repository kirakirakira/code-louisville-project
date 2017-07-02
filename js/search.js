$('document').ready(function(){

  $('#searchButton').val(''); // Reset search field when page is loaded

  $('#searchButton').keypress(function(e){
    if(e.which == 13) { // If enter key pressed
        alert("Search feature not yet implemented");
    }
  });
});
