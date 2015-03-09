Mussa Mubarki
Tommy Phan


1.  Our project consists of a social site where users can maintain a list of favorite topics.  These topics will consists of movies, television, games, and books.  With these lists, we can recommend to the user various movies, books, etc that the user does not have on their current list.  These recommendations will be based off other user’s lists that the user has in common with.   A user can simply access the website and use the “suggest” button to randomly suggest a movie, television, game, or book.  We will develop a simple algorithm that will first look for matches from other lists and then make the appropriate suggestions from that matched list.  This site will then tell the user who this suggestion was made from giving the user the opportunity to add him/her to their social circle.  

2. Some of the API we may utilize are as followed: 
   a. www.themoviedb.org
   b. www.thegamesdb.net
   c. https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html

3. Functionality
   a. https://www.themoviedb.org/documentation/api        
      i. We will be using this to possibly retrieve movie/tv covers and synopsis.
      ii. Allow the user to get metadata about the movie/tv show based off the recommendation.
   b. http://thegamesdb.net/
      i. We will be using this to get game artwork along with its synopsis
      ii. Its purpose will be very similar to themoviedb as it will allow the user to get further details of the recommendation.
   c. https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html
      i. We may use this as well to allow the user to purchase/rent the movie/tv/book directly from Amazon.

4. For our example API, we will be using themoviedb.  In the example, we developed a js app that takes input from the user and use it to retrieve the artwork of the movie.  More info can be found from the repo: https://github.com/mmubarki/473_project1/tree/master/API

5. We chose this API because it could possibly be used to give further information/metadata to the user.  If our site were to recommend a movie from another user’s list, it would be beneficial to display the movie cover along with a short synopsis to the user.  Also, the user may be interested in further information such as the cast and its review rating. It’s documentation can be found here: https://www.themoviedb.org/documentation/api        

6. Some of the potential issues we may encounter using this API are as followed:
   a. If the user misspells the movie title, the API will be unable to retrieve the request information.
   b. If the user enters a movie into their list that is currently not in the API’s database.

7. Our experience creating the example web page was quite pleasant.  Proper documentation of the API made it much easier for us to implement the API into our example page.  We highly recommend incorporating this API into our project due to its ease of use and free availability.

8. Using our example, if a user decides that the movie interests them, they can gain further  details about it by clicking on the artwork.  We can also use Amazon’s API to allow the user the option to purchase/rent the movie.  Our goal is to provide a complete experience for the user so that they may achieve all of this on our website.  
In our example we wrote function : callAPI that will be use for any API call. It receive API url, callback function in cases success or error,  data type (xml,json,jsonp,script),dataFormat call type is post or get. The function signature is:
callAPI(APIUrl,successCall,errorCall,dataType,callType,dataFormat).