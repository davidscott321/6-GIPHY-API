$(document).ready(function(){
  generatePlaces();

  $(".btn").on("click",getCityResults);
});

var xhr;
var searchText;
var button;
var limit = 5;

var topics = ["Chicago, Illinois","New York, New York","San Francisco, California","Denver, Colorado","Las Vegas, Nevada","St. Louis, Missouri","Boston, Massachusetts","Houston, Texas","Phoenix, Arizona","Philadelphia, Pennsylvania"];

function generatePlaces()
{
  for (i=0;i<topics.length;i++)
  {
    button = "<button class='btn btn-primary' id='"+topics[i]+"'>"+topics[i];

    $(".buttons").append($(button).text(topics[i]));
  }
}

function getCityResults() 
{
  
  searchTextArray = $(this).attr("id").split(" ");
  for(var i=0;i<searchTextArray.length;i++)
  {
    searchText += searchTextArray[i]+"+";
  }

  console.log(searchText);
  xhr = $.get("https://api.giphy.com/v1/gifs/search?q="+searchText+"&api_key=N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd&limit="+limit);

  $(".results").html("");

  // //   xhr.done(function(data) {
  // //     if(data.data.length === 0)
  // //     {
  // //       $(".results").html($("<h2>No Results</h2>"));
  // //     }
  // //     else 
  // //     {
  // //       for (var i=0;i<limit;i++)
  // //       {
  // //         var src = "<img id='"+i+"' static='true' src='"+data.data[i].images.fixed_width_still.url+"'>";
  // //         var rating="<p id='"+"rating"+data.data[i].id+"' class='rating'>"+data.data[i].rating;

  // //         $(".results").append($("<div class='gifHolder' id='"+data.data[i].id+"'>"));
  // //         $("#"+data.data[i].id).append($(src)).append($(rating));
  // //         $("#"+"rating"+data.data[i].id).text("Rated "+data.data[i].rating.toUpperCase());
  // //       }

  // //       $("img").on("click", function(){
  // //         var id = $(this).attr("id");

  // //         if ($(this).attr("static") === "true")
  // //         {
  // //           $(this).attr("src", data.data[id].images.fixed_width.url);
  // //           $(this).attr("static", "false");
  // //         }
  // //         else if ($(this).attr("static") === "false")
  // //         {
  // //           $(this).attr("src",data.data[id].images.fixed_width_still.url);
  // //           $(this).attr("static","true");
  // //         }
  // //         else 
  // //         {
  // //           console.log("Something is wrong. Static is: "+$(this).attr("static"));
  // //         } 
  // //       });
  // //     }
  // });    
}