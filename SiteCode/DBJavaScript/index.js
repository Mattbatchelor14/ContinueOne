firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("user_div").style.display = "block";
      document.getElementById("login_div").style.display = "none";
    } else {
      // No user is signed in.
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
    }
  });

function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    
        window.alert("error: " + errorMessage);
    
      });

    
}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        document.getElementById("user_div").style.display = "none";
        document.getElementById("login_div").style.display = "block";

      }).catch(function(error) {
        // An error happened.
        window.alert("Error: " + errorMessage)
      });
}

function GetCompanyInformation(){

  var CompanyName = document.getElementById("CompanyName");
  var CompanyAddress = document.getElementById("CompanyAddress");
  var CompanyMainPhone = document.getElementById("CompanyMainPhone");
  var CompanyMainContact = document.getElementById("CompanyMainContact");
  var CompanySupportPin = document.getElementById("CompanySupportPin");


  var CompanyNameGet = firebase.database().ref().child()("CompanyName");

  CompanyNameGet.on('value', function(datasnapshot){
    CompanyName.innerText = datasnapshot.val();
  })
  

}