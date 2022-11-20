// 38 people
//charter hjolds 15
//vans cost 250 per day
//how much does it cost to rent?
//how much would it cost per person

const people = 38;
const charterVanRent = 250;
const charterVanSeats = 15;

calculateSeats = (people/charterVanSeats);
calculateRentPerPerson = (charterVanRent/people);

console.log("you would need, " + calculateSeats.toFixed(0) + " vans.");
console.log("each person would pay, " + calculateRentPerPerson.toFixed(2));