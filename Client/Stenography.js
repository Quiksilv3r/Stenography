
 Dictionary = new Mongo.Collection("dictionary");     
 
 if (Meteor.isClient) {
    Template.QwertyBox.events({
    	'keypress #qEntry': function (evt, ui) {	
     	 	if(event.keyCode == 13) {
     	 		var qwertyInput = evt.currentTarget.value;
        		var word = Dictionary.findOne({qwerty:qwertyInput});
        		if(word != undefined){
        			$("#sEntry").val(word.steno);	
        		}else{
        			alert("Invalid Entry, Try again");
        		} 
     	    }
    	 }
	});
}











// if (Meteor.isClient) {
//   // counter starts at 0
//   Session.setDefault('counter', 0);

//   Template.hello.helpers({
//     counter: function () {
//       return Session.get('counter');
//     }
//   });

//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }
//   });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   });
// }
