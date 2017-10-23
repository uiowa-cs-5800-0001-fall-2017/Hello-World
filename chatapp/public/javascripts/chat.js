var socket = io();
var audio = new Audio('pizza.mp3');
var counter = 0;
audio.play();

//-----------------------------------------------------------------------------
// Emit chat message when enter key is pressed.
//-----------------------------------------------------------------------------
socket.emit("chat-message","Wazzup! Want some pizza?");
counter = 0;
$("#chat-input").keydown(function(event) {
	
      if (event.keyCode == 13) 
	  {
          event.preventDefault();
		  if($("#chat-input").val() == "Yes" && counter == 0){
			socket.emit("chat-message", $("#chat-input").val());   
			socket.emit("chat-message", "What topping would you like?" + counter.toString());
			counter++;
		  }
		  else if($("#chat-input").val() == "No" && counter == 0){
			  socket.emit("chat-message", $("#chat-input").val());   
			  socket.emit("chat-message", "Ok. Come again later!");
			  counter++;
		  }
		  else if(counter == 0)
		  {
			  socket.emit("chat-message", $("#chat-input").val());   
			  socket.emit("chat-message", "Sorry. I need yes or no"+ counter.toString());
		  }

		  //else if($("#chat-input").val() == "credit" || $("#chat-input").val() == "cash" && counter == 2){
		//	socket.emit("chat-message", $("#chat-input").val());   
		//	socket.emit("chat-message", "Sounds great! Your order is getting ready!" + "<br />" + "Bot disconnecting. Call 1-800-NO-PIZZA for help"+ counter.toString());
		//	socket.disconnect()
		//  }
		  else if($("#char-input").val() != ""){
			 socket.emit("chat-message", $("#chat-input").val()+ counter.toString());   
		  }
		  $("#chat-input").val("");
      }
});

//-----------------------------------------------------------------------------
// Receive chat message from server.
//-----------------------------------------------------------------------------
socket.on("chat-message", function(message) {
	$("#chat-container").append(message + "<br />")
});
