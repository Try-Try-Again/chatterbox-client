var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log('these are the messages', data);
      // this app does nothing except console log.
      // where should we assign the data from readAll?
      //proposition:
      //  on messages views, we already see the messages from above console.log
      //  if we should use forEach data:
      //    render each item from for each call.
      // ? where does 'data' go after it's called in fetch? is it assigned anywhere?
      // ? shouled we even use fetch for this?
      // so what happens if we do not have any messages? fetch would break  and we would need it to return:
      // ANSWER?: I dont think it break. I think fetch would return empty array
      // if(!data.results ) then would return []
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
