var WebAdminApp = {};

WebAdminApp.appName = "Web Aministration Tool";
WebAdminApp.appVersion = 1.0;

WebAdminApp.UserModule = {
    data: [{ id: 1, username: 'satya', password: 'satya', email: 'satya@gmail.com', mobile: 34345332 }],
    addUser: function (user) {
        var newid=this.data.length+1;
        user.id=newid;
        this.data.push(user);
    },
    getUserByName: function (username) {
        for (i = 0; i < this.data.length; i++) {
            if (this.data[i].username == username) {
                return this.data[i];
                break;
            }
        }
        return null;
    },
    getUserById:function(id){
        for (i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                return this.data[i];
                break;
            }
        }
        return null;
    },
    loginUser: function (username, password) {
        var isValid = false;
        for (i = 0; i < this.data.length; i++) {
            if (this.data[i].username == username && this.data[i].password == password) {
                isValid = true;
                break;
            }
        }
        return isValid;
    },
    updateUser: function (user) {
        for (i = 0; i < this.data.length; i++) {
            if (this.data[i].id == user.id) {
                this.data[i] = user;
                break;
            }
        }
    },
    resetPassword: function (username, password) {
        var user = this.getUserByName(username);
        user.password = password;
        this.updateUser(user);

    }
};
