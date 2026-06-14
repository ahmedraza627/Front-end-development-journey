// 🏦 Task 1: OOP & Class Extension Challenge
// Ek class banao User jisme name aur email ho.

// Ek class banao Admin jo extends kare User ko. Iske constructor mein super() use karke parent ka data lo, aur iska apna ek method banao deleteUser(userObj) jo console par print kare "Admin [AdminName] deleted user [UserName]".

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewProfile() {
    console.log(`Profile: ${this.name} ${this.email}`);
  }
}

class Admin extends User {
  constructor(name, email, role) {
    super(name, email);
    this.role = role;
  }
  deleteUser(userObj) {
    if (!userObj || !userObj.name) {
      console.error("Error: Invalid user object provided");
      return;
    }
    console.log(
      `👑 Admin [${this.name}] (Role: ${this.role}) deleted user: [${userObj.name}]`,
    );
  }
}

let regularUser = new User("Mudasir Junaid", "mudasir@example.com");
let superAdmin = new Admin("Ahmed Raza", "ahmed@tecno.com", "SuperAdmin");

regularUser.viewProfile(); // Output: Profile: Mudasir Junaid (mudasir@example.com)
superAdmin.viewProfile();

superAdmin.deleteUser(regularUser);
superAdmin.deleteUser(null);