//CHALLENGE 1

const cars = ["Ford","BMW","Nissan","Chrysler","Dodge"]
console.log(cars.length)

// CHALLENGE 2

const moreCars = ["VW","JEEP", "Chevrolet","Honda"]
const totalCars = cars.concat(moreCars)
console.log(totalCars)

//CHALLENGE 3

const findingIndex = totalCars.indexOf("Honda")
const findingLastIndex = totalCars.lastIndexOf("Ford")
console.log(findingIndex, findingLastIndex)

//CHALLENGE 4

const stringOfCars = totalCars.join()
console.log(stringOfCars)

//CHALLENGE 5
const carsFromString = stringOfCars.split(',')
console.log(carsFromString)

//CHALLENGE 6
const carsInReverse = totalCars.reverse()
console.log(carsInReverse)

//CHALLENGE 7
const sortedCars = carsInReverse.sort()
console.log(sortedCars)
console.log(sortedCars.indexOf('BMW'))

//CHALLENGE 8
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4,6)
console.log(reptiles)
console.log(pets)

//CHALLENGE 9
const removedReptiles = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
removedReptiles.splice(4, 2, 'hamster')
console.log(removedReptiles)
console.log(pets)

//CHLLENGE 10
const removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

//CHALLENGE 11
pets.push(removedPet)
console.log(pets)

//CHALLENGE 12
pets.shift()
console.log(pets)

//CHALLENGE 13
pets.unshift('turtle')
console.log(pets)

//Challenge 14 
const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
    return  arr[index] = num + 2
}
//BEFORE FOREACH()
console.log(numbers)

//AFTER FOREACH()
numbers.forEach(addTwo)
console.log(numbers)