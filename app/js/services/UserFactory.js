module.exports = function () {

    var service = {

        user: {
            id: '',
            _id: '',
            token: ''
        },

        init: function(){
            service.user = JSON.parse(sessionStorage.getItem("user"));
            if(service.user == null) {
                service.user = {
                    id: '',
                    token: ''
                };
            }
        },

        saveUser: function(name, token) {
            service.user.id = name;
            service.user.token = token;
            service.user._id = name;
            sessionStorage.setItem("user", JSON.stringify(service.user));
            console.log("saved");
        },

        isLoggedIn: function(){
            return !(service.user.id == "" || service.user.token == "");
        },

        logOut: function(){
            console.log("remove");
            sessionStorage.removeItem("user");
            service.user.id = "";
            service.user.token = "";
        },

        getUser: function() {
            return service.user;
        }
    }
    service.init();
    return service;
};