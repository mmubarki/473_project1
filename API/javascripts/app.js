
var poster =  function(){

   $('#movie_name').focus(function(){
      var full = $("#results").has("img").length ? true : false;
      if(full == false){
         $('#results').empty();
      }
   });

   var getPoster = function(){

        var film = $('#movie_name').val();

         if(film == ''){

            $('#results').html("<h3>Please enter movie name</h3>");

         } else {

            $('#results').html("<h3>please wait</h3>");
            $.ajax({
              url: 'http://api.themoviedb.org/3/search/movie?api_key=ae22cfb91b3d2c0a8179d99a29831489&query=' + film ,
              data: {
                 format: 'json'
              },
              error: function() {
                 $('#results').html('<h3>error in ajax call</h3><img id="poster" src="" />');
              },
              dataType: 'jsonp',
              success: function(data) {
                if (data.total_results > 0){
                  $('#results').html('<h3 class="loading">We found the poster</h3><img id="poster" src="http://image.tmdb.org//t//p//w500' + data.results[0].poster_path+ '"/>');
                } else {
                  $('#results').html('<h3 class="loading">We do not find what you search</h3><img id="poster" src="" />');
                }
              },
              type: 'GET'
           });
          }

        return false;
   }

   $('#search').click(getPoster);
   $('#movie_name').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

};
$(document).ready(poster);
