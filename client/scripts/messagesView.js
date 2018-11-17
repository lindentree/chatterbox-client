var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    Messages.storage.forEach(function(post) {
      MessagesView.renderMessage(post);
    });
  },

  renderMessage: function(allChats) {
    // debugger;
    var message = Messages.sanitizeMsg(allChats);
    var username = Messages.sanitizeUsr(allChats);
    var date = allChats.createdAt;

    var post = message + username + date;

    this.$chats.append(`<div class='post'>${post}</div>`);
  }
};

// var post = _.template(
// '<div class=\'indvChat\'>'
//   '<div class=\'username\'>' +
//   '<h3 id=\'user\'>' +
// '<div><%= username %$></div>'
//   '</h3>' +
//   '</div>' +
//   '<div class=\'message\'>' +
//   '<p>' +
//   '<%= message %>' +
//   '</p>' +
//   '</div>' +
//   '<div class=\'created-at\'>' +
//   '<p>' +
//   '<%= date %>' +
//   '</p>' +
//   '</div>' +
//   '</div>'
// );
