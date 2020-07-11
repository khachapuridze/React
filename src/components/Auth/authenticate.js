class Authenticate {
    constructor() {
        this.authenticated = JSON.parse(localStorage.getItem("is_authenticated"));
    }

    login(cb) {
        this.authenticated = true;
        localStorage.setItem("is_authenticated","true")
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        localStorage.setItem("is_authenticated","false")
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Authenticate();