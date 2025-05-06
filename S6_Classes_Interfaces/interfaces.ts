// Interface: only exist in TypeScript

//Interfaces as Object types
interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

let user: Authenticatable;
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
class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login(): void {
    // ...
  }
  logout(): void {
    // ...
  }
}

// Extending Interfaces
interface AuthenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}
