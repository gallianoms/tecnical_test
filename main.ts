export {}

//? Problem 1.A - Create an Object with a `hello` method that writes `Hello <name>` in the console

interface Person {
  greeting(name: string): void
}

const person: Person = {
  greeting(name) {
    console.log(`Hello ${name}`)
  },
}

// person.greeting('Salva')

//? Problem 1.B - How would you make the name immutable?
//? (Can write or just describe)

// Object.freeze(person)

//? Problem 2 - Write a function that logs the 5 cities that occur the most in the array below in order from the most number of occurrences to least

const citiesList: string[] = [
  'nashville',
  'nashville',
  'los angeles',
  'nashville',
  'memphis',
  'barcelona',
  'los angeles',
  'sevilla',
  'madrid',
  'canary islands',
  'barcelona',
  'madrid',
  'nashville',
  'barcelona',
  'london',
  'berlin',
  'madrid',
  'nashville',
  'london',
  'madrid',
]

interface City {
  name: string
  count: number
}

const logMostCities = (): string[] => {
  const arr: City[] = []
  const arrAux: string[] = []

  const set = new Set(citiesList)
  const uniqueCities = Array.from(set)

  for (const city of uniqueCities) {
    arr.push({ name: city, count: 0 })
  }

  for (const i of citiesList) {
    for (const j of arr) {
      if (i === j.name) {
        j.count += 1
      }
    }
  }

  const sortArr = arr.sort((a, b) => b.count - a.count)

  for (let i = 0; i < 5; i++) {
    arrAux.push(sortArr[i].name)
  }

  return arrAux
}

console.log(logMostCities())
