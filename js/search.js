$('document').ready(function(){

  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var search;

  $('#searchButton').val(''); // Reset search field when page is loaded

  $('#searchButton').click(function(){
    search = $('#searchButton').val();
    console.log(search);
  })

  $('#searchButton').keypress(function(e){

      if(e.which == 13) { // If enter key pressed
          $('#searchButton').click(); // Trigger search button click event

          $.getJSON(flickerAPI, {
              tags: search,
              format: "json"
            },
          function(data){
            var photoHTML = '';
            if (data.items.length > 0) {
              $.each(data.items,function(i,photo) {
                photoHTML += '<li class="photograph">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<h2>' + photo.title + '</h2>';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
              }); // end each
            } else {
              photoHTML = "<p>No photos found that match: " + search + ".</p>"
            }
            $('#photos').html(photoHTML);
          }); // end getJSON
      }
  });

});
