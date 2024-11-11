// const largestProduct = (so: number) => {
//   let soString = so.toString();
//   const arr = [];
//   let maxResult = 0;
//   let maxSubstring = "";

//   for (let i = 0; i < soString.length - 2; i++) {
//     arr.push(soString.slice(i, i + 3));
//   }
//   console.log(arr);

//   arr.forEach((item) => {
//     let result = 1;
//     for (let j = 0; j < item.length; j++) {
//       result *= +item[j];
//     }
//     console.log("result:::", result);
//     console.log("què", result);
//     if (result > maxResult) {
//       maxResult = result;
//       maxSubstring = item;
//     }
//   });

//   console.log("lớn nhất:", maxSubstring);
// };

// largestProduct(13999789);

// function tinhtoan(so: number) {
//   let soString = so.toString();
//   let reuslt = 0
//   for (let i = 1; i < so; i++) {
//     if (so % i == 0) {
//       console.log(
//         reuslt += i
//       );
//     }

//   }
// }

// tinhtoan(28)

// // Đệ quy
// export function flatten(arr: Array<any>) {
//   const result: Array<number> = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result.push(...flatten(arr[i]));
//     } else if (typeof arr[i] === "number") {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(flatten([1, [2, 3, null, 4], [1, "haha"], [null], 5]));
// // flatten([1, [2, 3, null, 4], [null], 5]);

// export function keep<T>(arr: Array<T>, predicate: (element: T) => boolean): Array<T> {
//   const result: Array<T> = [];

//   for (let i = 0; i <= arr.length; i++) {
//     if (predicate(arr[i]) && arr[i] as number > 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// export function discard<T>(arr: Array<T>, predicate: (element: T) => boolean) {
//   const result: Array<T> = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (predicate(arr[i]) && arr[i] as number > 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(keep([1, 2, -4, "z", 3], (e) => e % 2 === 0));
// console.log(discard([1, 2, 3, 4, 5], (e) => e % 2 !== 0));

// export function isArmstrongNumber(number: number): any {
//   const numberToString = number.toString();
//   const numberToStringLength = numberToString.length;
//   let result: number = 0;
//   for (let i = 0; i < numberToStringLength; i++) {

//     result += Math.pow(+numberToString[i], numberToStringLength);
//   }

//   if (result === number) {
//     return result
//   }

//   return result
// }

// console.log(isArmstrongNumber(154));

// exercism

// console.log(2 * 2 + (3 % 4));

// console.log(1 + 1);

// console.log((9.1 % 9));

// let result = 0;
// for (let i = 1; i <= 3; i++) {
//   for (let j = i; j < i; j++) {
//     console.log("j", j);
//   }
// }

