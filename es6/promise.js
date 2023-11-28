const prom = (a) =>
  new Promise((resolve, reject) => {
    if (a) {
      resolve(console.log(a));
    }
    reject('no input');
  });

prom().catch((error) => console.error(error));
