import { User2 } from './09-clases-abreviadas'

class UserHerencia {
  constructor(
    public user: User2,
    public address: string
  ) { }
}

const user: User2 = new User2("Jose", "Ramirez")

const userComplete: UserHerencia = new UserHerencia(user, 'san lorenzo 405')

console.log(' --- Concepto de composicion: ---');
console.log('Apellido: ', userComplete.user.lastname);
console.log('Direccion: ', userComplete.address);


////


function genericos<T>(a: T): T {
  return a
}

console.log(genericos<string>('hola soy un string'));
console.log(genericos<number[]>([2, 3]));