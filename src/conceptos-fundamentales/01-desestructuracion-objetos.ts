interface User {
  name: string,
  lastname: string,
  isVerifed: boolean,
  birthdate: string,
  address: Address
}

interface Address {
  street: string,
  city: string,
  country: string
}

const user: User = {
  name: "David",
  lastname: "Maradiago",
  isVerifed: true,
  birthdate: "1980-10-09",
  address: {
    street: "avellenada 123",
    city: "Bs. As.",
    country: "Arg"
  }
}

console.log('Name: ', user.name);

const { isVerifed, name, lastname, birthdate: fechaDeNacimiento, address } = user

console.log(name);
console.log(lastname);
console.log(isVerifed);
console.log(fechaDeNacimiento);

const { street, city, country } = address;

console.log(street);
console.log(city);
console.log(country);

export { }