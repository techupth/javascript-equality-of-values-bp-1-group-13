function isPlainObject (valse) {
  return (typeof(valse)) === "object" && valse !== null && true !== Array.isArray(valse)   
    }
// Example case
let result1 = isPlainObject({ name : "John" });
let result2 = isPlainObject(null);
let result3 = isPlainObject(["apples","oranges"]);
let result4 = isPlainObject(undefined) 
// ผลลัพธ์ควรที่ได้จาก Example case
console.log(result1); //true
console.log(result2); // false
console.log(result3); // false
