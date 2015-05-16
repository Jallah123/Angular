module.exports = function () {

    var service = {

        user: {
            username: '',
            token: ''
        },

        init: function(){
            this.user = JSON.parse(sessionStorage.getItem("user"));
        },

        saveUser: function(name, token) {
            this.user.name = name;
            this.user.token = token;
            sessionStorage.setItem("user", JSON.stringify(this.user));
            console.log("saved");
        },

        isLoggedIn: function(){
            return !(this.user.name == "" && this.user.token == "");
        },

        getUser: function() {
            return this.user;
        }
    }
    service.init();
    return service;
};