// Initialize Firebase
var config = {
  apiKey: "AIzaSyBSFAnLzOJEhWWreMm1BIJSINt7gxptDpw",
  authDomain: "css-grid-contact-form-7b011.firebaseapp.com",
  databaseURL: "https://css-grid-contact-form-7b011.firebaseio.com",
  projectId: "css-grid-contact-form-7b011",
  storageBucket: "",
  messagingSenderId: "733163080982"
};
firebase.initializeApp(config);

// Reference messages collection
let messagesRef = firebase.database().ref("messages");

// Listen for form submission
document.getElementById("contact-form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  let name = getInputVal("name");
  let company = getInputVal("company");
  let email = getInputVal("email");
  let phone = getInputVal("phone");
  let message = getInputVal("message");

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form inputs
  document.getElementById("contact-form").reset;
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(name, company, email, phone, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
