// Initial array of topics

var topics = ["Yoga", "Technology", "Programming", "Web Design", "Aliens", "Science", "Marvel", "Alchemy", "Art", "Architechture"];




function getData(nutty) {
    var querlyURL = $.get("https://api.giphy.com/v1/gifs/search?q=" + nutty + "+&api_key=WfgaDMiUzABZS2tCijpxYaPlPdlMTXSn&limit=10&offset&random");
    querlyURL.then(function (response) {
        console.log("success got data", response);
        var gifs = response.data
        displayGifs(gifs);
    });
}


function renderButtons() {
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("btn", "btn-primary");
        btn.text(topics[i]);
        $("#topics-view").append(btn);
    }
}
renderButtons();

$(document).on("click", ".btn", function (event) {

    var btntext = $(this).text();
    getData(btntext);
    console.log("hey");
});


function displayGifs(data) {
    console.log(data);
    for (i in data) {

        // Appending span>>p elements to div.inner
         
         
        var span = $("<span class='nextImage' id='div" + i + "'>");
        var p = $("<p> Rating: " + data[i].rating + "</p>")

        var image  =$("<img>")
  
        // for (var i = 0; i < 1; i++) 
      
        
        image.attr({
            "src": data[i].images.fixed_height.url,
            "data-animate":   data[i].images.original.url,
            "data-still": data[i].images.fixed_height_still.url,
            "class": "imgButton",
            "data-state": "still"
        });

        span.append(p);
        span.append(image);

        $(".inner").append(span);


    };

    
    


}

$(document).on("click", ".imgButton", function(event) {
 

    
    var state = $(this).attr("data-state");

    if (state === "still") {
        var gifSrc = $(this).attr("data-animate");
        $(this).attr("src", gifSrc);
        $(this).attr("data-state", "animate");

  
    } else {
     
        var gifSrc = $(this).attr("data-still");
        $(this).attr("src", gifSrc);
        $(this).attr("data-state", "still");
    }

    
})



// newImg.attr({
//     "src": responseElem.images.original_still.url,
//      "data-still": responseElem.images.original_still.url,
//      "data-animate": responseElem.images.original.url,
// /  "data-state": "still",
//     "class": "gif" });
// // This line selects ALL elements with the "gif" class and adds
// // // an event handler for the "click" event
//  $(".gif").on("click", function () {
// //     // $(this) just means "the element with class 'gif' that was clicked"
//    var state = $(this).attr("data-state");
// //     // $(this).attr("data-state") will either be "still" or "animate"
// //     // IF it's still: we change it to animate
//      if (state === "still") {
//       var newSrc = $(this).attr("data-animate");
//         $(this).attr("src", newSrc);
//         $(this).attr("data-state", "animate");
//         // OTHERWISE it's animate already, so we change it to still
//     } else {
//         var newSrc = $(this).attr("data-still");
//         $(this).attr("src", newSrc);
//         $(this).attr("data-state", "still");
//     }
// }); // end of click handler
