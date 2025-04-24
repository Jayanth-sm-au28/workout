// Promise.all()
//  is a method in JavaScript that allows you to run multiple promises concurrently and handle their results once all of them are resolved. It takes an array (or any iterable) of promises and returns a single promise that resolves when all of the promises in the array resolve. If any of the promises reject, the Promise.all() will immediately reject with the error of the first promise that rejects.
// const fetchData1 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const sucess = true;
//       sucess
//         ? resolve("data from api1 loaded")
//         : reject("error loading data from api1");
//     }, 2000);
//   });
// };
// const fetchData2 = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const sucess = false;
//       sucess
//         ? resolve("data from api2 loaded")
//         : reject("error loading data from api2");
//     }, 2000);
//   });
// };
// Promise.all([fetchData1(), fetchData2()])
//   .then((results) => {
//     console.log("all promises resolved ", results);
//   })
//   .catch((error) => {
//     console.log("one of the Promise is failed", error);
//   });

// ================================================================================
// promise chaining:
// Promise chaining is a powerful technique in JavaScript for handling asynchronous operations in a sequential manner. It involves chaining .then() methods to execute a series of tasks where the output of one task is passed as input to the next.

// function boilWater() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("water is Boiled");
//       resolve("boiled water");
//     }, 2000);
//   });
// }

// function teaPowder(water) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`tea is boiled`);
//       resolve("tea");
//     }, 2000);
//   });
// }

// function serveTea(tea) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`tea is served `);
//       resolve("enjoy the tea");
//     }, 2000);
//   });
// }
// boilWater()
//   .then((boiledWater) => teaPowder(boiledWater))
//   .then((teaPowder) => serveTea(teaPowder))
//   .then((message) => console.log(message))
//   .catch((error) => console.error("error", error));

// ==================================================================================
// What are async and await?

// async:
//Used to define a function that returns a Promise.
// The function automatically wraps its return value in a Promise.

// await:
// Used to pause the execution of an async function until the Promise is resolved.
// Makes asynchronous code look synchronous and easier to read.

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("water is Boiled");
      resolve("boiled water");
    }, 2000);
  });
}


function teaPowder(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`tea is boiled ${water}`);
      resolve("tea");
    }, 2000);
  });
}

function serveTea(tea) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`tea is served ${tea}`);
      resolve("enjoy the tea");
    }, 2000);
  });
}

async function makeTea() {
  try {
    const water = await boilWater();
    console.log("water", water)
    const tea = await teaPowder(water);
    const message = await serveTea(tea);
    console.log(message);
  } catch (error) {
    console.error("error", error);
  }
}
