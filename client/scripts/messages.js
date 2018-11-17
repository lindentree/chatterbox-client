var Messages = {
  storage: null,
  sanitizeMsg: function(chat) {
    var message = chat.text;
    var arr = message.split('');
    var sanitized = [];

    arr.forEach(function(letter) {
      if (letter === '<') {
        sanitized.push('&lt; nice try');
      } else if (letter === '>') {
        sanitized.push('&gt; nice try');
      } else if (letter === '&') {
        sanitized.push('&amp; nice try');
      } else if (letter === '/') {
        sanitized.push('&#x2F; nice try');
      } else if (letter === '(') {
        sanitized.push('parens nice try');
      } else {
        sanitized.push(letter);
      }
    });

    return sanitized.join('');
  },
  sanitizeUsr: function(person) {
    var user = chat.username;
    var arr = user.split('');
    var sanitized = [];

    arr.forEach(function(letter) {
      if (letter === '<') {
        sanitized.push('&lt; nice try');
      } else if (letter === '>') {
        sanitized.push('&gt; nice try');
      } else if (letter === '&') {
        sanitized.push('&amp; nice try');
      } else if (letter === '/') {
        sanitized.push('&#x2F; nice try');
      } else if (letter === '(') {
        sanitized.push('parens nice try');
      } else {
        sanitized.push(letter);
      }
    });

    return sanitized.join('');
  }
};
