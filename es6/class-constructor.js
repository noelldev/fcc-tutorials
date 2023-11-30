class Thermostat {
  constructor(temp) {
    let _cel = (5 / 9) * (temp - 32);
    this.temp = _cel;
  }

  get temperature() {
    return this.temp;
  }
  set temperature(tempC) {
    this.temp = tempC;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
console.log('get temp', thermos.temperature);
thermos.temperature = 26;
console.log('after set temp', thermos.temperature);
