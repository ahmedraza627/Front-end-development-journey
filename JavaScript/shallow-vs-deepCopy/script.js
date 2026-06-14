// Shallow VS DeepCopy..

// JSON method deep clone..

// const obj = {
//   name: "Ahmed Raza",
//   age: 25,
//   socials: {
//     facebook: {
//       acc1: "somename@gmail.com",
//       acc2: "somename@gmail.com",
//     },
//     instagram: {
//       acc1: "somename@gmail.com",
//       acc2: "somename@gmail.com",
//     },
//     twitter: {
//       paid: {
//         acc1: "somePaid@gmail.com",
//         acc2: "somePaid@gmail.com",
//       },
//       free: {
//         acc1: "someAccount@gmail.com",
//         acc2: "someAccount@gmail.com",
//       },
//     },
//   },
// };

// const obj2 = JSON.parse(JSON.stringify(obj));

// obj.socials.twitter.paid.acc1 = "Paid and Changed";
// console.log(obj.socials.twitter.paid.acc1);
// console.log(obj2.socials.twitter.paid.acc1);

// Own Logic to make deep copy..

const userInfo = {
  name: "Ahmed Raza",
  age: 25,
  socials: {
    facebook: {
      acc1: "somename@gmail.com",
      acc2: "somename@gmail.com",
    },
    instagram: {
      acc1: "somename@gmail.com",
      acc2: "somename@gmail.com",
    },
    twitter: {
      paid: {
        acc1: "somePaid@gmail.com",
        acc2: "somePaid@gmail.com",
      },
      free: {
        acc1: "someAccount@gmail.com",
        acc2: "someAccount@gmail.com",
      },
    },
  },
};

function makeDeepCopy(obj) {
  if (obj !== "object" || obj === null) {
    return obj;
  }
  const copiedVal = Array.isArray(obj) ? [] : {};
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copiedVal[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }
  return copiedVal;
}

const newUser = makeDeepCopy(userInfo);

newUser.socials.facebook.acc1 = "Changed"

console.log(newUser.socials.facebook.acc1);
console.log(userInfo.socials.facebook.acc1);

