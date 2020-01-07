// const firebaseConfig {

// apiKey: "AIzaSyA7kLrWzteUaPbmuwvmUPyMIW4-xPuwyZ0"
// authDomain: ""
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.4.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.4.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
// }

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();


// $("#submit").on("click", function (event) {
//   event.preventDefault();

//   var name = $("#name-input").val().trim();
//   var email = $("#email-input").val().trim();
//   var message = $("#message-input").val().trim();

//   database.ref().push({
//     name: name,
//     email: email,
//     message: message,
//        });

// *------------Project Carosel------------*

$(document).ready(function () {
  let queryURL = "https://content.guardianapis.com/search?q=breweries&api-key=633aec89-5021-4996-9f22-c733936a76d9&show-fields=thumbnail,headline,shortUrl"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    for (let i = 0; i < response.response.results.length; i++) {
      let pic = response.response.results[i].fields.thumbnail;
      let headline = response.response.results[i].fields.headline;
      let url = response.response.results[i].webUrl;


      let carouselItem = $("<div class='carousel-item'>");
      if (i === 0) carouselItem.addClass("active");
      let image = $("<img class='d-block w-100'>");
      image.attr("src", pic);
      image.attr("alt", "artical image");
      let caption = $("<div class='carousel-caption d-md-block'>");
      let h2 = $("<h2 class='headline'>").text(headline);
      caption.append(h2);
      carouselItem.append(image);
      carouselItem.append(caption);
      let preButton = $("<a class='carousel-control-prev' href='#prof-slides' role='button' data-slide='prev'>")
      let span = $("<span class='carousel-control-prev-icon' aria-hidden='true'>");
      let span2 = $("<span class='sr-only'>");
      preButton.append(span);
      preButton.append(span2);
      let nxtButton = $("<a class='carousel-control-next' href='#prof-slides' role='button' data-slide='next'>")
      let nxtSpan = $("<span class='carousel-control-next-icon' aria-hidden='true'>");
      nxtButton.append(nxtSpan);
      nxtButton.append(span2);
      carouselItem.append(preButton);
      carouselItem.append(nxtButton);
      $(".carousel-inner").append(carouselItem);

      caption.on("click", function () {

        window.open(url, "_blank")

      })
    }
  })
})
