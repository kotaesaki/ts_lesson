class Person{
  constructor(public name: string,private age: number){
  }
  incrementAge(){
    this.age += 1
  }
  greeting(this: Person){
    console.log(`Hello! ${this.name}, ${this.age}`)
  }
}
class Teacher extends Person {
  get subject(){
    return this._subject;
  }
  set subject(value){
    this._subject = value
  }
  constructor(name:string, age:number, private _subject: string){
    super(name,age);
  }
}
const teacher = new Teacher('yeah', 44,'Math')
teacher.subject = 'fsda'
console.log(teacher.subject)