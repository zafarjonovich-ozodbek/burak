// TASK T

// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.
function mergeSortedArrays(list1: number[], list2: number[]): number[] {
  return list1.concat(list2).sort((a, b) => a - b);
}

const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

console.log(result);

// TASK S:

// Shunday function yozing, u numberlardan tashkil topgan array qabul
//  qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2
// function missingNumber(numbers: any) {
//   for (let i = 0; i <= numbers.length; i++) {
//     if (!numbers.includes(i)) {
//       return i;
//     }
//   }
// }

// console.log(missingNumber([3, 0, 1])); // 2
// console.log(missingNumber([0, 1])); // 2
// console.log(missingNumber([2, 3, 5, 0, 1])); // 4

// TASK R:

// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
// function calculate(str: any) {
//   return str
//     .split("+")
//     .map(Number)
//     .reduce((sum: any, number: any) => sum + number, 0);
// }

// console.log(calculate("1 + 3")); // 4
// console.log(calculate("10 + 20 + 5")); // 35

// // TASK Q:

// Shunday function yozing, u 2 ta parametrga ega bo'lib
// birinchisi object, ikkinchisi string bo'lsin.
// Agar qabul qilinayotgan ikkinchi string, objectning
// biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

// MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
// Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda
// function hasProperty(obj: any, property: any) {
//   return property in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// // true

// console.log(hasProperty({ name: "BMW", model: "M3" }, "color"));
// // false

// TASK P:

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// function objectToArray(obj: any) {
//   let newObj: any[] = [];
//   for (let key in obj) {
//     newObj.push([key, obj[key]]);
//   }
//   return newObj;
// }
// const result = objectToArray({ a: 10, b: 20 });
// console.log(result);

// TASK O:

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.
// function calculateSumOfNumbers(arr: any) {
//   let sum = 0;
//   for (const item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }
//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35])); // 45

// TASK N:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindrom(str: string) {
//   const x = str.split("").reverse().join("");

//   if (str === x) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrom("dad")); //true
// console.log(palindrom("mom")); //true
// console.log(palindrom("son")); //false

// ASK M:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function sqNumber(arr: number[]) {
//   let result = [];

//   for (let item of arr) {
//     console.log(`number: ${item}, square: ${item * item}`);
//     result.push({ number: item, square: item * item });
//   }
//   return result;
// }

// console.log(sqNumber([5, 6, 7]));

//  ============== TASK L: ===============

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverse(a: string) {
//   return a
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverse("Never give up!"));
