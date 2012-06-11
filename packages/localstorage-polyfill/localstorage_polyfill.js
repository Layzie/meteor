Meteor.startup(function() { // Since we need document.body to be defined
  if (!window.localStorage) {
    window.localStorage = (function () {

      var userdataKey = 'localStorage';
      var userdata = document.createElement('b');

      userdata.style.display = 'none';
      userdata.style.behavior = 'url("#default#userData")';
      document.body.appendChild(userdata);
      userdata.load(userdataKey);

      return {
        setItem: function (key, val) {
          userdata.setAttribute(key, val);
          userdata.save(userdataKey);
        },

        removeItem: function (key) {
          userdata.removeAttribute(key);
          userdata.save(userdataKey);
        },

        getItem: function (key) {
          return userdata.getAttribute(key);
        }
      };
    })();
  }
});
