const txt = 'babel test...';
console.log(txt);

//class構文
class Person {
  // console.log('test1');
  constructor(name, pref){
    this.name = name;
    this.pref = pref;
    console.log('test2');
  }
  greet() {
    console.log(`${this.name} from ${this.pref}`);
  }
}

let Okada = new Person('Okada', 'Tottori');
Okada.greet();
