import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';

import './main.html';



Template.content.onCreated(function helloOnCreated() {
  
});

Template.content.helpers({

});

Template.content.events({
  'click input'(event, template) {

if(template.$('#lebenslauf').is(":checked")){
	$("#content-lebenslauf").css("display", "block");
	$("#content-portfolio").css("display", "none");
}
else{
	$("#content-lebenslauf").css("display", "none");
	$("#content-portfolio").css("display", "block");
}
	
  },
});
