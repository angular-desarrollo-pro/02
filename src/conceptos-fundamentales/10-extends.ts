

import { User2 } from './09-clases-abreviadas'

class UserExtend extends User2 {
  constructor(
    name: string,
    lastname: string,
    public address: string
  ) {
    super(name, lastname)
  }
}

const user: UserExtend = new UserExtend("Juan", "Cruz", "Avellaneda 324")

console.log(user.name);
console.log(user.address);

export { }