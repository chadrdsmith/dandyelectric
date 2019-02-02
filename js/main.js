  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC4YKmo3LCoJ7Xfwqg74Q9_5gD0wVstAH0",
    authDomain: "contactform-82abf.firebaseapp.com",
    databaseURL: "https://contactform-82abf.firebaseio.com",
    projectId: "contactform-82abf",
    storageBucket: "contactform-82abf.appspot.com",
    messagingSenderId: "131827760768"
  };
  firebase.initializeApp(config);

  // Reference messages collection

  var messagesRef = firebase.database().ref('messages');

// Listen for submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm (e) {
    e.preventDefault();
    
    // get values
    let name = getInputVal('name');
    let email = getInputVal('email');
    let phone = getInputVal('phone');
    let message = getInputVal('message');

    //save message
    saveMessage(name, email, phone, message);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear Form
    document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal (id){
    return document.getElementById(id).value;
}

// save message to firebase

function saveMessage (name, email, phone, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        messsage: message
    });
}

let btn = document.getElementById('navBtn').addEventListener('click', goToForm);

function goToForm () {
    document.getElementById('anchor').scrollIntoView(true);
}
