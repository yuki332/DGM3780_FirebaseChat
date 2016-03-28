//This is where the JS magig happens

  // Add Ref to Firebase

  // Register the Dom Elaments with jQuery
  var messageField = $('#messageInput');
  var nameField = $('#nameInput');
  var messageList = $('#example-messages');

  // Listem for Enter press
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //save data to firebase and clear the message field

    }
  });

  // Add a callback that is triggered for each chat message.

      // get the data

      // Create Elements for Message (<li> for messageElement and <strong class='example-chat-username'></strong> for nameElement)

      // Add the message to messageList

      //Scroll to bottom of MessageList

