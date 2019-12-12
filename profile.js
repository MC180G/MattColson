const firebaseConfig {

apiKey: "AIzaSyA7kLrWzteUaPbmuwvmUPyMIW4-xPuwyZ0"
authDomain: ""
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/7.4.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/7.4.0/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


$("#submit").on("click", function (event) {
  event.preventDefault();

  var name = $("#name-input").val().trim();
  var email = $("#email-input").val().trim();
  var message = $("#message-input").val().trim();
  
  database.ref().push({
    name: name,
    email: email,
    message: message,
       });
