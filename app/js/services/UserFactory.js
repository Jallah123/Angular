module.exports = function () {

    var service = {

        user: {
            username: '',
            token: ''
        },

        init: function(){
            this.user = JSON.parse(sessionStorage.getItem("user"));
            if(this.user == null) {
                this.user = {
                    username: '',
                    token: ''
                };
            }
        },

        saveUser: function(name, token) {
            this.user.username = name;
            this.user.token = token;
            sessionStorage.setItem("user", JSON.stringify(this.user));
            console.log("saved");
        },

        isLoggedIn: function(){
            return !(this.user.username == "" && this.user.token == "");
        },

        getUser: function() {
            return this.user;
        }
    }
    service.init();
    return service;
};