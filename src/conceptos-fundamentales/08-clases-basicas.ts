
class User {

  public name: string
  public lastname: string

  constructor(name: string, lastname: string) {
    this.name = name
    this.lastname = lastname
  }

}

const user1: User = new User("Kevin", "Lugo")
console.log(user1.name);
console.log(user1.lastname);

const user2: User = new User("Napoleon", "Anaya")
console.log(user2.name);
console.log(user2.lastname); 