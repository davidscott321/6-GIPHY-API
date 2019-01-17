$(document).ready(function(){
  generatePlaces();

  $(".btn").on("click",getCityResults);
});

var xhr;
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
  $(".results").html("");

  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=N5OKJJ5Kx7gKlaYEZha1x3zZvZli3Wwd&limit=5");
  xhr.done(function(data) { console.log("success got data", data); });

  var returnedObject = $.get(xhr);

  returnedObject.done(function(data) {
    if (data.data.length === 0)
    {
      $(".results").html($("<h2>No Results</h2>"));
    }
    else 
    {
      for (var i=0;i<limit;i++)
      {
        var src = "<img id='"+i+"' static='true' src='"+data.data[i].images.fixed_width_still.url+"'>";
        var rating="<p id='"+"rating"+data.data[i].id+"' class='rating'>"+data.data[i].rating;

        $(".results").append($("<div class='gifHolder' id='"+data.data[i].id+"'>"));
        $("#"+data.data[i].id).append($(src)).append($(rating));
        $("#"+"rating"+data.data[i].id).text("Rated "+data.data[i].rating.toUpperCase());
      }

      $("img").on("click", function(){
        var id = $(this).attr("id");

        if ($(this).attr("static") === "true")
        {
          $(this).attr("src", data.data[id].images.fixed_width.url);
          $(this).attr("static", "false");
        }
        else if ($(this).attr("static") === "false")
        {
          $(this).attr("src",data.data[id].images.fixed_width_still.url);
          $(this).attr("static","true");
        }
        else 
        {
          console.log("Something is wrong. Static is: "+$(this).attr("static"));
        } 
      });
    }
  });    
}