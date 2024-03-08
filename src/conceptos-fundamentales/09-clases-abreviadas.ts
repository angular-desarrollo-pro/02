class User2 {
  constructor(
    public name: string,
    public lastname: string
  ) { }
}

const user: User2 = new User2('David', 'Yepes')

console.log(user.name);
console.log(user.lastname);

export { User2 }