function isPlainObject(value) {
  let result  = Array.isArray(value) !== true && value !== null && typeof(value) === "object";
  let unObject = typeof(value) !== "object" && "this is not object"
  
  return result || unObject
  
}

// Example case
let result1 = isPlainObject({ name: "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples", "oranges"]);
let result4 = isPlainObject(undefined); // test undefined
let result5 = isPlainObject({ key: "asd" }); //test anathor object is true

// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
console.log(result4);
console.log(result5);



