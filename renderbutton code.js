




function displayTopicInfo() {
    var topic = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "api_key=WfgaDMiUzABZS2tCijpxYaPlPdlMTXSn";

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=yoga&api_key=WfgaDMiUzABZS2tCijpxYaPlPdlMTXSn";
    // var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=WfgaDMiUzABZS2tCijpxYaPlPdlMTXSn";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("topics-view").empty();
        console.log(response.data[0])
        //How to grab our object in the array, response.data[0]
        var $topicDiv = $("<div>");
        var rating = res.Ratings[0].Value;
        console.log("rating", rating);
        var $rating = $("<div>").text("Rating: " + rating);
        $div.append($rating);



        $("#topics-view").prepend($div);


    })
};

// Function for displaying movie data
function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();

    // Loops through the array of movies
    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generates buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var btn = $("<button>");
        // Adds a class of movie to our button
        btn.addClass("topic");
        // Added a data-attribute
        btn.attr("data-name", topics[i]);
        // Provided the initial button text
        btn.text(topics[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(a);

    }
}
// This function handles events where the add movie button is clicked
$("#add-topic").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var topic = $("#topic-input").val().trim();

    // The movie from the textbox is then added to our array
    topics.push(topic);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

});

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".topic", displayTopicInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();