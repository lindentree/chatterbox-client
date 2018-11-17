var Friends = {

  toggleStatus: function (username) {
    if (this.allUsers[username] === true) {
      this.allUsers[username] = false;
    } else if (this.allUsers[username] === false) {
      this.allUsers[username] = true;
    } else {
      return 'user not found.'
    }
  },

  allUsers: {
  }

};