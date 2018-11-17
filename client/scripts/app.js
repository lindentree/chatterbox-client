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

  fetch: function(callback = () => {}) {
    Parse.readAll(data => {
      // examine the response from the server request:
      // console.log(data['results'][0]);
      Messages.storage = data['results'];
      console.log(Messages.storage);
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

'<div class=\'indvChat>' +
  '<div class=\'username\'>' +
  '<h3 id=\'user\'>' +
  '<%= chat.username %$>' +
  '</h3>' +
  '</div>' +
  '<div class=\'message\'>' +
  '<p>' +
  '<%= chat.text %>' +
  '</p>' +
  '</div>' +
  '<div class=\'created-at\'>' +
  '<p>' +
  '<%= chat.createdAt %>' +
  '</p>' +
  '</div>' +
  '</div>';
