//primitives : number, string, boolean

let age: number = 25

let userName: string | string[] = 'name'

let isInstructor: boolean = false

//More complex types

let hobbies: string[]

hobbies = ['string', 'soccer']

let person: Person

person = {
  name: 'Max',
  age: 12,
}

let people: Person[]

//Type inference

let course: string | number = 'React - The Complete Guide'
course = 12345

//Type Aliases
type Person = {
  name: string
  age: number
}

//Functions & types

const add1 = (a: number, b: number) => a + b

function print(value: any) {
  console.log(value)
}

//Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array]
  return newArray
}
const demoArray = [1, 2, 3]
const updatedArray = insertAtBeginning(demoArray, -1)
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')
