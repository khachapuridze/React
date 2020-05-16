class Auth {
    constructor() {
        this.authenticated = localStorage.getItem("token");
    }

    login(cb) {
        this.authenticated = true;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        localStorage.clear();
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
