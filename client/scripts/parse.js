var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    // todo: save a message to the server

    /*
    MESSAGE:

        var message = {
          username: 'Mel Brooks',
          text: 'It\'s good to be the king',
          roomname: 'lobby'
        };

    */



    // MISSING THE MESSAGE
    $.ajax({
      url: Parse.server,
      type: 'POST', // POST method instead
      data: JSON.stringify(message),
      contentType: 'application/json',//???
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to post the message', error);
      }
    });
  },

  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};