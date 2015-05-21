module.exports = function () {

    var service = {

        user: {
            username: '',
            token: ''
        },

        init: function(){
            service.user = JSON.parse(sessionStorage.getItem("user"));
            if(service.user == null) {
                service.user = {
                    username: '',
                    token: ''
                };
            }
        },

        saveUser: function(name, token) {
            service.user.username = name;
            service.user.token = token;
            sessionStorage.setItem("user", JSON.stringify(service.user));
            console.log("saved");
        },

        isLoggedIn: function(){
            return !(service.user.username == "" || service.user.token == "");
        },

        logOut: function(){
            console.log("remove");
            sessionStorage.removeItem("user");
            service.user.username = "";
            service.user.token = "";
        },

        getUser: function() {
            return service.user;
        }
    }
    service.init();
    return service;
};