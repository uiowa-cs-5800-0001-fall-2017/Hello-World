$("#chat-input").keydown(function(event) { 
	if (event.keyCode == 13) { 
		event.preventDefault(); 
		if ($("#char-input").val() != "") 
		{ 
			userResponse = $("#chat-input").val(); 
			var div = ('<div id = "bot-bubble-message" >'+ userResponse + "</div>"); 
			$("#chat-container").append(div.toString() + "<br />"); 
		} 
		$("#chat-input").val(""); 
		$("#chat-container").animate({ scrollTop: 10000000 }, "fast");
	}
});

