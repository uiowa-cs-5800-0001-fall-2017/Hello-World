
                counter = 0;
            var div = ('<div id = "bot-bubble-message" >'+ "Wazzup! Want some pizza?" + "</div>");
            $("#chat-container").append(div.toString() + "<br />");  
            $("#chat-input").keydown(function(event) {
	           if (event.keyCode == 13) 
	           {
                    event.preventDefault();
		          if($("#chat-input").val() != "" && ($("#chat-input").val().charAt(0) != '<' && $("#chat-input").val().charAt($("#chat-input").val().length) != '>')) //if not trying to inject HTML
                  {
			         var div = ('<div id = "chat-bubble-message" >'+ $("#chat-input").val() + "</div>"); 
                      $("#chat-container").append(div.toString() + "<br />");
                      
                      if($("#chat-input").val() == "Yes" && counter == 0){
                        var div = ('<div id = "bot-bubble-message" >'+ "What topping would you like?" + "</div>");
                        $("#chat-container").append(div.toString() + "<br />");
                        counter++;
                      }
                      else if($("#chat-input").val() == "No" && counter == 0){
                          var div = ('<div id = "bot-bubble-message" >'+ "Ok. Come again later!" + "</div>");
                          $("#chat-container").append(div.toString() + "<br />");
                          socket.disconnect();
                    }
                      else if(counter == 0)
                      {
                          var div = ('<div id = "bot-bubble-message" >'+ "I need a Yes or a No" + "</div>");
                          $("#chat-container").append(div.toString() + "<br />");
                      }

                      else if($("#chat-input").val() == "pineapple" && counter == 1){
                        var div = ('<div id = "bot-bubble-message" >'+ "How will you pay?" + "</div>");
                        $("#chat-container").append(div.toString() + "<br />");
                        counter++;
                      }
                      else if($("#chat-input").val() == "cheese" && counter == 1){
                        var div = ('<div id = "bot-bubble-message" >'+ "How will you pay?" + "</div>");
                        $("#chat-container").append(div.toString() + "<br />");
                        counter++;
                      }
                      else if(counter == 1)
                      {
                        var div = ('<div id = "bot-bubble-message" >'+ "I need a topping" + "</div>");
                        $("#chat-container").append(div.toString() + "<br />");
                      }

                      else if($("#chat-input").val() == "cash" && counter == 2)
                      {
                        var div = ('<div id = "bot-bubble-message" >'+ "Thank you for your order" + "</div>");
                        $("#chat-container").append(div.toString() + "<br />");		  
                        counter++;			
                      }

                      else if($("#chat-input").val() == "credit" && counter == 2)
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
		          }
              $("#chat-input").val("");
		      $("#chat-container").animate({ scrollTop: 10000000 }, "fast"); //this makes the scroll bar go to the bottom.
                   
               }
            });  