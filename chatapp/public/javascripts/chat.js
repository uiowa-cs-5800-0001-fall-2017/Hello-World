var socket = io();
var audio = new Audio('pizza.mp3');
var counter = 0;
audio.play();

//-----------------------------------------------------------------------------
// Emit chat message when enter key is pressed.
//-----------------------------------------------------------------------------

var div = ('<div id = "bot-bubble-message" >'+ "Wazzup! Want some pizza?" + "</div>");
$("#chat-container").append(div.toString() + "<br />");

counter = 0;
$("#chat-input").keydown(function(event) {
	 if (event.keyCode == 13) 
	 {
          event.preventDefault();
		  if($("#char-input").val() != ""){
			 socket.emit("chat-message", $("#chat-input").val());   
		  }
		  $("#chat-input").val("");
		  
		  $("#chat-container").animate({ scrollTop: 10000000 }, "fast"); //this makes the scroll bar go to the bottom.

      }
});

//-----------------------------------------------------------------------------
// Receive chat message from server
//-----------------------------------------------------------------------------
socket.on("chat-message", function(message) {
	var div = ('<div id = "chat-bubble-message" >'+ message + "</div>");
	$("#chat-container").append(div.toString() + "<br />");
	


			  
		  if(message == "Yes" && counter == 0){
			var div = ('<div id = "bot-bubble-message" >'+ "What topping would you like?" + "</div>");
			$("#chat-container").append(div.toString() + "<br />");
			counter++;
		  }
		  else if(message == "No" && counter == 0){
			  var div = ('<div id = "bot-bubble-message" >'+ "Ok. Come again later!" + "</div>");
			  $("#chat-container").append(div.toString() + "<br />");
			  socket.disconnect();
		}
		  else if(counter == 0)
		  {
			  var div = ('<div id = "bot-bubble-message" >'+ "I need a Yes or a No" + "</div>");
			  $("#chat-container").append(div.toString() + "<br />");
		  }
		  
		  else if(message == "pineapple" && counter == 1){
			var div = ('<div id = "bot-bubble-message" >'+ "How will you pay?" + "</div>");
			$("#chat-container").append(div.toString() + "<br />");
			counter++;
		  }
		  else if(message == "cheese" && counter == 1){
			var div = ('<div id = "bot-bubble-message" >'+ "How will you pay?" + "</div>");
			$("#chat-container").append(div.toString() + "<br />");
			counter++;
		  }
		  else if(counter == 1)
		  {
			var div = ('<div id = "bot-bubble-message" >'+ "I need a topping" + "</div>");
			$("#chat-container").append(div.toString() + "<br />");
		  }
		  
		  else if(message == "cash" && counter == 2)
		  {
			var div = ('<div id = "bot-bubble-message" >'+ "Thank you for your order" + "</div>");
			$("#chat-container").append(div.toString() + "<br />");		  
			counter++;			
		  }
		  
		  else if(message == "credit" && counter == 2)
		  {
			var div = ('<div id = "bot-bubble-message" >'+ "Thank you for your order" + "</div>");
			$("#chat-container").append(div.toString() + "<br />");			  
			counter++;			
		  }
		  
		  else if(counter == 3)
		  {
			var div = ('<div id = "bot-bubble-message" >'+ "Your order is on the way. Call 1-555-PLZ-WAIT if you have a concern." + "</div>");
			$("#chat-container").append(div.toString() + "<br />");
			$("#chat-container").animate({ scrollTop: $(this).height() }, "fast");			
		  }	
		  
		  
});
