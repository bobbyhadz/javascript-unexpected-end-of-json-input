// Unexpected end of JSON input Error in JavaScript

// EXAMPLE 1 - Converting a JavaScript value to a JSON string

const arr = ['alice', 'bobby', 'carl'];

// ✅ Convert JavaScript value to JSON string
const jsonStr = JSON.stringify(arr);

// 👇️ '["alice","bobby","carl"]'
console.log(jsonStr);

// 👇️ string
console.log(typeof jsonStr);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using a `try/catch` statement to handle the error

// try {
//   const result = JSON.parse('');
//   console.log(result);
// } catch (err) {
//   // 👇️ SyntaxError: Unexpected end of JSON input
//   console.log('👉️ error', err);
// }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using JSON.parse correctly

// const jsonStr = `
// {
//   "id": 1,
//   "name": "Alice"
// }
// `;

// // ✅ parse JSON string into JS value
// const result = JSON.parse(jsonStr);
// console.log(result); // 👉️ { id: 1, name: 'Alice' }

// // ✅ convert JS value to JSON string
// const jsonStr2 = JSON.stringify({id: 1, name: 'Bobby'});
// console.log(jsonStr2); // 👉️ '{"id":1,"name":"Bobby"}'
