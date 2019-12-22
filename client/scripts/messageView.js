var MessageView = {
  // username: 'Mel Brooks',
  // text: 'I didn\'t get a harumph outa that guy.!',
  // roomname: 'lobby'
  // <%= name %>
  render: _.template(`

      <div class="chat">
        <div class="username" id="<%= username %>"><%= username %></div>
        <div class="text">"><%= text %></div>
      </div>

    `)

};