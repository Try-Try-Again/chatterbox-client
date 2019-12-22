var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    //next thing to work on
    // lets build our initialize
    //
    //RoomsView.$button.....
    //Hey JQuery! make button begin room creation process when you click it

    //Hey JQuery! make selecter render a room based on what room is selected
    // On click:
    //   add property to Rooms with key = room name, value = []
    RoomsView.$button.click(Rooms.add());/*Rooms.add(   */

    RoomsView.$select.change(function() { console.log($(this).val()); });/*RoomsView.changeFunction*/

  },

  render: function() {
    //

  },

  // we need to know what parameter 'superLobby'--> name of the ROOM?
  renderRoom: function(roomName) {
    //RoomViews... select ... render()
    // expect($('#rooms select')
    RoomsView.$select.append(`<option value="${roomName}">${roomName}</option>`); //EXAMPLE FIX LATER
  },

  changeFunction: function(event) {
    //if change
    console.log(this);
  }

};
