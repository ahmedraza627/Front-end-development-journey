// 1. Truthy / Falsy Trap:
// if ("0") console.log("A");
// Ans: Nothing will be printed because "0" falsy value main convert hoojayegaa means coercion hooga and agar if main falsy value hai toh if statement run nahi karay gii..


// if (0) console.log("B");
// Ans: Nothing will be printed because "0" falsy value main convert hoojayegaa and agar if main falsy value hai toh if statement run nahi karay gii issliye "B" print nahi hooga..


// if ([]) console.log("C");
// Ans:Nothing will be printed because "[]" falsy value main convert hoojayegaa and agar if main falsy value hai toh if statement run nahi karay gii issliye C output main show nahi karay gaa..

// if (null) console.log("D");
// Ans:Nothing will be printed because "null" falsy value main convert hoojayegaa and agar if main falsy value hai toh if statement run nahi karay gii issliye D output main show nahi karay gaa..

// 👉 Tasks:

// Output predict karo
// Har line ka reason do (coercion + truthy / falsy)

// 2. Scope + Hoisting Mix:

var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();

// Ans: iss main test main jab hum console log karenge toh a ki value hamare paas undefined aayegii because a humne functrion ke andar baad main declare kia hai and usse call pehle kia hai jisse hoisting kehte hain and var main hositing par undefined value aati hai and let, const main error aata hai.. so var main hoisting allowed hai and let, const main allowed nahi hai.. 

// 👉 Tasks:

// Output batao
// Step-by-step execution explain karo (hoisting + scope)

// 3.var vs let (Block Scope)

for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log("Outside:", i);

// 👉 Tasks:  

// Output predict karo
// Explain karo ke i loop ke baad bhi accessible kyun hai
// Ans:console log jo for ke andar hai uss main 0-2 tak print hooga and jo console log bahir hai uss main 3 print hooga because for loop jab dekhay gaa 3 par aakar ke ab ye condition false hogae hai so woh loop exit karday gaa and phir jo last value hoogi jo 3 hai woh console log loop ke bahir waale main print karday gaa and i loop ke bahir accessible issliye hai because i var se declare kia hai and var block scoped nahi hai var ke variable aap block ke bahir bhi access karsakte hoo because var block ko respect nahi karta

// Same code with let:
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
// console.log("Outside:", i);

// 👉 Tasks:

// Output kya hoga ?
// Error kyun aayega

// Ans: iss main console log jo for ke andar hai uss main 0-2 print hooga and 3 par aakar jab condition false hoojayegii toh woh exit karjaygeaa and jab bahir i ki value maangi hai toh woh access nahi karsakay gaa because i let variable se declare huya hai and let blocked scope hai means let aap block ke bahir access nahi karsakte so issliye error aajayegaa..


// Q4: 

// let x = 10;

// if (true) {
//   let x = 20;
//   console.log(x);
// }

// console.log(x);

// 👉 Agar yeh bina soche correct explain kar diya
// toh haan, tum thoda stable ho rahe ho

// Ans: so ab jo if ke andar ka console log hai uss main output main error aayegaa value nahi aayegii because let hoisting allowe nahi karta so issliye woh variable ko hoist nahi karsakta hai meanwhile jo bahir ka console log hai uss main x ki value 10 aayegii because jo bahir ka bana huya sabse pehle ka x hai usski value 10 thii jo ke access hoojayegaa iss main..

