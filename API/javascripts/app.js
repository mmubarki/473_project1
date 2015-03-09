
 /*
    this is main function
  */
var main =  function(){
   $('#movie_name').focus(function(){
      var full = $("#results").has("img").length ? true : false;
      if(full == false){
         $('#results').empty();
      }
   });

   /*
      callAPI is used to call any API
   */
   function callAPI(APIUrl,successCall,errorCall,dataType,callType,dataFormat){
      $.ajax({
        url:APIUrl,
        data: {
          format: dataFormat
        },
        error : function () {
          errorCall();
        },
        dataType: dataType,
        success: function (data) {
          successCall(data);
        },
        type: callType
      });
   }

   /*
      this is the enent function will be call when click search
   */
   var getPoster = function(){

        var film = $('#movie_name').val();

         if(film == ''){

            $('#results').html("<h3>Please enter movie name</h3>");

         } else {

            $('#results').html("<h3>please wait</h3>");
            var url = 'http://api.themoviedb.org/3/search/movie?api_key=ae22cfb91b3d2c0a8179d99a29831489&query=' + film;
            
            var successCall = function(data) {
                console.log("inside successCall");
                console.log(data);
                if (data.total_results > 0){
                  $('#results').html('<h3 class="loading">We found the poster</h3><img id="poster" src="http://image.tmdb.org//t//p//w500' + data.results[0].poster_path+ '"/>');
                } else {
                  $('#results').html('<h3 class="loading">We do not find what you search</h3><img id="poster" src="" />');
                }
              }
            var errorCall =function() {
                 $('#results').html('<h3>error in ajax call</h3><img id="poster" src="" />');
              };
            var dataFormat='json',
                dataType='jsonp',
                callType='GET';
            callAPI(url,successCall,errorCall,dataType,callType,dataFormat);
          }

        return false;
   }


  // set button event function
   $('#search').click(getPoster);
   // we can search by click enter afetr type
   $('#movie_name').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

};
$(document).ready(main);
