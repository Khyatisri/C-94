var firebaseConfig = {
    apiKey: "AIzaSyDURoqHrl7TFpSqR4y8WcwuqRZQCVZi-vA",
    authDomain: "practice-27973.firebaseapp.com",
    databaseURL: "https://practice-27973-default-rtdb.firebaseio.com",
    projectId: "practice-27973",
    storageBucket: "practice-27973.appspot.com",
    messagingSenderId: "221847003086",
    appId: "1:221847003086:web:940968cb7ab4f68fef959f"
  };
  firebase.initializeApp(firebaseConfig);

  function Adduser(){
username=document.getElementById("username").value;
  firebase.database().ref("/").child(username).update({
 purpose:"Addinguser"     
  });

  }
