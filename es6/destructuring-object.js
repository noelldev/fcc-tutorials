// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85,
// };

// const { max, min } = stats;
// console.log(max, min);

const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender,
  };
};
//automatically assign the arguments to the property of the return object not like {name: name, age:age, gender:gender}

console.log(createPerson('Max', 5, 'M'));
