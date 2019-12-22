var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //we need messages.$chat...action (onClick ?)
    //once we have them,
    //  display them
    //  we have to use messages to use chat but...
    //  once we input our user name, then we can post messages
    //  question: how to we use the name input at the prompt? what has to happen here this to happen?
    //    Use App.username to refer to current user name.
    //  What about after we use input box?
    //
  },

  // data === messages --> this is the parameter we are passing in
  render: function(data) {
    // for each message we have use render message>
    data.forEach(message => MessagesView.renderMessage(message));
    // where is the message collection?
    //  on messages views, we already see the messages from above console.log
    //  if we should use forEach data:
    //    render each item from for each call.
    // ? where does 'data' go after it's called in fetch? is it assigned anywhere?
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(MessageView.render(message));
  }
};