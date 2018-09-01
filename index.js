function Scooter (year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}

const test = new Scooter('1992', 'red', 'big')

document.write(test.year)

function Driver (name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

const bil = new Driver ('bil', '23', 'lots')

document.write(bil.experience)

function PickupLocation (address, city) {
  this.address = address
  this.city = city
}
