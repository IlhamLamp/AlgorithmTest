// javascript
let population = 1;

for (let day = 1; day <= 50; day++) {
  console.log(`Hari ke-${day} dengan populasi ${population}`);
  if ((day + 1) % 3 == 0) {
    if (population % 2 == 1) {
      population = (population - 1) / 2;
    } else {
      population /= 2;
    }
  } else {
    population *= 3;
  }
}

console.log(population);
