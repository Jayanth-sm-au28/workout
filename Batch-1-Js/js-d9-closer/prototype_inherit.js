// prototype/inherit:
// In JavaScript, prototypes are a powerful feature that allow objects to share properties and methods.

// let parent = {
//   name: "john",
//   age: 30,
//   phoneNo: 1234567,
//   city: "Mumbai",
//   area: "Bhandra",
// };

// let child = {
//   name: "Baby",
//   age: 12,
// };
// Object.setPrototypeOf(child,parent)
// // Object.setPrototypeOf(child,parent)
// console.log(child.city)
// console.log(child.phoneNo)

let robotProtoType = {
  walk: function () {
    console.log("Robot is Walking ");
  },
  talk: function () {
    console.log(" Robot is Talking ");
  },
};
const robot = Object.create(robotProtoType);
// const robot2 = Object.create(robotProtoType)
robot.walk();
// robot1.talk();
// robot2.walk();
// robot2.talk();


