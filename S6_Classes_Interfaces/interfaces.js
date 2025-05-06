"use strict";
// Interface: only exist in TypeScript
let user;
user = {
    email: "test@gmail.com",
    password: "123456",
    login() {
        // reach out to a database, check credentials, create a session
    },
    logout() {
        // clear the session
    },
};
// Implementing Interfaces
class AuthenticatableUser {
    email;
    password;
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    login() {
        // ...
    }
    logout() {
        // ...
    }
}
