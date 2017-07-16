$( document ).ready(function() {

var config = {
    apiKey: "AIzaSyAH0tWhM_0iOoRnsy7wGhg5mHueLt2FAWQ",
    authDomain: "clicking-things-c5392.firebaseapp.com",
    databaseURL: "https://clicking-things-c5392.firebaseio.com",
    projectId: "clicking-things-c5392",
    storageBucket: "clicking-things-c5392.appspot.com",
    messagingSenderId: "581958573358"
  };

  firebase.initializeApp(config);



  var database = firebase.database();

var name = "";
var destination = "";
var startTime = "";
var frequency = "";

$("#hitMe").on("click", function(event) {
		
	event.preventDefault();

	name = $("#trainName").val().trim();
	destination = $("#destination").val().trim();
	startTime = moment($("#startTime").val().trim(), 
	frequency = $("#frequency").val().trim();


		console.log(name,destination,startTime,frequency)

	 database.ref().push({

	Name: name,
	Destination: destination,
	Time: startTime,
 	Frequency: frequency
	 });


});


database.ref().on("value", function(snapshot) {
	
var name = snapshot.val().name;
var destination = snapshot.val().destination;
var startTime = snapshot.val().startTime;
var frequency = snapshot.val().frequency;

console.log(snapshot.val());

console.log(name);
console.log(destination);
console.log(startTime);
console.log(frequency);





})
});