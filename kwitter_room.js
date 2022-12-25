
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPd5aX4VRHb-UeUECz5FqPF6qz6HJUneI",
    authDomain: "chatappproject-c3310.firebaseapp.com",
    projectId: "chatappproject-c3310",
    storageBucket: "chatappproject-c3310.appspot.com",
    messagingSenderId: "401455782870",
    appId: "1:401455782870:web:9b7bbb89ac77778b31e277"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";


    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";    
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
