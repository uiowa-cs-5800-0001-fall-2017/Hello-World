# Chatbot

## General Description
The basic level of a chatbot should be a utilitarian piece of software. At minimum, the user can define a series of questions that will be asked in order in a chat window. After the end-user inputs a response to each question, the chatbot will ask the next question. Once all questions have been asked, the chatbot will then do something with the responses (ie: order pizza or register you to vote).

The form that this should take for the user in Scratch would be *prompt blocks* (blocks that output the text to the message window) followed by *variable blocks* (blocks that save the end-user input as a variable). Sending the request (pizza/voter registration) will be in the form of either a block or section of blocks that allow the user to format and send data to an external source.

In a more complex form of the chatbot, after receiving each end-user input, the chatbot will be able to check the input for validity and re-prompt as necessary. Additionally, it should be able to run verifications on the end-user input and pick an alternative execution path if needed (skip to a different block to execute next, loop back to give a prompt again, or even pick a new execution path entirely). The chatbot should also be able to send requests for data to external sources (ask the pizza database for an estimate on how long delivery will take based on the address the user provided).

## Requirements

#### User can develop a chatbot with blocks that are based on the click-and-drag interface of Scratch, but use chatbot operations and categories
  * example: *Same Scratch interface, but with chatbot blocks and chatbot categories in the middle section*
  * Same interface as Scratch, but we add in our own blocks and categories of blocks. There are existing blocks in Scratch that we can use, but we don't need to include blocks that won't be usable (such as sprite animation blocks).

#### Users can define prompts for the chatbot to "say" to the end-user.
  * ex: *A "Say" block will cause a message from the chatbot to appear in the message window when it is executed*
  * These can be considered an action or output. These prompts don't collect input by themselves. That requires an additional block.

#### Users can collect and verify the responses provided by end-users
  * ex: *If the chatbot asks for a type of pizza, it will repeat the prompt until the user inputs a type of pizza*
  * These are a separate block from the prompts. Instead of an action, these blocks wait for user input, then save it. Likely, the verify block will have to be a separate block that checks the variable saved by this block and then uses that to decide which next block to progress to.
  * Verification may include some level of spell-checking, but that should be a "nice to have" at this point.

#### Users can define multiple follow-up prompts that are chosen based on user input to previous prompts
  * ex: *If the user just says "plain cheese", then the chatbot will skip to getting delivery info, otherwise it will respond with "Any other toppings?"*
  * This would be implemented with the follow-up blocks discussed above (but they can be placed anywhere). They check a variable and then decide which block is executed next.

#### Users can loop back to an already executed block as needed.
  * ex: *If the end-user inputs "cat-food" as the pizza type, the chatbot will verify that this is not a type of pizza topping, then loop back to the prompt and ask again until the end-user answers with a proper pizza topping.*
  * This should be implemented as either a looping section (like the loops in Scratch) or a block that directs execution to previous block.

#### Users can define calls to send data to outside resources
  * ex: *The chatbot sends the pizza order to PizzaHut's server*
  * This would likely have to be a block section with sub-blocks for authentication aspects, data to be delivered, and url to send to.

#### Users can define calls to make requests for data (receive) from outside resources
  * ex: *The chatbot gets the current expected time it would take to deliver a pizza to the end-user's location*
  * Similar implementation as the send-data block, but this would also need to be able to use the data that gets returned. Possibly requires JSON parsing blocks?

#### Users can export their chatbot as an embeddable html widget
  * ex: *PizzaHut can export the chatbot, then have it display on their webpage*
  * This needs to be looked in to. Ideally, the user will be able to use a single line of html to embed the chatbot and the rest will come as a js file that they will be able to link to. The js file will do the actual building and running of the chatbot.

#### Users can save their chatbot within the Scratch-framework
  * ex: *PizzaHut has the chatbot save as a scratch file on their computer*
  * We should be able to do this the same way that Scratch does.

#### Users can see a preview of their chatbot. This preview has the same functionality of the final product and can be reset and refreshed to reflect any code changes made by the user.
  * ex: *The user can completely make a pizza order (and send the request) in the preview in order to test its functionality*
  * When the user clicks the start button, the chatbot is fully loaded in the preview window with all of the functionality of the product that they can export and embed into a website. We can use the same compiling/loading process that we would use for the export, but just load that into an html frame in the preview window.

#### End-users can see all of the past messages made by the chatbot and themselves in a scrolling chat window
  * ex: *When the chatbot asks the end-user to confirm their pizza order, the end-user can scroll through the history to double check what they have asked for*
  * This would be some kind of a scrollable html list. In the style of any text/messaging app, we should have speech bubbles on alternating sides of the frame that shift upwards as new messages appear. Messages from the bot appear on the left, messages from the end-user appear on the right. Adding icons to represent the users is extra, since the end-user can tell who is talking from which side the speech bubble is on.

## What Scratch Has
  Scratch already has variable elements, so we should take advantage of those. We just need to add blocks that set them based on user input, and add ways to use the variables in our action blocks. Scratch already has a way to check if a string has a substring, so we can use that instead of lists. We should add in type checking (so the user can check if the end-user enters "cheese" for as the tip), but the rest of the variable implementation in Scratch seems pretty robust.

  Scratch already has if-then-else and repeat-until blocks. We can use the repeat-until blocks to verify we get a desired response from the prompt and the if-then-else blocks to handle divergent executions. I think that it would also be a good idea to add in label and goto blocks (the label marks a point in the execution and goto would move the execution point to a specified label), as that would give the user more control and allow for more complex interactions.

  Wait-until and event blocks already exist, so we can use those to wait for end-user input, then either alter them to also capture end-user input or have a separate block that will do that separately.
