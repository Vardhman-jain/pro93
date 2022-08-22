

  // Your web app's Firebase configuration
  
  var firebaseConfig = {
    apiKey: "AIzaSyARcIbHuY7np91xfcU9nCEHYstkIRRPt5c",
    authDomain: "class-test-b1373.firebaseapp.com",
    databaseURL: "https://class-test-b1373-default-rtdb.firebaseio.com",
    projectId: "class-test-b1373",
    storageBucket: "class-test-b1373.appspot.com",
    messagingSenderId: "371808296",
    appId: "1:371808296:web:052303a6ec97960de1bd1d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom() {
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose:"add room name"
    });
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -"+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
  getData();

  function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
  }

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     window.location="index.html";
  }