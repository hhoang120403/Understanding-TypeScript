// enum Role {
//   Admin, // 0
//   Editor, // 1
//   Guest, // 2
// }

// let userRole: Role = Role.Admin;
// userRole = 2;

// ...

let userRole2: "admin" | "editor" | "guest" = "editor";
userRole2 = "guest";

type Role = "admin" | "editor" | "guest" | "reader";
type User = {
  name: string;
  age: number;
  role: Role;
  permission: string[];
};

function access(role: Role) {
  // ...
}
