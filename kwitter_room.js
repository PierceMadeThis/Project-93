
var firebaseConfig = {
      apiKey: "AIzaSyCCiQBbmGOxxVMRqhR6UkuE7zzE3jkTrsA",
      authDomain: "kwitter-db41b.firebaseapp.com",
      databaseURL: "https://kwitter-db41b-default-rtdb.firebaseio.com",
      projectId: "kwitter-db41b",
      storageBucket: "kwitter-db41b.appspot.com",
      messagingSenderId: "534085560696",
      appId: "1:534085560696:web:b1572d47d66eb00907408d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
