// const twoSum = function (nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]; // 7
//     if (map.has(complement)) {
//       // 7 map ichida bormi ? false
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i); // mapga qoshadi numsni o-sini shudaynmi
//   }
// };

// let res = twoSum([2, 7, 11, 15], 9);
// let res = twoSum([3,2,4], 6);
// let res = twoSum([3,3], 6);

//===============================================

// problem 2 isPolindrome
// function isPalindrome(num) {
//   let arrNum = num.toString().split('').reverse().join('');
//   if (Number(arrNum) === num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// ==============================
// 1-masala: Juft sonlar yig‘indisi
// Vazifa:
// Berilgan butun son n uchun 1 dan n gacha bo‘lgan faqat juft sonlar yig‘indisini qaytaruvchi funksiya yozing.
// function sumEven(num) {
//   let counter = 0;
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//       counter += i;
//     }
//   }
//   return counter;
// }

// let res = sumEven(10); // 2 + 4 + 6 + 8 + 10 = 30
// console.log(res);

//====================================================

// 2-masala: Eng uzun so‘z
// Vazifa:
// Berilgan matndan eng uzun so‘zni toping. Faqat birinchi uchragan eng uzun so‘zni qaytaring.

// function longestWord(str) {
//   let longWord = '';
//   let strArr = str.split(' ').forEach((word) => {
//     if (longWord.length < word.length) {
//       longWord = word;
//     }
//   });

//   return longWord;
// }

// let res = longestWord('Men JavaScriptni yaxshi ko‘raman!'); // "JavaScriptni"

// console.log(res);

//==========================================================

// 3-masala: FizzBuzz
// Vazifa:
// 1 dan n gacha bo‘lgan sonlarni quyidagi qoidalarga ko‘ra chop eting:
// 3 ga bo‘linadigan son o‘rniga "Fizz"
// 5 ga bo‘linadigan son o‘rniga "Buzz"
// Ham 3, ham 5 ga bo‘linadigan son o‘rniga "FizzBuzz"
// Aks holda o‘zini chiqaring

// function fizzBuzz(n) {
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 == 0) {
//       console.log('Fizz');
//     } else if (i % 5 == 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);
// 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"

//=====================================================
// 1-masala: So‘z ichidagi unli harflar soni
// Vazifa:
// Berilgan matnda nechta unli harf borligini toping (a, e, i, o, u harflari, katta-kichik farqsiz).

// function countVowels(str) {
//   let counter = 0;
//   const unliHarflar = 'aeiouAEIOU'; // bu qatorda unli harflar kiritilishi kerak edi
//   for (let i = 0; i < str.length; i++) { // <= emas, < bo‘lishi kerak
//     if (unliHarflar.includes(str[i])) {
//       counter++;
//     }
//   }
//   return counter;
// }

//==========================================

// 2-masala: Takrorlanuvchi elementni topish
// Vazifa:
// Berilgan array ichida birinchi bo‘lib takrorlangan elementni qaytaring. Agar yo‘q bo‘lsa, undefined qaytaring.

// function findDuplicate(arr) {
//   let num = undefined;
//   arr.forEach((element, index, arr) => {
//     if (index !== arr.lastIndexOf(element)) {
//       num = element;
//     }
//   });
//   console.log(num);

//   return num;
// }

// function findDuplicate(arr) {
//   let seen = new Set();
//   for (let el of arr) {
//     if (seen.has(el)) return el;
//     seen.add(el);
//   }
//   return undefined;
// }

// findDuplicate([2, 5, 1, 2, 3, 5, 1, 2, 4]); // 2
// findDuplicate([1, 2, 3, 4]); // undefined

//============================
// Eng ko‘p takrorlangan harfni topish
// Vazifa:
// Berilgan satrda eng ko‘p takrorlangan harfni toping va uni qaytaring.
// Bo‘sh joylar, belgilar e’tiborga olinmasin. Agar bir nechta harflar bir xil takrorlangan bo‘lsa, birinchi uchraganini qaytaring.

// function mostFrequentChar(str) {
//   let word = str
//     .toLowerCase()
//     .trim()
//     .split('')
//     .reduce((acc, curVal) => {
//       if (curVal in acc) {
//         acc[curVal] += 1;
//       } else if (curVal !== ' ') {
//         acc[curVal] = 1;
//       }
//       return acc;
//     }, {});
//   let maxCount = 0;
//   let mostFrequent = '';

//   for (let char in word) {
//     if (maxCount < word[char]) {
//       maxCount = word[char];
//       mostFrequent = char;
//     }
//   }
//   return mostFrequent;
// }

// let res = mostFrequentChar('assssalomu alaykum');
// console.log(res);

//================================================
// 2-masala: Anagram tekshirish
// Vazifa:
// Ikki so‘z berilgan. Ular anagram ekanligini aniqlang.
// Anagram — harflari bir xil, lekin tartibi boshqacha bo‘lgan so‘zlar (masalan: "listen" va "silent").

// ✅ Shartlar:
// Faqat harflarni hisobga oling, boshqa belgilar bo‘lsa, e’tibor bermang.
// Katta-kichik harf farqi bo‘lmasin.
// Bo‘sh joylar e’tiborga olinmaydi.

// const isAnagram = (prop1, prop2) => {
//   let newProp1 = prop1
//     .toLowerCase()
//     .replace(/[^a-z]/g, '')
//     .split('')
//     .sort();
//   let newProp2 = prop2
//     .toLowerCase()
//     .replace(/[^a-z]/g, '')
//     .split('')
//     .sort();
//   if (newProp1.length !== newProp2.length) {
//     return false;
//   }

//   let anagram = false;
//   for (let i = 0; i <= newProp1.length; i++) {
//     if (newProp1[i] === newProp2[i]) {
//       anagram = true;
//     } else {
//       anagram = false;
//     }
//   }
//   return anagram;
// };

// const isAnagram = (str1, str2) => {
//   const normalize = (str) =>
//     str
//       .toLowerCase()
//       .replace(/[^a-z]/g, '')
//       .split('')
//       .sort()
//       .join('');

//   return normalize(str1) === normalize(str2);
// };

// console.log(isAnagram('listen', 'silent'));
// console.log(isAnagram('Hello', 'Hello'));
// console.log(isAnagram('Hello', 'Hello'));

//==========================================================

// Yagona elementni toping
// Vazifa:
// Berilgan arrayda barcha elementlar juftlab kelgan, faqat bitta elementdan bitta dona bor. O‘sha elementni topuvchi funksiya yozing.
// Arrayda raqamlar bo‘ladi, va barcha raqamlar 2 martadan qatnashgan bo‘ladi, faqat bitta elementdan tashqari.

// function findSingle(arr) {
//   let obj = arr.reduce((acc, curVal) => {
//     if (curVal in acc) {
//       acc[curVal] += 1;
//     } else {
//       acc[curVal] = 1;
//     }
//     return acc;
//   }, {});

//   for (let num in obj) {
//     if (obj[num] === 1) {
//       return num;
//     }
//   }

// }

//2-usul

// function findSingle(arr) {
//   return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
// }

// console.log(findSingle([2, 3, 5, 4, 5, 3, 4]));
// console.log(findSingle([1, 1, 2]));
// console.log(findSingle([7]));

//=====================================

// 4-masala: So‘zdagi takrorlanuvchi birinchi harfni toping
// Vazifa:
// Berilgan satrda birinchi marta takrorlangan harfni toping.
// Agar hammasi unikal bo‘lsa, undefined qaytaring.

// function firstDuplicateChar(str) {
//   let firstDuplicate = str
//     .toLowerCase()
//     .replace(/[^a-z]/g, '')
//     .split('');
//   let unikArr = new Set(firstDuplicate);

//   if ([...unikArr].length === firstDuplicate.length) {
//     return undefined;
//   } else {
//     return firstDuplicate.find(
//       (item, index, arr) => index !== arr.lastIndexOf(item)
//     );
//   }
// }

// let seen = new Set();

// for (let ch of str) {
//   if (seen.has(ch)) return ch;
//   seen.add(ch);
// }
// return undefined;

// console.log(firstDuplicateChar('javascript'));
// console.log(firstDuplicateChar('abcde'));
// console.log(firstDuplicateChar('hello'));

//=====================================================

// 5-masala: So‘zlarni teskari tartibda chiqarish
// Vazifa:
// Berilgan gapdagi so‘zlarni teskari tartibda chiqaradigan funksiya yozing.
// Faqat so‘zlar o‘rnini almashtiring, har bir so‘z ichidagi harflar joyida qoladi.

// function reverseWords(str) {
//   let arr = str.split(' ').reverse().join(' ');
//   return arr;
// }

// console.log(reverseWords('salom Asadbek'));

//======================================================
// 6-masala: So‘zlar ichidagi harflarni teskari qilish
// Vazifa:
// Gapdagi har bir so‘zning harflarini teskari qilib, umumiy tartibni saqlab qoling.

// function reverseLetters(str) {
//   let newStr = str
//     .split(' ')
//     .map((item) => {
//       return item.split('').reverse().join('');
//     })
//     .join(' ');

//   return newStr;
// }

// console.log(reverseLetters('Men React o‘rganayapman'));

//=================================================

// 7-masala: Faqat raqamlarni ajratib olish
// Vazifa:
// Berilgan matndan faqat raqamlarni ajratib olib, ularni bitta yangi stringga birlashtiring.
// Agar hech qanday raqam bo‘lmasa, "raqam topilmadi" deb qaytaring.

// function extractNumbers(str) {
//   let numberStr = '';
//   for (let i of str) {
//     if (!isNaN(i) && i !== ' ') {
//       numberStr += i;
//     }
//     // console.log(i);
//   }

//   return numberStr ? numberStr : 'raqam topilmadi';
// }

// console.log(extractNumbers('Bugun 2025-yil 7-iyul'));
// console.log(extractNumbers('Men 2 ta olma va 4 ta banan oldim'));

//=================================================================

// Masala: Slug generator (URL friendly)
// Vazifa:
// Berilgan sarlavhadan (title) slug yasovchi funksiya yozing — masalan, URL uchun.
// Slug — bu kichik harflar, bo‘sh joy o‘rniga -, va faqat harf/raqamlar bo‘ladi.

// function generateSlug(title) {
//   return title
//     .toLowerCase()
//     .replace(/[^a-z0-9\s]/g, '')
//     .trim()
//     .replace(/\s+/g, '-');
// }

// console.log(generateSlug('Men React o‘rganayapman!'));

//=======================================================
// masala: Email manzilini tekshirish
// Vazifa:
// Foydalanuvchi kiritgan string haqiqiy email manzilmi yoki yo‘qmi — shuni tekshiradigan funksiya yozing.
// function isValidEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }
// console.log(isValidEmail('asadbek@gmail.com'));
// console.log(isValidEmail('test123@domainco'));

//==================================================
// CRUD uchun boshlang‘ich masala:
// 🧩 Masala: Mahsulotlar ro‘yxatini boshqarish
// Vazifa:
// Quyidagi funksiyalarni yozing:

// createProduct(name) — mahsulot qo‘shadi

// getProducts() — barcha mahsulotni qaytaradi

// updateProduct(oldName, newName) — nomni yangilaydi

// deleteProduct(name) — mahsulotni o‘chiradi

// let products = ['olma', 'anor', 'banan'];

// function getProducts() {
//   return products;
// }

// function createProduct(item) {
//   products.push(item);
// }
// createProduct('shaftoli');

// function updateProduct(oldName, newName) {
//     products = products.map((item) =>
//         item === oldName ? newName : item
//       );

//   getProducts(products);
// }
// updateProduct('anor', 'anjir');

// function deleteProduct(name) {
//   products = products.filter((item) => item !== name);

//   getProducts(products);
// }

// deleteProduct('banan');

//==============================

// Obyektlar ro‘yxati bilan CRUD

// createProduct(name) – yangi mahsulot qo‘shadi (id avtomatik)

// getProducts() – mahsulotlar ro‘yxatini qaytaradi

// updateProduct(id, newName) – id bo‘yicha nomini o‘zgartiradi

// deleteProduct(id) – id bo‘yicha mahsulotni o‘chiradi

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
// ];

// function getProducts() {
//   return products;
// }

// function createProduct(name) {
//   const newId = products.length ? products[products.length - 1].id + 1 : 1;
//   products.push({ id: newId, name });
// }

// const updateProduct = (id, newName) => {
//   products = products.map((prod) =>
//     prod.id === id ? { ...prod, name: newName } : prod
//   );
// };

// function deleteProduct(id) {
//   products = products.filter((item) => item.id !== id);
// }

//=====================================

// Bugun quyidagilarni qo‘shamiz:

// 🔍 searchProducts(keyword)
// — mahsulot nomida keyword bo‘lsa, chiqarish

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
// ];
// let filteredProducts = [...products];

// function searchProducts(keyword) {
//   if (!keyword) {
//     filteredProducts = [...products]; // 🔁 bo‘sh bo‘lsa, tiklaymiz
//   } else {
//     filteredProducts = products.filter((item) =>
//       item.name.toLowerCase().includes(keyword.toLowerCase())
//     );
//   }
// }

// searchProducts('an');

//=====================================================

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
//   { id: 4, name: 'shaftoli' },
//   { id: 5, name: 'gilos' },
//   { id: 6, name: 'nok' },
//   { id: 7, name: 'uzum' },
// ];

// function paginateProducts(page, perPage) {
//   const startIndex = (page - 1) * perPage;
//   const endIndex = startIndex + perPage;
//   return products.slice(startIndex, endIndex);
// }

// console.log(paginateProducts(1, 4));

//==========================================
// Mahsulotlarni name bo‘yicha tartiblash (sort)

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
//   { id: 4, name: 'shaftoli' },
//   { id: 5, name: 'gilos' },
// ];

// function sortProducts(order) {
//   if (order === 'asc') {
//     return products.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (order === 'desc') {
//     return products.sort((a, b) => b.name.localeCompare(a.name));
//   } else {
//     throw new Error("Xatolikka yo'l qo'ydingiz");
//   }
// }

// sortProducts('asc');
// sortProducts('desc');

//==================================================
// Mahsulotga inStock: true qo‘shish
// 🎯 Vazifa:
// Yangi array qaytaruvchi funksiya yozing:
// Har bir mahsulotga inStock: true qo‘shilsin
// Asl products o‘zgarmasin

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
// ];
// function addStockFlag(products) {
//   return (products = products.map((item) => {
//     return { ...item, inStock: true };
//   }));
// }

// console.log(addStockFlag(products));

//=================================================
// Nomidagi harflar soni 5 yoki undan ko‘p bo‘lgan mahsulotlar
//

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
//   { id: 4, name: 'shaftoli' },
//   { id: 5, name: 'gilos' },
// ];

// function filterLongNames(products) {
//   return (products = products.filter((product) => {
//     return product.name.length >= 5;
//   }));
// }

// console.log(filterLongNames(products));

//=======================================================
// Katta harfga o‘zgartirish + filter

// 🎯 Vazifa:
// Quyidagi ishlarni bir funksiyada bajaring:
// Faqat name.length >= 5 bo‘lgan mahsulotlarni ajratib oling
// Har bir nameni katta harflar bilan (toUpperCase()) qaytaring
// name o‘rniga uppercaseName sifatida qaytaring

// let products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
//   { id: 4, name: 'shaftoli' },
//   { id: 5, name: 'gilos' },
// ];

// function transformProducts(products) {
//   return (products = products
//     .filter((product) => product.name.length >= 5)
//     .map((item) => {
//       return { id: item.id, uppercaseName: item.name.toUpperCase() };
//     }));
// }

// console.log(transformProducts(products));

//===================================================

// Chegirma berish — faqat uzun nomlilarga

// Nima qilishi kerak?
// Faqat nomi 6 yoki undan ko‘p harfdan iborat mahsulotlarni ajrating
// Har biriga 10% chegirma bering (price * 0.9)
// Yangi massiv qaytaring, original products o‘zgarmasin

// let products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'anor', price: 10000 },
//   { id: 3, name: 'banan', price: 12000 },
//   { id: 4, name: 'shaftoli', price: 15000 },
//   { id: 5, name: 'gilos', price: 11000 },
// ];

// function applyDiscount(products) {
//   return (products = products
//     .filter((product) => product.name.length >= 6)
//     .map((item) => {
//       return { ...item, price: item.price * 0.9 };
//     }));
// }

// console.log(applyDiscount(products));

//=================================
//Yangi mahsulotlarga "YANGI" badge qo‘shish
// 🎯 Vazifa:
// Faqat so‘nggi 7 kunda qo‘shilgan mahsulotlarni ajratib ol
// Har biriga { ...product, badge: "YANGI" } sifatida badge qo‘sh
// Yangi array qaytar (original products o‘zgarmasin)

// let products = [
//   { id: 1, name: 'olma', createdAt: '2024-11-01' },
//   { id: 2, name: 'anor', createdAt: '2025-06-01' },
//   { id: 3, name: 'banan', createdAt: '2025-07-20' },
//   { id: 4, name: 'shaftoli', createdAt: '2025-07-26' },
//   { id: 5, name: 'gilos', createdAt: '2025-07-22' },
// ];

// function markNewProducts(products) {
//   const now = new Date();
//   let sevenDay = 7 * 24 * 60 * 60 * 1000;
//   return (newProducts = products
//     .filter((product) => now - new Date(product.createdAt) <= sevenDay)
//     .map((item) => {
//       return { ...item, badge: 'YANGI' };
//     }));
// }

// console.log(markNewProducts(products));

//=======================================================
//reduce bilan array ichidagi sonlar nechta marta qatnashganini hisoblang

// Masala:
// Quyidagi arrayda har bir son necha marta qatnashganini aniqlang.
// Natija obyekt bo‘lishi kerak.

// const numbers = [4, 2, 4, 3, 2, 1, 4, 2];

// let objNumbers = numbers.reduce((acc, curVal) => {
//   if (curVal in acc) {
//     acc[curVal] += 1;
//   } else {
//     acc[curVal] = 1;
//   }
//   return acc;
// }, {});

// console.log(objNumbers);

//======================================================

// Barcha mahsulotlar narxi 5000 so‘mdan katta ekanini tekshiring
// Masala:
// Quyidagi arraydagi barcha mahsulotlar narxi 5000 so‘mdan katta yoki yo‘qligini tekshiring.

// const products = [
//   { name: 'olma', price: 8000 },
//   { name: 'anor', price: 10000 },
//   { name: 'banan', price: 3000 }, // bu past!
// ];

// function priceProducts(products) {
//   let a = products.every((product) => product.price >= 5000);
//   return a;
// }

// console.log(priceProducts(products));

//========================================

// Narxi 10 000 so‘mdan past birinchi mahsulotning indeksini toping
//Vazifa:
// price < 10000 bo‘lgan birinchi mahsulot indeksini findIndex() yordamida toping.
// const products = [
//   { name: 'olma', price: 12000 },
//   { name: 'shaftoli', price: 15000 },
//   { name: 'gilos', price: 9000 },
//   { name: 'banan', price: 8000 },
// ];

// let item = products.findIndex((item) => item.price <= 10);
// console.log(item);

//====================================

// Quyidagi kurslar ro‘yxatida har bir kursda o‘quvchilar bor.
// Vazifa: barcha kurslardagi o‘quvchilardan faqat "active: true" bo‘lganlarni tekis (bitta) arrayga yig‘ing.

// const courses = [
//   {
//     title: 'Frontend',
//     students: [
//       { name: 'Asad', active: true },
//       { name: 'Sardor', active: false },
//     ],
//   },
//   {
//     title: 'Backend',
//     students: [
//       { name: 'Javlon', active: true },
//       { name: 'Muhammad', active: false },
//     ],
//   },
// ];

// const allStudentsArrays = courses
//   .map((course) => course.students)
//   .flat(Infinity)
//   .filter((item) => item.active);

// console.log(allStudentsArrays);

//=================================================
// Kamida bitta mahsulot narxi 10000 so‘mdan yuqori ekanini tekshiring
//Vazifa:
// some() metodidan foydalanib, ushbu mahsulotlar ichida kamida bitta mahsulot narxi 10000 so‘mdan katta ekanini aniqlang.

// const products = [
//   { name: 'olma', price: 8000 },
//   { name: 'anor', price: 9500 },
//   { name: 'banan', price: 12000 },
//   { name: 'gilos', price: 7000 },
// ];

// let someProduct = products.some((product) => product.price > 10000);
// console.log(someProduct);

//=========================================

// Foydalanuvchi nomi ro‘yxatda bormi??
// Vazifa:
// Foydalanuvchi kiritgan ism ro‘yxatda bor-yo‘qligini includes() yordamida tekshir.
// Case-insensitive bo‘lishi kerak (ya'ni Asadbek, ASADBЕК, asadbek — hammasi tanilsin).

// const users = ['asadbek', 'javlon', 'sardor', 'muhammad'];

// let includeName = (name) => {
//   return users.includes(name.toLowerCase());
// };
// console.log(includeName('Asadbek'));

//=]===================================

// Savatchadagi jami narxni hisoblang
// Vazifa:
// reduce() yordamida umumiy summa (jami narx)ni hisoblang.
// const cart = [
//   { name: 'olma', price: 8000, quantity: 2 },
//   { name: 'anor', price: 10000, quantity: 1 },
//   { name: 'banan', price: 5000, quantity: 3 },
// ];

// const allPrice = cart.reduce((acc, curVal) => {
//   acc += curVal.price * curVal.quantity;
//   return acc;
// }, 0);

// console.log(allPrice);

//================================================
// Mahsulotlarni narx bo‘yicha saralash

// const products = [
//   { name: 'olma', price: 12000 },
//   { name: 'banan', price: 8000 },
//   { name: 'gilos', price: 15000 },
//   { name: 'anor', price: 10000 },
// ];
// const sortedProducts = products.sort((a, b) => a.price - b.price);
// console.log(sortedProducts);

//========================================
//Foydalanuvchini ID bo‘yicha topish

// const users = [
//   { id: 1, name: 'Asadbek' },
//   { id: 2, name: 'Javlon' },
//   { id: 3, name: 'Sardor' },
//   { id: 4, name: 'Muhammad' },
// ];

// function findUserById(id) {
//   const user = users.find((user) => user.id === id);
//   return user ?? { message: 'User topilmadi' };
// }

// console.log(findUserById(3)); // 👉 { id: 3, name: 'Sardor' }
// console.log(findUserById(11)); // 👉 { id: 3, name: 'Sardor' }

//=======================================

// Yangilangan mahsulot nomini saqlash
// Vazifa:
// Berilgan id bo‘yicha mahsulot nomini yangilaydigan funksiya yozing.
// Massivni yangilangan holatda qaytarsin.
// Agar id mavjud bo‘lmasa, massiv o‘zgarmasdan qaytishi kerak.

// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'anor' },
//   { id: 3, name: 'banan' },
// ];

// function updateProductName(id, productName) {
//   return products.map((item) =>
//     item.id === id ? { ...item, name: productName } : item
//   );
// }

// console.log(updateProductName(2, 'gilos'));

//==========================================

// Quyidagi kabi sonlar massiv berilgan:
// Eng katta ikki sondan iborat yangi massiv hosil qiladigan funksiya yozing.
// Masalan: [9, 7] bo‘lishi kerak.
// const numbers = [4, 7, 2, 9, 1, 5, 3];

// function getTopTwo(arr) {
//   const sorted = [...arr].sort((a, b) => b - a); // kamayish tartibida saralash
//   return sorted.slice(0, 2); // birinchi ikki elementni olish
// }

// console.log(getTopTwo([4, 7, 2, 9, 1, 5, 3])); // 👉 [9, 7]

//==================================================

//Eng uzun so‘zni topadigan funksiya yozing.
// const strings = ['salom', 'olma', 'dunyo', 'kitob', 'telefon'];

// function longWord(arr) {
//   return [...arr].sort((a, b) => b.length - a.length)[0];
// }

// console.log(longWord(strings));

//==============================================
//Faqat juft sonlarni ajratib, yangi massivga qaytaradigan funksiya yozing.
// const nums = [3, 6, 8, 11, 14, 17];

// function evenNumber(nums) {
//   return let evenNums = [...nums].filter((num) => num % 2 == 0);
// }

// console.log(evenNumber(nums));

//=================================
// Masala 4 (array of objects):
// Quyidagi users massividan 18 yoshdan katta foydalanuvchilarni ajratib, faqat ularning name larini qaytaradigan funksiya yozing:

// const users = [
//   { name: 'Ali', age: 17 },
//   { name: 'Vali', age: 21 },
//   { name: 'Soli', age: 19 },
//   { name: 'Karim', age: 16 },
//   { name: 'Anvar', age: 23 },
// ];

// function namesMassiv(users) {
//   let names = [];
//   users.forEach((user) => {
//     if (user.age >= 18) {
//       names.push(user.name);
//     }
//   });

//   return names;
// }

// namesMassiv(users);

//=================================================
//Ya’ni price * quantity har biri uchun, so‘ng umumiy hisob.

// const cart = [
//   { name: 'olma', price: 8000, quantity: 3 },
//   { name: 'banan', price: 6000, quantity: 2 },
//   { name: 'gilos', price: 15000, quantity: 1 },
// ];

// function allPrice(cart) {
//   return cart.reduce((acc, curVal) => {
//     return (acc += curVal.price * curVal.quantity);
//   }, 0);
// }

// console.log(allPrice(cart));

//============================================
// Shu massiv ichidan id bo‘yicha foydalanuvchini topuvchi funksiya yozing.

// const users = [
//   { id: 1, name: 'Asadbek', role: 'admin' },
//   { id: 2, name: 'Sarvar', role: 'user' },
//   { id: 3, name: 'Dilnoza', role: 'moderator' },
// ];

// function findUserById(users, id) {
//   let result = users.find((user) => user.id === id);
//   return result;
// }

// console.log(findUserById(users, 4));
// console.log(findUserById(users, 2));

//============================================

// Quyidagi kabi foydalanuvchilar roʻyxati berilgan. 18 yoshdan katta foydalanuvchilarning ism va yoshini qaytaradigan funksiya yozing:

// const users = [
//   { id: 1, name: 'Asadbek', age: 17 },
//   { id: 2, name: 'Zarina', age: 22 },
//   { id: 3, name: 'Javlon', age: 19 },
//   { id: 4, name: 'Diyor', age: 15 },
// ];

// function getAdults(users) {
//   let filteredUsers = users
//     .filter((user) => user.age >= 18)
//     .map((user) => ({ name: user.name, age: user.age }));
//   return filteredUsers;
// }

// console.log(getAdults(users));

//===================================================

// Quyidagi mahsulotlar ro‘yxati berilgan. Har bir mahsulot nomini kattagina harflarda qaytaradigan funksiya yozing.

// const products = [
//   { id: 1, name: 'olma', price: 12000 },
//   { id: 2, name: 'banan', price: 8000 },
//   { id: 3, name: 'gilos', price: 15000 },
// ];

// function getUpperCaseNames(products) {
//   let upperCaseNames = products.map((product) => product.name.toUpperCase());
//   return upperCaseNames;
// }

// console.log(getUpperCaseNames(products));

//================================================
// Endi siz id orqali mahsulotni topib, uning price qiymatini yangilaydigan funksiya yozishingiz kerak.
// const products = [
//   { id: 1, name: 'olma', price: 12000 },
//   { id: 2, name: 'banan', price: 8000 },
//   { id: 3, name: 'gilos', price: 15000 },
// ];

// function updateProductPrice(products, id, newPrice) {
//   let mapedArr = products.map((product) => {
//     return product.id === id ? { ...product, price: newPrice } : product;
//   });
//   return mapedArr;
// }

// console.log(updateProductPrice(products, 2, 9000));

//====================================================
//Quyidagi mahsulotlar ro‘yhatidan id orqali mahsulotni olib tashlang:

// const products = [
//   { id: 1, name: 'olma', price: 12000 },
//   { id: 2, name: 'banan', price: 8000 },
//   { id: 3, name: 'gilos', price: 15000 },
// ];

// function deleteProductById(products, id) {
//   let filteredProducts = products.filter((product) => product.id !== id);
//   return filteredProducts;
// }

// console.log(deleteProductById(products, 2));

//===================================================

//addProduct funksiyasini yozamiz

// const products = [
//   { id: 1, name: 'olma', price: 12000 },
//   { id: 2, name: 'banan', price: 8000 },
// ];

// function addProduct(products, newProduct) {
//   return [...products, newProduct]; // 🔁 yangi array
// }

// console.log(addProduct(products, { id: 3, name: 'gilos', price: 15000 }));

//-====================================
//Quyidagi users massiv berilgan:

// const users = [
//   { id: 1, name: 'Asadbek', role: 'admin' },
//   { id: 2, name: 'Sarvar', role: 'user' },
//   { id: 3, name: 'Dilnoza', role: 'moderator' },
// ];

// function searchUser(users, id) {
//   return users.find((user) => user.id === id);
// }

// console.log(searchUser(users, 2));

//========================================================
//Access tekshirish
//Quyidagi users ro‘yxatidan foydalanuvchi admin yoki moderator bo‘lsa — unga ruxsat bor deb hisoblaymiz:

// const users = [
//   { name: 'Asadbek', role: 'admin' },
//   { name: 'Sarvar', role: 'user' },
//   { name: 'Dilnoza', role: 'moderator' },
//   { name: 'Karim', role: 'guest' },
// ];

// function checkAccess(users) {
//   // 👉 true (chunki admin va moderator bor)

//   return users.some(
//     (user) => user.role === 'moderator' || user.role === 'admin'
//   );
// }

// function checkAccess(users) {
//     const allowedRoles = ['admin', 'moderator'];
//     return users.some(user => allowedRoles.includes(user.role));
//   }

// console.log(checkAccess(users));

//===================================================

// const products = [
//   { name: 'olma', price: 8000 },
//   { name: 'banan', price: 6000 },
//   { name: 'gilos', price: 12000 },
// ];

// let newProducts = [...products].map((product) => {
//   return { ...product, discountedPrice: product.price * 0.9 };
// });

// console.log(newProducts);

//=====================================================
//Quyidagi products massividagi mahsulotlarni narx bo‘yicha oshish tartibida saralovchi funksiya yozing:

// const products = [
//   { name: 'olma', price: 12000 },
//   { name: 'banan', price: 8000 },
//   { name: 'gilos', price: 15000 },
//   { name: 'anor', price: 10000 },
// ];

// const sortedProducts = [...products].sort((a, b) => a.price - b.price);

// console.log(sortedProducts);
//=========================================================

// Product name o‘zgartirish
// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'banan' },
//   { id: 3, name: 'gilos' },
// ];

// function updateProductName(id, newName) {
//   let newProducts = [...products].map((product) => {
//     return product.id === id ? { ...product, name: newName } : product;
//   });

//   return newProducts;
// }

// console.log(updateProductName(2, 'shaftoli'));

//============================================

// : Mahsulotni o‘chirish
// Quyidagi mahsulotlar ro‘yxatidan berilgan idga ega mahsulotni o‘chiradigan funksiya yozing:

// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'banan' },
//   { id: 3, name: 'gilos' },
// ];

// function deleteProductById(id) {
//   let newProducts = [...products].filter((product) => product.id !== id);
//   return newProducts;
// }

// console.log(deleteProductById(1));

//=================================================

// Yangi mahsulot qo‘shish (duplicate check bilan)

// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'banan' },
//   { id: 3, name: 'gilos' },
// ];

// function addProduct(products, newProduct) {
//   const isDuplicate = products.some((product) => product.id === newProduct.id);

//   if (isDuplicate) {
//     console.log('❌ Bunday id mavjud');
//     return products; // eski ro‘yxatni qaytaramiz
//   }

//   return [...products, newProduct];
// }

// console.log(addProduct(products, { id: 2, name: 'anor' }));

//==================================================

// : Mahsulotlarni kategoriyaga qarab guruhlash
// const products = [
//   { id: 1, name: 'olma', category: 'meva' },
//   { id: 2, name: 'banan', category: 'meva' },
//   { id: 3, name: 'sabzi', category: 'sabzavot' },
//   { id: 4, name: 'gilos', category: 'meva' },
//   { id: 5, name: 'kartoshka', category: 'sabzavot' },
// ];

// function groupProductsByCategory(products) {
//   const newproducts = [...products].reduce((acc, product) => {
//     if (!acc[product.category]) {
//       acc[product.category] = [];
//     }

//     acc[product.category].push(product);
//     return acc;
//   }, {});
//   return newproducts;
// }

// console.log(groupProductsByCategory(products));

//=================================================

// So‘zlar chastotasini hisoblash

// const words = ['olma', 'banan', 'olma', 'gilos', 'banan', 'olma'];

// function countWords(words) {
//   let count = words.reduce((acc, word) => {
//     if (word in acc) {
//       acc[word] += 1;
//     } else {
//       acc[word] = 1;
//     }
//     return acc;
//   }, {});
//   return count;
// }

// console.log(countWords(words));

//=====================================================
//Qiymat bo‘yicha guruhlab, ID ro‘yxatini tuzish

// const users = [
//   { id: 1, status: 'active' },
//   { id: 2, status: 'inactive' },
//   { id: 3, status: 'active' },
//   { id: 4, status: 'pending' },
//   { id: 5, status: 'inactive' },
// ];

// function groupUserIdsByStatus(users) {
//   let reducerArr = users.reduce((acc, user) => {
//     if (!acc[user.status]) {
//       acc[user.status] = [];
//     }

//     acc[user.status].push(user.id);
//     return acc;
//   }, {});
//   return reducerArr;
// }

// console.log(groupUserIdsByStatus(users));

//===========================================

// Foydalanuvchining shahar nomlarini ajratib olish

// const users = [
//   {
//     id: 1,
//     name: 'Asadbek',
//     address: {
//       city: "Farg'ona",
//       street: "Bog'i shamol",
//     },
//   },
//   {
//     id: 2,
//     name: 'Sarvar',
//     address: {
//       city: 'Toshkent',
//       street: 'Yunusobod',
//     },
//   },
//   {
//     id: 3,
//     name: 'Dilnoza',
//     address: {
//       city: 'Andijon',
//       street: "Navro'z",
//     },
//   },
// ];

// function getCities(users) {
//   let cities = [...users].map((user) => {
//     return user?.address?.city;
//   });
//   return cities;
// }

// console.log(getCities(users));

//=====================================================
//Email'lari @gmail.com bo‘lgan foydalanuvchilarni topish va ularning namelarini olish

// const users = [
//   { id: 1, name: 'Asadbek', email: 'asadbek@gmail.com' },
//   { id: 2, name: 'Sarvar', email: 'sarvar@mail.ru' },
//   { id: 3, name: 'Dilnoza', email: 'dilnoza@gmail.com' },
//   { id: 4, name: 'Anvar', email: 'anvar@yandex.com' },
// ];

// function getGmailUsers(users) {
//   let namesArr = [...users]
//     .filter((user) => user?.email.endsWith('@gmail.com'))
//     .map((user) => user?.name);
//   return namesArr;
// }

// console.log(getGmailUsers(users));

//===============================================

// Eng arzon qimmat mahsulotni topish
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 12000 },
//   { id: 3, name: 'gilos', price: 15000 },
//   { id: 4, name: 'anor', price: 11000 },
//   { id: 5, name: 'shaftoli', price: 9000 },
// ];

// function getCheapestExpensive(products) {
//   return products
//     .filter((product) => product.price > 10000)
//     .reduce((acc, product) => (product.price < acc.price ? product : acc));
// }

// console.log(getCheapestExpensive(products));

//=====================================================

// Sahifalash (pagination) uchun ma'lumotlarni ajratish

// const products = [
//   { id: 1, name: 'olma' },
//   { id: 2, name: 'banan' },
//   { id: 3, name: 'gilos' },
//   { id: 4, name: 'anor' },
//   { id: 5, name: 'shaftoli' },
//   { id: 6, name: 'behi' },
//   { id: 7, name: 'uzum' },
//   { id: 8, name: 'nok' },
//   { id: 9, name: 'limon' },
//   { id: 10, name: 'olxori' },
// ];

// function paginate(arr, page, perPage) {
//   // Sahifa indeksi 1-based bo'lgani uchun 0-based ga o'tkazamiz
//   const startIndex = (page - 1) * perPage;
//   const endIndex = startIndex + perPage;

//   // Massivdan kerakli qismini ajratib olamiz
//   const paginatedItems = arr.slice(startIndex, endIndex);

//   return paginatedItems;
// }

// console.log(paginate(products, 3, 4));
//===================================================

// Siz validateForm(data) funksiyasini yozishingiz kerak. U quyidagilarni tekshiradi:
// name — bo‘sh bo‘lmasligi kerak
// email — @ belgisi bo‘lishi shart
// age — 18 va undan katta bo‘lishi kerak

// const formData = {
//   name: 'Asadbek',
//   email: 'asadbekgmail.com',
//   age: 17,
// };

// function validateForm(data) {
//   return Object.entries(data).reduce((acc, [key, value]) => {
//     switch (key) {
//       case 'name':
//         acc[key] = !!value && value.trim().length > 0;
//         break;
//       case 'email':
//         acc[key] = typeof value === 'string' && value.includes('@');
//         break;
//       case 'age':
//         acc[key] = Number(value) >= 18;
//         break;
//       default:
//         acc[key] = true;
//     }
//     return acc;
//   }, {});
// }

// console.log(validateForm(formData));

//=======================================================

// Mahsulotlarni narx va kategoriya bo‘yicha filtrlash
// const products = [
//   { id: 1, name: 'olma', price: 8000, category: 'meva' },
//   { id: 2, name: 'banan', price: 12000, category: 'meva' },
//   { id: 3, name: 'sabzi', price: 4000, category: 'sabzavot' },
//   { id: 4, name: 'gilos', price: 15000, category: 'meva' },
//   { id: 5, name: 'kartoshka', price: 3000, category: 'sabzavot' },
//   { id: 6, name: 'behi', price: 11000, category: 'meva' },
// ];

// function filterProducts(products, minPrice, category) {
//   return products.filter(
//     (product) => product.price > minPrice && product.category === category
//   );
// }

// console.log(filterProducts(products, 10000, 'meva'));

//======================================================

// Kamida bitta mahsulot 20,000 dan qimmatroqmi?

// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 12000 },
//   { id: 3, name: 'gilos', price: 25000 },
//   { id: 4, name: 'anor', price: 10000 },
// ];

// function hasExpensiveProduct(products, limitPrice) {
//   return products.some((product) => product.price > limitPrice);
// }

// console.log(hasExpensiveProduct(products, 20000));

//=========================================

// Hamma mahsulotlar arzonmi?
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 9500 },
//   { id: 4, name: 'anor', price: 7000 },
// ];

// function areAllCheap(products, maxPrice) {
//   return products.every((product) => product.price < maxPrice);
// }

// console.log(areAllCheap(products, 10000));
// console.log(areAllCheap(products, 7000));

//=========================================

//Mahsulot kategoriyalarini unikal qilib ajratish
// const products = [
//   { id: 1, name: 'olma', category: 'meva' },
//   { id: 2, name: 'banan', category: 'meva' },
//   { id: 3, name: 'sabzi', category: 'sabzavot' },
//   { id: 4, name: 'gilos', category: 'meva' },
//   { id: 5, name: 'kartoshka', category: 'sabzavot' },
//   { id: 6, name: 'non', category: 'non' },
// ];

// function getUniqueCategories(products) {
//   let mySet = new Set(products.map((prod) => prod.category));
//   return [...mySet];
// }

// console.log(getUniqueCategories(products));

//=========================================================
//Mahsulotga rating qo‘shish yoki yangilash
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 12000 },
// ];

// function updateProductRating(products, id, rating) {
//   return products.map((product) =>
//     product.id === id ? { ...product, rating } : product
//   );
// }

// console.log(updateProductRating(products, 1, 4.5));

//===============================================

// Yangi mahsulot qo‘shish (id avtomatik bo‘lsin)
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 12000 },
// ];

// function addNewProduct(products, newProduct) {
//   return [
//     ...products,
//     { id: products[products.length - 1]?.id + 1, ...newProduct },
//   ];
// }

// console.log(addNewProduct(products, { name: 'anor', price: 10000 }));

//==========================================================

//Mahsulotni id bo‘yicha o‘chirish (agar mavjud bo‘lsa)
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 12000 },
// ];

// function deleteProductById(products, id) {
//   return products.filter((product) => product.id !== id);
// }

// console.log(deleteProductById(products, 4));

//=============================================

//==========================================
//Mahsulot narxini yangilash (agar topilsa)
// const products = [
//   { id: 1, name: 'olma', price: 8000 },
//   { id: 2, name: 'banan', price: 9000 },
//   { id: 3, name: 'gilos', price: 12000 },
// ];

// function updateProductPrice(products, id, newPrice) {
//   const productExists = products.some((prod) => prod.id === id);

//   if (!productExists) {
//     return 'Mahsulot topilmadi';
//   }

//   return products.map((prod) =>
//     prod.id === id ? { ...prod, price: newPrice } : prod
//   );
// }
// console.log(updateProductPrice(products, 4, 10000));

//==================================================

// Mahsulotni name bo‘yicha topish (case-insensitive)

// Funksiya nima qiladi?
// Mahsulot nomini (name) bo‘yicha topadi
// Harf katta-kichikligiga e’tibor bermaydi (case-insensitive)
// Agar topilsa → obyekt qaytaradi
// Agar topilmasa → "Mahsulot topilmadi" yozuvi qaytarad

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
// ];

// function findProductByName(products, name) {
//   const product = products.find(
//     (prod) => prod.name.toLowerCase() === name.toLowerCase()
//   );

//   return product || 'Mahsulot topilmadi';
// }

// console.log(findProductByName(products, 'banan'));

//==========================================================

// Mahsulotlarni name bo‘yicha izlash (qisman moslik, case-insensitive)
// name ichida searchTerm bo‘lsa — mahsulotni qaytaradi
// Harf katta-kichikligi farq qilmaydi (case-insensitive)
// Yangi massiv qaytaradi
// Agar hech nima topilmasa — bo‘sh massiv []

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
//   { id: 4, name: 'Anor', price: 10000 },
// ];

// function searchProducts(products, searchTerm) {
//   let newProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   return newProducts;
// }
// console.log(searchProducts(products, 'k'));

//================================================

//Yangi mahsulot qo‘shish (name bo‘yicha takrorlanmasin)

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
// ];

// function addUniqueProduct(products, newProduct) {
//   let isCheck = products.some(
//     (prod) => prod.name.toLowerCase() === newProduct.name.toLowerCase()
//   );
//   if (!isCheck) {
//     return [
//       ...products,
//       { id: products[products.length - 1].id + 1, ...newProduct },
//     ];
//   } else {
//     return `mahsulot mavjudligi sababli qo‘shilmaydi`;
//   }
// }

// console.log(addUniqueProduct(products, { name: 'anor', price: 10000 }));

//===========================================================================
//Narx oralig‘idagi mahsulotlarni ajratish

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
//   { id: 4, name: 'Anor', price: 10000 },
//   { id: 5, name: 'Uzum', price: 7000 },
// ];

// function filterByPriceRange(products, min, max) {
//   return products.filter(
//     (product) => product.price >= min && product.price <= max
//   );
// }

// console.log(filterByPriceRange(products, 80000, 100000));
//=======================================================

// Mahsulotni name bo‘yicha o‘chirish (case-insensitive)

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
// ];

// function deleteProductByName(products, name) {
//   return products.filter(
//     (prod) => prod.name.toLowerCase() !== name.toLowerCase()
//   );
// }

// console.log(deleteProductByName(products, 'archa'));

//=============================
// //Har bir mahsulotga isAvailable qiymatini qo‘shish
// Funksiya nima qiladi?
// Har bir mahsulotga yangi isAvailable maydoni qo‘shadi
// Qoidaga ko‘ra:
// Agar price >= 10000 bo‘lsa → isAvailable: true
// Aks holda → isAvailable: false
// Har doim yangi array qaytadi

// const products = [
//   { id: 1, name: 'Olma', price: 8000 },
//   { id: 2, name: 'Banan', price: 9000 },
//   { id: 3, name: 'Gilos', price: 12000 },
// ];

// function addAvailabilityFlag(products) {
//   return products.map((product) => {
//     return { ...product, isAvailable: product.price >= 10000 ? true : false };
//   });
// }

// console.log(addAvailabilityFlag(products));

//=======================================
//Mahsulotlarni category bo‘yicha guruhlab, umumiy narxini hisoblash
// Funksiya vazifasi:
// category bo‘yicha mahsulotlarni guruhlaydi
// Har bir kategoriyadagi price larni yig‘adi
// Quyidagi shakldagi obyekt qaytaradi:
// {
//   meva: 29000,      // 8000 + 9000 + 12000
//   nonvoy: 7000      // 3000 + 4000
// }

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 9000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Bulochka', category: 'nonvoy', price: 4000 },
//   { id: 5, name: 'Gilos', category: 'meva', price: 12000 },
// ];

// function sumPricesByCategory(products) {
//   return products.reduce((acc, curVal) => {
//     if (curVal.category in acc) {
//       acc[curVal.category] += curVal.price;
//     } else {
//       acc[curVal.category] = curVal.price;
//     }
//     return acc;
//   }, {});
// }

// console.log(sumPricesByCategory(products));

//====================================================

// Mahsulotning categorysini yangilash (id orqali topib)
// Funksiya vazifasi:
// id bo‘yicha mahsulotni topadi
// Uning category qiymatini newCategory bilan almashtiradi
// Boshqa mahsulotlarga tegmaydi
// Har doim yangi array qaytaradi
// Agar mahsulot topilmasa — Mahsulot topilmadi deb yozadi

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 9000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
// ];

// function updateProductCategory(products, id, newCategory) {
//   let isCheck = products.some((prod) => prod.id === id);
//   if (isCheck) {
//     return products.map((product) =>
//       product.id === id ? { ...product, category: newCategory } : product
//     );
//   } else {
//     return 'mahsulot topilmadi';
//   }
// }

// console.log(updateProductCategory(products, 2, 'tropik'));

//===================================================
//Meva va arzon mahsulotlarni o‘chirish
// Funksiya vazifasi:
// Faqatgina:
// category === "meva" va price < 10000
// bo‘lgan mahsulotlarni o‘chiradi
// Qolgan barcha mahsulotlar saqlanib qoladi
// Har doim yangi array qaytariladi

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 90000 },
//   { id: 3, name: 'Gilos', category: 'meva', price: 12000 },
//   { id: 4, name: 'Non', category: 'nonvoy', price: 3000 },
// ];

// function deleteCheapFruits(products) {
//   return products.filter(
//     (prod) => prod.category !== 'meva' && prod.price < 10000
//   );
// }

// console.log(deleteCheapFruits(products));

//====================================================

//Vazifa: Berilgan massivdagi har bir elementni kvadratga ko'tarib, yangi massiv qaytaring.
// const numbers = [1, 2, 3, 4, 5];
// // Natija: [1, 4, 9, 16, 25]

// function elementKv(arr) {
//   return arr.map((item) => item ** 2);
// }

// console.log(elementKv(numbers));

//====================================================
// Quyidagi obyektlarni age bo'yicha o'sish tartibida saralang.
// const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 20 },
//   { name: 'Charlie', age: 30 },
// ];

// function sortedAge(people) {
//   return people.sort((a, b) => a.age - b.age);
// }

// console.log(sortedAge(people));

// Natija: [
//   { name: "Bob", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 30 }
// ]

//===================================================

//category="meva" va price >= 10000 bo‘lgan mahsulotlarga 10% chegirma qo‘llash
// Qoidalar:
// Faqat category === "meva" va price >= 10000 bo‘lganlarga 10% chegirma qo‘llang
// (ya’ni newPrice = Math.round(price * 0.9)).
// Chegirma qo‘llanganlarga oldPrice degan maydon ham qo‘shing (chegirmagacha bo‘lgan narx).
// Qolgan mahsulotlar o‘zgarmasdan qoladi.
// Har doim yangi array qaytadi.
// Agar hech kimga chegirma tushmasa — yuqoridagi qoidaga ko‘ra asl ro‘yxatni qaytaring (xohlasangiz console.log("Chegirma qo‘llanmadi") ham qiling).

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Gilos', category: 'meva', price: 15000 },
// ];

// function applyDiscount(products) {
//   return products.map((prod) => {
//     if (
//       prod.category === 'meva' ||
//       (prod.category !== 'meva' && prod.price >= 10000)
//     ) {
//       return {
//         ...prod,
//         oldPrice: prod.price,
//         price: Math.round(prod.price * 0.9),
//       };
//     }
//     return prod;
//   });
// }

// console.log(applyDiscount(products));

//===============================================================

//Kategoriya bo‘yicha saralangan mahsulotlar ro‘yxati

// Qoidalar:
// Faqat berilgan category dagi mahsulotlarni ajratib oladi.
// Ularni price bo‘yicha o‘sish tartibida (low → high) saralaydi.
// Agar berilgan category bo‘yicha mahsulot topilmasa — "Mahsulot topilmadi" deb qaytaradi.
// Har doim yangi array qaytaradi.

// const products = [
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Gilos', category: 'meva', price: 15000 },
//   { id: 5, name: 'Shirin non', category: 'nonvoy', price: 10000 },
// ];

// function getSortedProductsByCategory(products, category) {
//   let isCheck = products.some((item) => item.category === category);
//   if (isCheck) {
//     return products
//       .filter((prod) => prod.category === category)
//       .sort((a, b) => a.price - b.price);
//   } else {
//     return 'Mahsulot topilmadi';
//   }
// }

// console.log(getSortedProductsByCategory(products, 'meva'));

//==================================================================

//Yangi mahsulot qo‘shish (kategoriya tekshiruv bilan)
// Qoidalar:
// allowedCategories degan array bor (masalan: ["meva", "nonvoy", "ichimlik"]).
// Agar yangi mahsulotning category qiymati shu ro‘yxatda bo‘lmasa → "Bunday kategoriya mavjud emas" deb qaytaradi.
// Aks holda yangi mahsulotni ro‘yxat oxiriga qo‘shadi.
// id qiymati — eng oxirgi mahsulot idsi + 1 bo‘lishi kerak.
// Har doim yangi array qaytaradi.

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
// ];

// function addProductWithCategoryCheck(products, newProduct, allowedCategories) {
//   let isCheck = allowedCategories.includes(newProduct.category);
//   if (isCheck) {
//     return [
//       ...products,
//       { id: products[products.length - 1].id + 1, ...newProduct },
//     ];
//   } else {
//     return 'Bunday kategoriya mavjud emas';
//   }
// }

// const allowed = ['meva', 'nonvoy', 'ichimlik'];
// console.log(
//   addProductWithCategoryCheck(
//     products,
//     { name: 'Gilos', category: 'meva', price: 15000 },
//     allowed
//   )
// );

//=====================================================

// Bir nechta mahsulot narxini oshirish
// Qoidalar:
// ids — bu array ([2, 4] kabi) bo‘lib, qaysi mahsulotlar narxi oshishini bildiradi.
// percent — necha foizga oshirish kerakligini bildiradi (masalan: 10 → 10%).
// Faqat ids ichida bo‘lgan mahsulotlarning price qiymati oshiriladi.
// Yangi array qaytaradi.
// Qolgan mahsulotlar o‘zgarishsiz qoladi.

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Gilos', category: 'meva', price: 15000 },
// ];

// function increasePrices(products, ids, percent) {
//   return products.map((product) => {
//     if (ids.includes(product.id)) {
//       return {
//         ...product,
//         price: product.price + (product.price * percent) / 100,
//       };
//     } else {
//       return product;
//     }
//   });
// }

// console.log(increasePrices(products, [2, 4], 10));
//============================================================
// Mahsulotlarni guruhlash va tartiblash

// Vazifa:
// Mahsulotlarni category bo‘yicha guruhlab chiqish (Electronics, Food va h.k.).
// Har bir category ichida mahsulotlarni price bo‘yicha kamayish tartibida (desc) joylashtirish.
// Natija quyidagi formatda bo‘lishi kerak:

// const products = [
//   { id: 1, name: 'Keyboard', category: 'Electronics', price: 120 },
//   { id: 2, name: 'Banana', category: 'Food', price: 2 },
//   { id: 3, name: 'Monitor', category: 'Electronics', price: 300 },
//   { id: 4, name: 'Apple', category: 'Food', price: 3 },
//   { id: 5, name: 'Mouse', category: 'Electronics', price: 25 },
//   { id: 6, name: 'Bread', category: 'Food', price: 1 },
// ];

// function categoryProducts(products) {
//   return products.reduce((acc, curVal) => {
//     if (curVal.category in acc) {
//       acc[curVal.category].push(curVal);
//     } else {
//       acc[curVal.category] = [];
//     }
//     return acc;
//   }, {});
// }

// console.log(categoryProducts(products));

//=================================================

// Delete + Multiple condition
// Qoidalar
// Quyidagi ikki holatga tushadigan mahsulotlar o‘chiriladi (ya’ni qaytgan massivda bo‘lmaydi):
// category === "meva" va price < 12000
// category === "nonvoy" va price < 4000
// Qolganlari saqlanadi. Har doim yangi array qaytadi. Agar hech kim o‘chirilmasa — asl ro‘yxatni qaytaring (xohlasangiz console.log("Hech narsa o‘chmadi") ham qiling).

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
//   { id: 4, name: 'Bulochka', category: 'nonvoy', price: 4500 },
//   { id: 5, name: 'Gilos', category: 'meva', price: 15000 },
// ];

// function deleteByRules(products) {
//   return products.filter((product) => {
//     if (
//       (product.category === 'meva' && product.price >= 12000) ||
//       (product.category === 'nonvoy' && product.price > 4000)
//     ) {
//       return product;
//     }
//   });
// }

// console.log(deleteByRules(products));

//===============================================================
//upsertProduct(products, incoming)
// Qoidalar
// Validation:
// name: string, trim().length > 0
// category: string, trim().length > 0
// price: number, > 0
// 👉 Noto‘g‘ri bo‘lsa: "Noto‘g‘ri ma’lumot" qaytaring.
// Upsert:
// Agar incoming.id mavjud bo‘lsa → o‘sha mahsulotni yangilang (name/category/price).
// Agar mavjud bo‘lmasa → yangi mahsulot qilib qo‘shing.
// id = max id + 1.
// Har doim yangi array qaytaring (immutability).

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 8000 },
//   { id: 2, name: 'Banan', category: 'meva', price: 12000 },
//   { id: 3, name: 'Non', category: 'nonvoy', price: 3000 },
// ];

// function upsertProduct(products, incoming) {
//   // 1️⃣ Validation
//   if (
//     typeof incoming.name !== 'string' ||
//     incoming.name.trim().length === 0 ||
//     typeof incoming.category !== 'string' ||
//     incoming.category.trim().length === 0 ||
//     typeof incoming.price !== 'number' ||
//     incoming.price <= 0
//   ) {
//     return 'Noto‘g‘ri ma’lumot';
//   }

//   // 2️⃣ Mavjud id bormi?
//   const exists = products.some((p) => p.id === incoming.id);

//   if (exists) {
//     // 3️⃣ Yangilash
//     return products.map((p) =>
//       p.id === incoming.id
//         ? {
//             ...p,
//             name: incoming.name,
//             category: incoming.category,
//             price: incoming.price,
//           }
//         : p
//     );
//   } else {
//     // 4️⃣ Qo‘shish
//     const newId = Math.max(...products.map((p) => p.id)) + 1;
//     return [...products, { id: newId, ...incoming }];
//   }
// }

// console.log(
//   upsertProduct(products, {
//     id: 2,
//     name: 'Banan Premium',
//     category: 'meva',
//     price: 13500,
//   })
// );

//===========================================================================

// upsertProduct (create yoki update, immutably)

// Vazifa:
// upsertProduct(products, draft, allowedCategories) funksiyasini yozing.
// Agar draft.id mavjud bo‘lsa va products ichida shu id topilsa → o‘sha product update qilinsin (faqat berilgan maydonlar).
// Aks holda → create: yangi product qo‘shilsin va id — massivdagi eng katta id + 1.
// Validatsiya:
// name: bo‘sh emas, unique (case-insensitive). Update’da o‘ziga tekis kelsa ruxsat.
// price: musbat son (0 dan katta).
// category: allowedCategories ichida bo‘lishi shart.
// Immutability: asl products o‘zgarmasin (yangi array qaytaring).
// Natija: id bo‘yicha o‘sish tartibida qayting

// ===========================================================
// addProduct(products, newProduct)

// id avtomatik: agar massiv bo‘sh bo‘lsa 1, aks holda maxId + 1.
// name trim qilinsin; bo‘sh bo‘lsa yoki faqat probel bo‘lsa — xato.
// price > 0 bo‘lsin; aks holda — xato.
// category yuqoridagi to‘rttadan biri bo‘lsin; aks holda — xato.
// inStock boolean bo‘lsin; aks holda — xato.
// Unikal nom: bir xil category ichida name (case-insensitive) takrorlanmasin. Masalan, "Olma" va "olma" — bir xil deb olinadi. Takror bo‘lsa — xato.
// Funksiya eski products ni o‘zgartirmasdan yangi massiv qaytarsin.
// Xatolarda throw new Error('...') qiling — xabar aniq bo‘lsin (masalan: "Name is required", "Price must be greater than 0", "Duplicate name in category").

// const products = [
//   { id: 1, name: 'Olma', price: 12000, category: 'fruit', inStock: true },
//   { id: 2, name: 'Banan', price: 8000, category: 'fruit', inStock: true },
//   { id: 3, name: 'Non', price: 4000, category: 'bakery', inStock: false },
// ];

// function addProduct(products, newProduct) {
//   const lastId = products.length > 0 ? products.at(-1).id : 0;
//   return [...products, { id: lastId + 1, ...newProduct }];
// }
// console.log(
//   addProduct(products, {
//     name: 'Shaftoli',
//     price: 15000,
//     category: 'fruit',
//     inStock: true,
//   })
// );

//==========================================================

// Mahsulotlar ro‘yxatidan berilgan category bo‘yicha filterlab olish funksiyasini yozing.
// Qoidalar
// category qiymati to‘g‘ri keladigan mahsulotlar yangi massiv sifatida qaytishi kerak.
// Agar hech narsa topilmasa → bo‘sh massiv qaytsin.
// Taqqoslash case-insensitive bo‘lsin ('Fruit' bilan 'fruit' bir xil).

// const products = [
//   { id: 1, name: 'Olma', price: 12000, category: 'fruit', inStock: true },
//   { id: 2, name: 'Banan', price: 8000, category: 'fruit', inStock: true },
//   { id: 3, name: 'Non', price: 4000, category: 'bakery', inStock: false },
// ];

// function getProductsByCategory(products, category) {
//   // shu yerga yozing

//   return [...products].filter(
//     (product) => product.category.toLowerCase() === category.toLowerCase()
//   );
// }

// console.log(getProductsByCategory(products, 'fruit'));

//======================================================================
// Mahsulotlar ro‘yxatida berilgan id ga teng mahsulotning price qiymatini yangilash.
// Qoidalar
// id topilsa — faqat o‘sha mahsulotning price qiymati yangilansin.
// Eski massiv o‘zgarmasligi kerak (immutable).
// Agar id topilmasa — eski massiv o‘zgarishsiz qaytsin.
// newPrice qiymati 0 dan katta bo‘lishi kerak, aks holda xato (throw new Error('Price must be greater than 0'))

// function updateProductPrice(products, id, newPrice) {
//   // shu yerga yozing
//   if (0 < newPrice) {
//     return products.map((product) =>
//       product.id === id ? { ...product, price: newPrice } : product
//     );
//   } else {
//     throw new Error('Price must be greater than 0');
//   }
// }

// const products = [
//   { id: 1, name: 'Olma', price: 12000, category: 'fruit', inStock: true },
//   { id: 2, name: 'Banan', price: 8000, category: 'fruit', inStock: true },
//   { id: 3, name: 'Non', price: 4000, category: 'bakery', inStock: false },
// ];

// console.log(updateProductPrice(products, 2, 9000));

//===========================================

// updateProductPrice(products, id, newPrice) funksiyasini yozing.
// Funksiya id bo‘yicha mahsulotni topib, narxini newPrice ga o‘zgartirsin.
// Agar id topilmasa, asl massivni o‘zgartirmasdan qaytarsin.
// newPrice 0 dan kichik bo‘lmasligi kerak. Aks holda xato (Error) chiqarsin.

// const products = [
//   { id: 1, name: 'Olma', price: 12000 },
//   { id: 2, name: 'Banan', price: 8000 },
//   { id: 3, name: 'Gilos', price: 15000 },
// ];

// function updateProductPrice(products, id, newPrice) {
//   if (newPrice <= 0) {
//     throw new Error('Price must be greater than 0');
//   }

//   return products.map((item) =>
//     item.id === id ? { ...item, price: newPrice } : item
//   );
// }
// console.log(updateProductPrice(products, 2, 9000));

//=======================================

// const products = [
//   { id: 1, name: 'Olma', price: 12000 },
//   { id: 2, name: 'Banan', price: 8000 },
//   { id: 3, name: 'Gilos', price: 15000 },
// ];

// deleteProductById(products, id) funksiyasini yozing:
// Funksiya berilgan id bo‘yicha mahsulotni o‘chirib tashlasin.
// Agar id topilmasa, massiv o‘zgarmagan holda qaytarsin.
// Asl massivni o‘zgartirmasligi kerak (immutable).

// function deleteProductById(products, id) {
//   return products.filter((prod) => prod.id !== id);
// }

// console.log(deleteProductById(products, 2));

//===============================================

// products massivida turli kategoriyadagi mahsulotlar bor.
// Faqatgina "meva" kategoriyasidagi mahsulotlarni qaytaradigan funksiya yozing.

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 12000 },
//   { id: 2, name: 'Non', category: 'nonvoy', price: 4000 },
//   { id: 3, name: 'Banan', category: 'meva', price: 15000 },
//   { id: 4, name: 'Sut', category: 'ichimlik', price: 8000 },
// ];

// function getFruits(products) {
//   // shu yerga yozing
//   return products.filter((product) => product.category === 'meva');
// }

// console.log(getFruits(products));
// // Natija: [{id:1, name:"Olma", ...}, {id:3, name:"Banan", ...}]

//================================================

// const products = [
//   { id: 1, name: 'Olma', category: 'meva', price: 12000 },
//   { id: 2, name: 'Non', category: 'nonvoy', price: 4000 },
//   { id: 3, name: 'Banan', category: 'meva', price: 15000 },
// ];

// function updatePrice(products, id, newPrice) {
//   // shu yerga yozing
//   return products.map((prod) =>
//     prod.id === id ? { ...prod, price: newPrice } : prod
//   );
// }

// console.log(updatePrice(products, 2, 5000));
// Natija:
// [
//   { id: 1, name: "Olma", category: "meva", price: 12000 },
//   { id: 2, name: "Non", category: "nonvoy", price: 5000 },
//   { id: 3, name: "Banan", category: "meva", price: 15000 },
// ]

//==========================================================

// Vazifa:
// Sizda mahsulotlar ro‘yxati bor, har bir mahsulotda reviews (izohlar) mavjud.
// Berilgan productId bo‘yicha izoh qo‘shuvchi funksiya yozing.
// Funksiya yangi array qaytarishi kerak (immutability saqlanadi).

// const products = [
//   {
//     id: 1,
//     name: 'Olma',
//     category: 'meva',
//     price: 12000,
//     reviews: ['Yaxshi meva'],
//   },
//   {
//     id: 2,
//     name: 'Non',
//     category: 'nonvoy',
//     price: 4000,
//     reviews: [],
//   },
// ];

// function addReview(products, productId, reviewText) {
//   // shu yerga yozing
//   return products.map((product) =>
//     product.id == productId
//       ? { ...product, reviews: [...product.reviews, reviewText] }
//       : product
//   );
// }

// console.log(addReview(products, 2, 'Juda mazali non edi!'));
// Natija:
// [
//   { id: 1, name: "Olma", category: "meva", price: 12000, reviews: ["Yaxshi meva"] },
//   { id: 2, name: "Non", category: "nonvoy", price: 4000, reviews: ["Juda mazali non edi!"] }
// ]

//==========================================================

// const products = [
//   {
//     id: 1,
//     name: 'Olma',
//     category: 'meva',
//     price: 12000,
//     reviews: [{ userId: 1, text: 'Yaxshi meva' }],
//   },
//   {
//     id: 2,
//     name: 'Non',
//     category: 'nonvoy',
//     price: 4000,
//     reviews: [],
//   },
// ];

// function addReview(products, productId, review) {
//   return products.map((prod) =>
//     prod.id == productId
//       ? { ...prod, reviews: [...prod.reviews, review] }
//       : prod
//   );
// }

// console.log(
//   addReview(products, 2, { userId: 2, text: 'Issiq holda zo‘r ekan!' })
// );
// Natija:
// [
//   { id: 1, name: "Olma", category: "meva", price: 12000, reviews: [{ userId: 1, text: "Yaxshi meva" }] },
//   { id: 2, name: "Non", category: "nonvoy", price: 4000, reviews: [{ userId: 2, text: "Issiq holda zo‘r ekan!" }] }
// ]

//========================================================================
// Berilgan productId va userId bo‘yicha izohni yangilang.
// Agar izoh topilmasa, arrayni o‘zgarishsiz qaytarishi kerak.

// const products = [
//   {
//     id: 1,
//     name: 'Olma',
//     category: 'meva',
//     price: 12000,
//     reviews: [{ userId: 1, text: 'Yaxshi meva' }],
//   },
//   {
//     id: 2,
//     name: 'Non',
//     category: 'nonvoy',
//     price: 4000,
//     reviews: [{ userId: 2, text: 'Issiq holda zo‘r ekan!' }],
//   },
// ];

// function updateReview(products, productId, userId, newText) {
//   return products.map((prod) => {
//     if (prod.id === productId) {
//       return {
//         ...prod,
//         reviews: prod.reviews.map((item) =>
//           item.userId === userId ? { ...item, text: newText } : item
//         ),
//       };
//     }
//     return prod;
//   });
// }

// console.log(updateReview(products, 2, 2, 'Biroz quruqroq edi'));
// Natija:
// [
//   { id: 1, name: "Olma", category: "meva", price: 12000, reviews: [{ userId: 1, text: "Yaxshi meva" }] },
//   { id: 2, name: "Non", category: "nonvoy", price: 4000, reviews: [{ userId: 2, text: "Bi...roq edi" }] }
// ]

//========================================================
// Vazifa:
// Berilgan productId va userId bo‘yicha reviews ichidan tegishli review’ni o‘chiradigan funksiya yozing.
// Agar bunday review topilmasa, array o‘zgarishsiz qaytsin.

// const products = [
//   {
//     id: 1,
//     name: 'Olma',
//     category: 'meva',
//     price: 12000,
//     reviews: [
//       { userId: 1, text: 'Yaxshi meva' },
//       { userId: 3, text: 'Shirin ekan' },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Non',
//     category: 'nonvoy',
//     price: 4000,
//     reviews: [{ userId: 2, text: 'Issiq holda zo‘r ekan!' }],
//   },
// ];

// function deleteReview(products, productId, userId) {
//   // shu yerga yozing
//   return products.map((prod) => {
//     if (prod.id == productId) {
//       return {
//         ...prod,
//         reviews: prod.reviews.filter((item) => item.userId !== userId),
//       };
//     } else {
//       return prod;
//     }
//   });
// }

// console.log(deleteReview(products, 1, 3));

//================================================
// Berilgan stringdagi har bir so‘zni teskari qilib qaytaring, lekin so‘zlar tartibi o‘zgarmasin.

// function reverseWords(str) {
//   // shu yerga yozing
//   return str.split('').reverse().join('').split(' ').reverse();
// }

// console.log(reverseWords('salom dunyo'));
// // "molas oynud"

// console.log(reverseWords('javascript zor til'));
// "tpircsavaj roz lit"

//========================================================

// Berilgan massivdan faqat unique elementlarni qaytaring. Bunda reduce ishlatishingiz kerak.

// function getUnique(arr) {
//   return arr.reduce((acc, curVal) => {
//     if (!acc.includes(curVal)) {
//       acc.push(curVal);
//     }
//     return acc;
//   }, []);
// }

// console.log(getUnique([1, 2, 2, 3, 4, 4, 5]));
// // [1, 2, 3, 4, 5]

// console.log(getUnique(['olma', 'banan', 'olma', 'nok']));
// // ["olma", "banan", "nok"]

//====================================================

// Eng ko‘p takrorlangan elementni topish

// Vazifa:
// Berilgan massivdan eng ko‘p marta uchragan elementni topib qaytaring. Agar bir nechta element bir xil takrorlangan bo‘lsa, ulardan bittasini qaytarsa ham bo‘ladi.

// function mostFrequent(arr) {
//   // shu yerga yozing
//   return arr.reduce((acc, curVal) => {
//     if (curVal in acc) {
//       acc[curVal] += 1;
//     } else {
//       acc[curVal] = 1;
//     }

//     return acc;
//   }, {});
// }

// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4, 4]));
// // 3

// console.log(mostFrequent(['olma', 'banan', 'olma', 'nok', 'banan', 'olma']));
// // "olma"

//=======================================================

// Vazifa:
// Berilgan massiv ichida yana massivlar bo‘lishi mumkin. Uni tekis bitta massivga aylantiring.
// (Qo‘shimcha challenge: recursive usulda qilishingiz mumkin 😉)

// function flattenArray(arr) {
//   // shu yerga yozing
//   return arr.flat(Infinity);
// }

// console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
// // [1, 2, 3, 4, 5, 6, 7]

// console.log(flattenArray([[['a']], 'b', ['c', ['d', 'e']]]));
// // ["a", "b", "c", "d", "e"]

// function flattenArray(arr) {
//   return arr.reduce((acc, cur) => {
//     if (Array.isArray(cur)) {
//       return acc.concat(flattenArray(cur)); // rekrusiya
//     }
//     return acc.concat(cur);
//   }, []);
// }

// console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
// // [1, 2, 3, 4, 5, 6, 7]

// console.log(flattenArray([[['a']], 'b', ['c', ['d', 'e']]]));
// // ["a", "b", "c", "d", "e"]

//=====================================================

// Ikki ta string berilgan. Ular anagram ekanini tekshiring.

// Anagram — bir xil harflardan tashkil topgan, faqat tartibi boshqacha bo‘lgan so‘z.
// Masalan: "listen" va "silent" → anagram.

// function isAnagram(str1, str2) {
//   str1 = str1.toLowerCase().replace(/\s+/g, '');
//   str2 = str2.toLowerCase().replace(/\s+/g, '');

//   if (str1.length !== str2.length) return false;

//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(isAnagram('listen', 'silent'));
// // true

// console.log(isAnagram('hel lo', 'world '));
// // false

// console.log(isAnagram('rail safety', 'fairy tales'));
// // true

//============================================================
//Berilgan array ichidagi faqat juft sonlarni yig‘indisini hisoblang.

// function sumOfEvens(arr) {
//   return arr.reduce((acc, cur) => {
//     if (cur % 2 == 0) {
//       acc += cur;
//     }
//     return acc;
//   }, 0);
// }
// function sumOfEvens(arr) {
//   let counter = 0;
//   for (let i of arr) {
//     if (i % 2 == 0) counter += i;
//   }
//   return counter;
// }

// console.log(sumOfEvens([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6)
// console.log(sumOfEvens([7, 11, 13])); // 0
// console.log(sumOfEvens([10, 20, 30])); // 60

//================================================

// Berilgan arraydagi juft indekslarda turgan sonlarning yig‘indisini hisoblang.

// function sumEvenIndex(arr) {
//   // shu yerga yozing
//   let counter = 0;
//   for (let i in arr) {
//     // console.log(i);

//     if (i % 2 == 0) {
//       counter += arr[i];
//     }
//   }
//   return counter;
// }
// function sumEvenIndex(arr) {
//   // shu yerga yozing
//   return arr.reduce((acc, cur, index) => {
//     if (index % 2 == 0) {
//       acc += cur;
//     }
//     return acc;
//   }, 0);
// }

// console.log(sumEvenIndex([1, 2, 3, 4, 5])); // 9 (1 + 3 + 5)
// console.log(sumEvenIndex([10, 20, 30, 40, 50])); // 90 (10 + 30 + 50)
// console.log(sumEvenIndex([7, 8, 9])); // 16 (7 + 9)

//================================================================
//Berilgan array ichidagi eng katta sonni qaytaruvchi funksiya yozing.
// function findMax(arr) {
//   let maxNum = arr[0];
//   arr.forEach((item) => {
//     if (item > maxNum && typeof item == 'number') {
//       maxNum = item;
//     }
//   });

//   return maxNum;
// }
// function findMax(arr) {
//   return arr.reduce((acc, cur) => {
//     acc < cur ? (acc = cur) : acc;
//     return acc;
//   }, arr[0]);
// }

// console.log(findMax([1, 7, 3, 9, 5])); // 9
// console.log(findMax([-10, -3, -50, -1])); // -1
// console.log(findMax([100])); // 100

//================================================================

// Berilgan array ichida indeksi toq bo‘lgan va qiymati juft elementlarni yig‘indisini qaytaring.

// function sumEvenAtOddIndex(arr) {
//   return arr.reduce((acc, cur, index) => {
//     if (index % 2 == 1 && cur % 2 == 0) {
//       acc += cur;
//     }
//     return acc;
//   }, 0);
// }

// console.log(sumEvenAtOddIndex([1, 2, 3, 4, 6]));
// // 6 (faqat index=3 → 4)

// console.log(sumEvenAtOddIndex([10, 20, 30, 40, 50, 60]));
// // 80 (20 + 60, chunki index=1 va index=5)

// console.log(sumEvenAtOddIndex([7, 11, 13, 15]));
// // 0 (toq indexlarda juft son yo‘q)

//====================================================

// Berilgan string ichida nechta unli harf (a, e, i, o, u) borligini qaytaring.
// (Unlilarni katta-kichik farq qilmasligi kerak: A ham, a ham bitta unli).

// Bu masalada siz:
// stringni harflarga ajratishingiz kerak,
// har bir harfni unlilar ro‘yxati bilan tekshirishingiz kerak,
// sanab chiqishingiz kerak

// function countVowels(str) {
//   let unliArr = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;
//   for (let i of str) {
//     if (unliArr.includes(i.toLowerCase())) count += 1;
//   }
//   return count;
// }
// function countVowels(str) {
//   let unliArr = ['a', 'e', 'i', 'o', 'u'];
//   let count = str.split('').reduce((acc, cur) => {
//     if (unliArr.includes(cur.toLowerCase())) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);

//   return count;
// }

// console.log(countVowels('Hello World'));
// // 3 (e, o, o)

// console.log(countVowels('JAVASCRIPT'));
// // 3 (A, A, I)

// console.log(countVowels('GPT'));
// 0 (unli yo‘q)

//===================================================
//Berilgan string ichidan faqat uzunligi 3 dan katta bo‘lgan so‘zlarni qaytaruvchi funksiya yozing.

// function filterWords(str) {
//   return str.split(' ').filter((item) => item.length >= 3);
// }

// console.log(filterWords('I am learning JavaScript right now'));
// // ["learning", "JavaScript", "right", "now"]

// console.log(filterWords('Do or do not, there is no try'));
// // ["there"]

// console.log(filterWords('Go big or go home'));
// // ["home"]

//=========================================================
// Sizda mahsulotlar ro‘yxati bor. Har bir mahsulotda id, name, price, va stock (ombordagi soni) maydonlari mavjud.
// Sizga id va count beriladi. Agar count musbat bo‘lsa — ombordagi mahsulot sonini oshiring, agar manfiy bo‘lsa — kamaytiring.
// Agar stock hech qachon 0 dan pastga tushib qolsa, u holda 0 qilib qo‘ying.

// function updateStock(products, id, count) {
//   if (!products.length || count === 0) {
//     return products;
//   } // bu xolatda bosh array qaytaradi yozmasam ham qaytaradi lekin interatsiya bolmasili uchun bu if ichiga yozildi.

//   if (count < 0) {
//     return products.map((product) =>
//       product.id === id
//         ? {
//             ...product,
//             stock:
//               product.stock - Math.abs(count) >= 0
//                 ? product.stock - Math.abs(count)
//                 : 0,
//           }
//         : product
//     );
//   }

//   if (count > 0) {
//     return products.map((product) =>
//       product.id === id ? { ...product, stock: product.stock + count } : product
//     );
//   }

// }

// const products = [
//   { id: 1, name: 'Olma', price: 10000, stock: 5 },
//   { id: 2, name: 'Banan', price: 12000, stock: 3 },
//   { id: 3, name: 'Uzum', price: 15000, stock: 10 },
// ];

// console.log(updateStock(products, 2, -5));

//====================================================

// Mahsulotlar ro‘yxatida har bir mahsulotda id, name, price va category mavjud.
// Senga ma’lum bir kategoriya va foiz chegirma beriladi.
// Sen shu kategoriyadagi barcha mahsulotlarga chegirmani qo‘llashing kerak.

// Masalan, chegirma = 20 bo‘lsa, price 20% ga kamayadi.

// function applyDiscount(products, category, protcent) {
//   if (products.length === 0 || protcent <= 0 || protcent > 100) {
//     return products;
//   }

//   return products.map((product) =>
//     product.category === category
//       ? {
//           ...product,
//           price: Math.round(product.price - (product.price / 100) * protcent),
//         }
//       : product
//   );
// }

// const products = [
//   { id: 1, name: 'Olma', price: 10000, category: 'meva' },
//   { id: 2, name: 'Banan', price: 12000, category: 'meva' },
//   { id: 3, name: 'Non', price: 4000, category: 'nonvoy' },
//   { id: 4, name: 'Uzum', price: 15000, category: 'meva' },
// ];

// console.log(applyDiscount(products, 'meva', 33));

//====================================

// groupByCategory

// Senga mahsulotlar ro‘yxati berilgan. Har bir mahsulotda:
// id, name, price, category bor.
// Agar products bo‘sh bo‘lsa → bo‘sh obyekt {} qaytariladi.
// Har bir kategoriya kalit sifatida chiqadi.
// Mahsulotlar o‘z kategoriyasi ichida array shaklida yig‘iladi

// function groupByCategory(products) {
//   if (!products.length) {
//     return {};
//   }

//   return products.reduce((acc, cur) => {
//     if (acc[cur.category]) {
//       acc[cur.category].push(cur);
//     } else {
//       acc[cur.category] = [cur];
//     }
//     return acc;
//   }, {});
// }

// function groupByCategory(products) {
//   if (!products.length) return {};

//   return products.reduce((acc, cur) => {
//     (acc[cur.category] ??= []).push(cur);
//     return acc;
//   }, {});
// }

// const products = [
//   { id: 1, name: 'Olma', price: 10000, category: 'meva' },
//   { id: 2, name: 'Banan', price: 12000, category: 'meva' },
//   { id: 3, name: 'Non', price: 4000, category: 'nonvoy' },
//   { id: 4, name: 'Lag‘mon', price: 25000, category: 'taom' },
//   { id: 5, name: 'Uzum', price: 15000, category: 'meva' },
// ];

// console.log(groupByCategory(products));

//====================================================================
// Senga mahsulotlar ro‘yxati berilgan (id, name, price, stock, category).
// 👉 Vazifa: har bir kategoriya bo‘yicha umumiy qiymatni hisoblash.
// gar products bo‘sh bo‘lsa → {} qaytariladi.
// Har bir kategoriya faqat umumiy summani oladi.
// price va stock musbat bo‘ladi (manfiy emas)
// // Umumiy qiymat degani: price * stock.
// Natija obyekt bo‘lishi kerak.

// const products = [
//   { id: 1, name: 'Olma', price: 10000, stock: 5, category: 'meva' },
//   { id: 2, name: 'Banan', price: 12000, stock: 3, category: 'meva' },
//   { id: 3, name: 'Non', price: 4000, stock: 10, category: 'nonvoy' },
//   { id: 4, name: 'Lag‘mon', price: 25000, stock: 2, category: 'taom' },
//   { id: 5, name: 'Uzum', price: 15000, stock: 4, category: 'meva' },
// ];

// function calculateCategoryTotals(products) {
//   if (!products.length) {
//     return {};
//   }

//   return products.reduce((acc, curVal) => {
//     if (curVal.category in acc) {
//       acc[curVal.category] += curVal.price * curVal.stock;
//     } else {
//       acc[curVal.category] = curVal.price * curVal.stock;
//     }
//     return acc;
//   }, {});
// }

// console.log(calculateCategoryTotals(products));

//==============================================================

// findTopProductByCategory

// Senga mahsulotlar ro‘yxati berilgan (id, name, price, stock, category).
// 👉 Vazifa: har bir kategoriya bo‘yicha eng qimmat mahsulotni topish.
// Agar products bo‘sh bo‘lsa → {} qaytariladi.
// Har bir kategoriya faqat bitta eng qimmat mahsulotni oladi.
// Agar bir xil narxdagi mahsulotlar bo‘lsa → massivda oldin kelgani olinadi.

// const products = [
//   { id: 1, name: 'Olma', price: 10000, stock: 5, category: 'meva' },
//   { id: 2, name: 'Banan', price: 12000, stock: 3, category: 'meva' },
//   { id: 3, name: 'Non', price: 4000, stock: 10, category: 'nonvoy' },
//   { id: 4, name: 'Lag‘mon', price: 25000, stock: 2, category: 'taom' },
//   { id: 5, name: 'Uzum', price: 15000, stock: 4, category: 'meva' },
//   { id: 6, name: 'Patir', price: 6000, stock: 6, category: 'nonvoy' },
// ];

// function findTopProductByCategory(products) {
//   if (!products.length) {
//     return {};
//   }

//   return products.reduce((acc, curVal) => {
//     if (!acc[curVal.category]) {
//       acc[curVal.category] = curVal;
//     } else if (curVal.price > acc[curVal.category].price) {
//       acc[curVal.category] = curVal;
//     }
//     return acc;
//   }, {});
// }

// console.log(findTopProductByCategory(products));

// /==-=======================================

// soning tub yoki tub emasligini aniqlash

// function isPrime(num) {
//   if (!Number.isInteger(num) || num <= 1) return false;

//   let counter = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) counter += 1;
//   }
//   if (counter === 2) return true;
//   else return false;
// }  bu usul yaxshi faqat katta sonda optimal emas

// function isPrime(num) {
//     // 1️⃣ Son butun bo‘lmasligi yoki 1 dan kichik/tenk bo‘lsa → tub emas
//     if (!Number.isInteger(num) || num <= 1) return false;

//     // 2️⃣ 2 tub son sifatida alohida ko‘rib chiqiladi
//     if (num === 2) return true;

//     // 3️⃣ Agar son juft bo‘lsa (masalan 4, 6, 8) → tub emas
//     if (num % 2 === 0) return false;

//     // 4️⃣ Faqat toq bo‘luvchilarni tekshiramiz
//     //    "i <= Math.sqrt(num)" degani: faqat kvadrat ildizgacha tekshiramiz
//     //    chunki agar num bo‘luvchisi √num dan katta bo‘lsa,
//     //    albatta √num dan kichik ham bir bo‘luvchisi mavjud bo‘ladi.
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       // Agar num bo‘linadigan son topilsa → tub emas
//       if (num % i === 0) return false;
//     }

//     // 5️⃣ Hech qanday bo‘luvchi topilmasa → tub
//     return true;
//   }

// console.log(isPrime(7));
// console.log(isPrime(10));
// console.log(isPrime(1));
// console.log(isPrime(2));

//==============================================================
//findSecondLargest
// Berilgan sonlar massivida ikkinchi eng katta sonni topadigan funksiya yozing.
// Agar 2 ta yoki undan kam turli element bo‘lsa → null qaytarsin.
// Massivda musbat, manfiy sonlar bo‘lishi mumkin.
// Eng katta son topilgandan keyin, undan kichik bo‘lgan eng kattasini topish kerak.

// function findSecondLargest(arr) {
//   let numArr = [...new Set(arr)];

//   if (numArr.length < 2) return null;

//   let maxNum = Math.max(...numArr);
//   let secontMax = 0;

//   for (let i of numArr) {
//     if (i < maxNum && i > secontMax) {
//       secontMax = i;
//     }
//   }

//   return secontMax;
// }
// function findSecondLargest(arr) {
//   let numArr = [...new Set(arr)];
//   if (numArr.length < 2) return null;
//   return numArr.sort((a, b) => b - a)[1];
// }

// console.log(findSecondLargest([10, 20, -30, 40]));
// console.log(findSecondLargest([10, 10, 10, 10]));

//========================================================
// mergeAndSumByCategory(arr1, arr2) funksiyasini yozing:
// Ikkita massivni birlashtiradi.
// Agar bir xil nomdagi mahsulot uchrasa → stock larini qo‘shib yuboradi.
// Natija unique mahsulotlar massivi bo‘lsin.

// const productsA = [
//   { name: 'Olma', category: 'Meva', stock: 10 },
//   { name: 'Sabzi', category: 'Sabzavot', stock: 5 },
// ];

// const productsB = [
//   { name: 'Olma', category: 'Meva', stock: 7 },
//   { name: 'Banan', category: 'Meva', stock: 3 },
// ];

// function mergeAndSumByCategory(productsA, productsB) {
//   let allProducts = [...productsA, ...productsB];
//   if (!allProducts.length) return [];

//   const merged = allProducts.reduce((acc, cur) => {
//     let key = cur.name + '_' + cur.category;
//     if (acc[key]) {
//       acc[key].stock += cur.stock;
//     } else {
//       acc[key] = { ...cur };
//     }
//     return acc;
//   }, {});

//   return Object.values(merged);
// }

// console.log(mergeAndSumByCategory(productsA, productsB));

//===================================================================
// const products = [
//   { name: 'Olma', category: 'Meva' },
//   { name: 'Sabzi', category: 'Sabzavot' },
//   { name: 'Banan', category: 'Meva' },
//   { name: 'Bodring', category: 'Sabzavot' },
// ];

// function countByCategory(products) {
//   if (!products.length) return {};
//   return products.reduce((acc, cur) => {
//     if (acc[cur.category]) {
//       acc[cur.category] += 1;
//     } else {
//       acc[cur.category] = 1;
//     }

//     return acc;
//   }, {});
// }

// console.log(countByCategory(products));

//=======================================================

// getUniqueNumbers nomli funksiya yozing. U sonlardan iborat massiv qabul qiladi va faqat takrorlanmagan (unikal) sonlarni qaytarsin.

// function getUniqueNumbers(arr) {
//   if (!arr.length) return arr;
//   let uniqueArr = [...new Set(arr)];
//   return uniqueArr;
// }

// function getUniqueNumbers(arr) {
//   if (!arr.length) return arr;
//   let uniqueArr = [];

//   for (let i of arr) {
//     if (!uniqueArr.includes(i)) {
//       uniqueArr.push(i);
//     }
//   }
//   return uniqueArr;
// }
// function getUniqueNumbers(arr) {
//   if (!arr.length) return arr;
//   return arr.reduce((acc, cur) => {
//     if (!acc.includes(cur)) {
//       acc.push(cur);
//     }
//     return acc;
//   }, []);
// }

// console.log(getUniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
// // Natija: [1, 2, 3, 4, 5]

//=================================================

// groupByCategory
// Sizga mahsulotlar massivi beriladi. Har bir mahsulot obyekt ko‘rinishida bo‘ladi:
// 👉 Vazifa: groupByCategory(products) funksiyasini yozing.
// U products massivini kategoriyalar bo‘yicha guruhlab qaytarsin.
// Shartlar:
// Bo‘sh array kelsa, bo‘sh obyekt qaytishi kerak.
// Har doim obyekt sifatida guruhlanishi kerak.
// reduce, for, yoki boshqa usuldan foydalanishingiz mumkin.

// const products = [
//   { id: 1, name: 'Apple', category: 'fruit' },
//   { id: 2, name: 'Cucumber', category: 'vegetable' },
//   { id: 3, name: 'Banana', category: 'fruit' },
//   { id: 4, name: 'Carrot', category: 'vegetable' },
//   { id: 5, name: 'Orange', category: 'fruit' },
// ];

// function groupByCategory(products) {
//   if (!products.length) return {};

//   return products.reduce((acc, cur) => {
//     if (acc[cur.category]) {
//       acc[cur.category].push(cur);
//     } else {
//       acc[cur.category] = [cur];
//     }
//     return acc;
//   }, {});
// }

// console.log(groupByCategory(products));

//===========================================================================

// countWords

// Sizga matn (string) beriladi.
// countWords(text) funksiyasini yozing. U matndagi so‘zlarni sanab, obyekt ko‘rinishida qaytarsin.
// Bo‘sh string kelsa, bo‘sh obyekt qaytsin.
// So‘zlar bo‘sh joy (space) bilan ajratilgan deb hisoblang.
// Hozircha vergul, nuqta, belgilar haqida o‘ylamasak ham bo‘ladi (faqat oddiy so‘zlar).

// const text = 'apple banana apple orange banana apple';

// function countWords(text) {
//   if (typeof text !== 'string' || !text.length) return {};

//   let arr = text.split(' ');
//   return arr.reduce((acc, cur) => {
//     if (acc[cur]) {
//       acc[cur] += 1;
//     } else {
//       acc[cur] = 1;
//     }
//     return acc;
//   }, {});
// }
// console.log(countWords(text));

//=====================================================

// addProduct nomli funksiya yoz.
// U ikkita parametr oladi:
// products → mavjud mahsulotlar ro‘yxati (array)
// newProduct → qo‘shilishi kerak bo‘lgan yangi mahsulot (object)
// Funksiya yangi mahsulotni massiv oxiriga qo‘shib, yangi massivni qaytarishi kerak (asl massivni o‘zgartirmasdan).

// let products = [
//   { id: 1, name: 'Book', price: 20 },
//   { id: 2, name: 'Pen', price: 5 },
// ];

// let newProduct = { id: 3, name: 'Pencil', price: 2 };

// function addProduct(products, newProduct) {
//   if (products.some((item) => item.id === newProduct.id)) {
//     throw new Error('Product with this ID already exists');
//   }
//   return [...products, newProduct];
// }
// console.log(addProduct(products, newProduct));

//=======================================================

// updateProduct nomli funksiya yoz.
// Parametrlar:
// products → mahsulotlar ro‘yxati
// updatedProduct → yangilanadigan mahsulot (masalan, { id: 2, name: "Blue Pen", price: 6 })
// Funksiya berilgan id bo‘yicha massivdan mahsulotni topib, uni yangilashi kerak.
// Asl massivni o‘zgartirmasin, yangi massiv qaytarsin.

// let products = [
//   { id: 1, name: 'Book', price: 20 },
//   { id: 2, name: 'Pen', price: 5 },
// ];

// let updatedProduct = { id: 2, name: 'Blue Pen', price: 6 };

// const updateProduct = (products, updatedProduct) => {
//   if (!products.some((item) => item.id === updatedProduct.id)) {
//     return products; // o'zgarishsiz qaytarish
//   }
//   return products.map((item) =>
//     item.id === updatedProduct.id ? updatedProduct : item
//   );
// };
// console.log(updateProduct(products, updatedProduct));
// Natija:
// [
//   { id: 1, name: "Book", price: 20 },
//   { id: 2, name: "Blue Pen", price: 6 }
// ]

//=====================================================

//====================================================
// deleteProduct nomli funksiya yoz.
// Uchta shart qo‘shamiz:
// Parametrlar:
// products → mahsulotlar ro‘yxati
// id → o‘chirilishi kerak bo‘lgan mahsulot IDsi
// Agar ID mavjud bo‘lsa — o‘sha mahsulotni o‘chirib, yangi massiv qaytarsin.
// Agar ID mavjud bo‘lmasa — massivni o‘zgarishsiz qaytarsin.
// Agar massiv bo‘sh bo‘lsa — to‘g‘ridan-to‘g‘ri bo‘sh massivni qaytarsin.

// let products = [
//   { id: 1, name: 'Book', price: 20 },
//   { id: 2, name: 'Pen', price: 5 },
// ];

// function deleteProduct(products, id) {
//   if (!products.length) {
//     return [];
//   } else if (products.some((item) => item.id === id)) {
//     return [...products].filter((product) => product.id !== id);
//   } else {
//     return products;
//   }
// }

// let result = deleteProduct(products, 2);
// console.log(result);

// Natija:
// [{ id: 1, name: "Book", price: 20 }]

// let result = deleteProduct(products, 5);
// console.log(result);

// Natija (o‘zgarishsiz):
// [
//   { id: 1, name: "Book", price: 20 },
//   { id: 2, name: "Pen", price: 5 }
// ]

// let result = deleteProduct([], 1);
// console.log(result);

//=======================================
// findProductsByPriceRange nomli funksiya yoz:
// Parametrlar: products, minPrice, maxPrice.
// Natija: minPrice <= product.price <= maxPrice bo‘lgan mahsulotlar ro‘yxati.
// Agar bunday mahsulotlar topilmasa, bo‘sh massiv qaytarilsin.

// let products = [
//   { id: 1, name: 'Book', price: 20 },
//   { id: 2, name: 'Pen', price: 5 },
//   { id: 3, name: 'Pencil', price: 2 },
// ];

// function findProductsByPriceRange(products, min, max) {
//   if (!products.length) return [];

//   return products.filter((item) => item.price >= min && item.price <= max);
// }

// console.log(findProductsByPriceRange(products, 21, 25));
// // Natija:
// // [
// //   { id: 1, name: "Book", price: 20 },
// //   { id: 2, name: "Pen", price: 5 }
// // ]

//============================================================
// 👉 findProductsByCategoryAndPrice nomli funksiya yoz.
// Parametrlar:
// store → categoriyalarga bo‘lingan mahsulotlar ro‘yxati
// categoryName → qaysi kategoriyadan qidirish kerak (string)
// minPrice, maxPrice → narx oralig‘i
// Funksiya:
// Berilgan kategoriyani topishi kerak.
// Shu kategoriya ichidan minPrice <= price <= maxPrice bo‘lgan mahsulotlarni qaytarishi kerak.
// Agar kategoriya topilmasa yoki mahsulot mos kelmasa → [] qaytarishi kerak.
// let store = [
//   {
//     category: 'Books',
//     products: [
//       { id: 1, name: 'Book A', price: 20 },
//       { id: 2, name: 'Book B', price: 25 },
//     ],
//   },
//   {
//     category: 'Stationery',
//     products: [
//       { id: 3, name: 'Pen', price: 5 },
//       { id: 4, name: 'Pencil', price: 2 },
//     ],
//   },
// ];

// function findProductsByCategoryAndPrice(
//   store,
//   categoryName,
//   minPrice,
//   maxPrice
// ) {
//   const category = store.find((item) => item.category === categoryName);
//   if (!category) return [];
//   return category.products.filter(
//     (item) => item.price >= minPrice && item.price <= maxPrice
//   );
// }

// console.log(findProductsByCategoryAndPrice(store, 'Stationery', 2, 5));

//===========================================================

// findProductsByCategoriesAndPriceRange(store, categories, minPrice, maxPrice) funksiyasini yozing.
// Shartlar:
// categories — bu massiv bo‘ladi, masalan: ["Electronics", "Books"].
// Funksiya faqat shu kategoriyalar ichidan mahsulotlarni qidiradi.
// Mahsulot narxi minPrice va maxPrice oralig‘ida bo‘lishi kerak.
// Agar birorta ham mos keladigan mahsulot topilmasa, bo‘sh massiv qaytarsin.
// Natija bitta massiv bo‘lib, ichida mahsulot obyektlari bo‘ladi.

//shartlar
// categories — bu massiv bo‘ladi, masalan: ["Electronics", "Books"].
// Funksiya faqat shu kategoriyalar ichidan mahsulotlarni qidiradi.
// Mahsulot narxi minPrice va maxPrice oralig‘ida bo‘lishi kerak.
// Agar birorta ham mos keladigan mahsulot topilmasa, bo‘sh massiv qaytarsin.
// Natija bitta massiv bo‘lib, ichida mahsulot obyektlari bo‘ladi.
// const store = [
//   {
//     category: 'Electronics',
//     products: [
//       { id: 1, name: 'Laptop', price: 1500 },
//       { id: 2, name: 'Phone', price: 800 },
//       { id: 3, name: 'Tablet', price: 600 },
//     ],
//   },
//   {
//     category: 'Clothes',
//     products: [
//       { id: 4, name: 'T-Shirt', price: 30 },
//       { id: 5, name: 'Jeans', price: 60 },
//       { id: 6, name: 'Jacket', price: 120 },
//     ],
//   },
//   {
//     category: 'Books',
//     products: [
//       { id: 7, name: 'Novel', price: 15 },
//       { id: 8, name: 'Science', price: 40 },
//       { id: 9, name: 'History', price: 25 },
//     ],
//   },
// ];

// function findProductsByCategoriesAndPriceRange(
//   store,
//   categories,
//   minPrice,
//   maxPrice
// ) {
//   let categoriesStore = store.filter((item) =>
//     categories.includes(item.category)
//   );

//   if (!categoriesStore) return [];
//   return categoriesStore
//     .flatMap((item) => item.products)
//     .filter((item) => item.price >= minPrice && item.price <= maxPrice);
// }

// function findProductsByCategoriesAndPriceRange(
//   store,
//   categories,
//   minPrice,
//   maxPrice
// ) {
//   return store.reduce((acc, item) => {
//     if (categories.includes(item.category)) {
//       acc.push(
//         ...item.products.filter(
//           (p) => p.price >= minPrice && p.price <= maxPrice
//         )
//       );
//     }
//     return acc;
//   }, []);
// }

// console.log(
//   findProductsByCategoriesAndPriceRange(
//     store,
//     ['Electronics', 'Books'],
//     20,
//     1000
//   )
// );

//========================================================================
// Funksiya mahsulotlarni category bo‘yicha guruhlab obyekt qaytarsin.

// Har bir category ostida shu kategoriyaga tegishli mahsulotlarning umumiy narxi (totalPrice) va mahsulotlar ro‘yxati (items) bo‘lishi kerak.
// const products = [
//   { id: 1, name: 'Phone', category: 'Electronics', price: 1200 },
//   { id: 2, name: 'TV', category: 'Electronics', price: 800 },
//   { id: 3, name: 'Shirt', category: 'Clothes', price: 50 },
//   { id: 4, name: 'Jeans', category: 'Clothes', price: 80 },
//   { id: 5, name: 'Bread', category: 'Food', price: 2 },
//   { id: 6, name: 'Milk', category: 'Food', price: 1 },
// ];
// function groupProductsByCategory(products) {
//   if (!products.length) return {} || null;
//   return products.reduce((acc, cur) => {
//     if (acc[cur.category]) {
//       acc[cur.category].items.push(cur);
//       acc[cur.category].totalPrice += cur.price;
//     } else {
//       acc[cur.category] = {
//         totalPrice: cur.price,
//         items: [cur],
//       };
//     }
//     return acc;
//   }, {});
// }

// console.log(groupProductsByCategory(products));

//============================================

// Sizda do‘konlar ro‘yxati bor. Har bir do‘kon (store) obyekt bo‘lib, unda id, name, va products massiv mavjud.
// products massivida mahsulotlar obyekt ko‘rinishida saqlanadi (id, name, price).
// Funksiya uchta parametr oladi:
// stores → barcha do‘konlar
// storeId → qaysi do‘konda o‘zgartirish kerak
// productId → qaysi mahsulotning narxini o‘zgartirish kerak
// newPrice → yangi narx
// Agar storeId va productId mavjud bo‘lsa — narxni yangilab, yangi massiv qaytarsin (immutably).
// Agar mavjud bo‘lmasa — massivni o‘zgarishsiz qaytarsin.

// const stores = [
//   {
//     id: 1,
//     name: 'Tech Store',
//     products: [
//       { id: 101, name: 'Phone', price: 1000 },
//       { id: 102, name: 'Laptop', price: 2000 },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Clothes Store',
//     products: [
//       { id: 201, name: 'Shirt', price: 50 },
//       { id: 202, name: 'Jeans', price: 80 },
//     ],
//   },
// ];

// function updateProductPrice(stores, storeId, productId, newPrice) {
//   if (!stores.length) return [];

//   return stores.map((store) => {
//     if (store.id === storeId) {
//       return {
//         ...store,
//         products: store.products.map((prod) =>
//           prod.id === productId ? { ...prod, price: newPrice } : prod
//         ),
//       };
//     } else {
//       return store;
//     }
//   });
// }

// console.log(updateProductPrice(stores, 1, 101, 1200));

//============================================================================

// deleteProduct funksiyasini yozing.
// Shartlar:
// Parametr sifatida uchta qiymat oladi:
// stores → do‘konlar ro‘yxati
// storeId → qaysi do‘kondan o‘chirish kerak
// productId → qaysi mahsulotni o‘chirish kerak
// Agar storeId mavjud bo‘lmasa → massivni o‘zgarishsiz qaytarsin.
// Agar productId mavjud bo‘lmasa → massivni o‘zgarishsiz qaytarsin.

// const stores = [
//   {
//     id: 1,
//     name: 'Tech Store',
//     products: [
//       { id: 101, name: 'Phone', price: 1000 },
//       { id: 102, name: 'Laptop', price: 2000 },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Clothes Store',
//     products: [
//       { id: 201, name: 'Shirt', price: 50 },
//       { id: 202, name: 'Jeans', price: 80 },
//     ],
//   },
// ];

// function deleteProduct(stores, storeId, productId) {
//   if (!stores.length) return [];
//   return stores.map((store) => {
//     if (storeId === store.id) {
//       return {
//         ...store,
//         products: store.products.filter((prod) => prod.id !== productId),
//       };
//     } else {
//       return store;
//     }
//   });
// }

// console.log(deleteProduct(stores, 2, 201));

//===================================================================
// deleteProduct(stores, storeId, productId) funksiyasini yoz.
// Funksiya berilgan storeId bo‘yicha do‘konni topadi.
// O‘sha do‘kondagi productId ga teng mahsulotni o‘chiradi.
// Agar mahsulot topilmasa — massivni o‘zgarishsiz qaytaradi.
// Asl massiv (stores) o‘zgarmasligi kerak (immutability).

// const stores = [
//   {
//     id: 1,
//     name: 'Tech Store',
//     products: [
//       { id: 101, name: 'Phone', price: 800 },
//       { id: 102, name: 'Laptop', price: 1500 },
//       { id: 103, name: 'Tablet', price: 600 },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Accessory Store',
//     products: [
//       { id: 201, name: 'Headphones', price: 200 },
//       { id: 202, name: 'Charger', price: 50 },
//     ],
//   },
// ];

// function deleteProduct(stores, storeId, productId) {
//   if (!stores.length) return [];
//   return stores.map((store) => {
//     if (store.id === storeId) {
//       return {
//         ...store,
//         products: store.products.filter((prod) => prod.id !== productId),
//       };
//     } else {
//       return store;
//     }
//   });
// }

// console.log(deleteProduct(stores, 1, 102));

//================================================================

// const stores = [
//   {
//     id: 1,
//     name: 'Tech Store',
//     categories: [
//       {
//         id: 'c1',
//         name: 'Electronics',
//         products: [
//           { id: 101, name: 'Phone', price: 800 },
//           { id: 102, name: 'Laptop', price: 1500 },
//         ],
//       },
//       {
//         id: 'c2',
//         name: 'Home Appliances',
//         products: [
//           { id: 103, name: 'Washing Machine', price: 1200 },
//           { id: 104, name: 'Microwave', price: 400 },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Accessory Store',
//     categories: [
//       {
//         id: 'c3',
//         name: 'Accessories',
//         products: [
//           { id: 201, name: 'Headphones', price: 200 },
//           { id: 202, name: 'Charger', price: 50 },
//         ],
//       },
//     ],
//   },
// ];

//   deleteProduct(stores, storeId, categoryId, productId) funksiyasini yoz:
// storeId bo‘yicha do‘konni topadi.
// Shu do‘kondagi categoryId bo‘yicha kategoriyani topadi.
// O‘sha kategoriyadagi productId mahsulotni o‘chiradi.
// Agar topilmasa → massivni o‘zgarishsiz qaytaradi.
// Asl massiv (stores) o‘zgarmasligi kerak (immutability).
// Bonus: { stores: updatedStores, deleted: true|false } qaytarsin.

// function deleteProduct(stores, storeId, categoryId, productId) {
//   let deleted = false;
//   if (!stores.length) return { stores: [], delete: deleted };

//   return stores.map((store) => {
//     if (store.id === storeId) {
//       return {
//         ...store,
//         categories: store.categories.map((category) => {
//           if (category.id === categoryId) {
//             return {
//               ...category,
//               products: category.products.filter(
//                 (prod) => prod.id !== productId
//               ),
//             };
//           } else {
//             category;
//           }
//         }),
//       };
//     } else {
//       return store;
//     }
//   });
// }

// console.log(deleteProduct(stores, 1, 'c1', 102));

//===============================================

// let mySet = new Set([1, 1, 2, 3, 4, 45]);

// console.log(mySet);

// mySet.add(33);
// mySet.delete(1);
// console.log(mySet.clear());

// const myMap = new Map();

// myMap.set('name', 'Asadbek');
// myMap.set('age', 25);
// myMap.set(1, 'raqam ham kalit bo‘lishi mumkin');

// console.log(myMap.get('name')); // Asadbek

// console.log(myMap.has('age')); // true
// // myMap.delete('age');
// console.log(myMap.size); // 2

// for (let [key, value] of myMap) {
//   console.log(key, ':', value);
// }

// Takrorlanuvchi email manzillarni olib tashlang va faqat unikal email ro‘yxatini qaytaring.
// Natijani massiv (Array) ko‘rinishida qaytaring.
// const emails = [
//   'user1@gmail.com',
//   'user2@gmail.com',
//   'user3@gmail.com',
//   'user1@gmail.com',
//   'user4@gmail.com',
//   'user2@gmail.com',
//   'user5@gmail.com',
// ];

// let myUniqueEmail = [...new Set(emails)];
// console.log(myUniqueEmail);

//====================================================

// const orders = [
//   { id: 1, customer: 'Ali', amount: 120 },
//   { id: 2, customer: 'Vali', amount: 80 },
//   { id: 3, customer: 'Ali', amount: 200 },
//   { id: 4, customer: 'Hasan', amount: 150 },
//   { id: 5, customer: 'Vali', amount: 70 },
// ];

// Map dan foydalanib, har bir mijozning jami buyurtma summasini hisoblang.
// Masalan: "Ali" → 320, "Vali" → 150, "Hasan" → 150.
// Natijada Map qaytaring (ya’ni kalit mijoz, qiymat jami summa).

// let totals = new Map();

// for (let order of orders) {
//   console.log(order);
//   const { customer, amount } = order;

//   if (totals.has(customer)) {
//     totals.set(customer, totals.get(customer) + amount);
//   } else {
//     totals.set(customer, amount);
//   }
// }

// console.log(totals);

// let total2 = orders.reduce((acc, cur) => {
//   if (acc[cur.customer]) {
//     acc[cur.customer] += cur.amount;
//   } else {
//     acc[cur.customer] = cur.amount;
//   }
//   return acc;
// }, {});

//========================================================

// Masala 1: Unique Numbers
// Sizga numbers nomli array berilgan. Undan faqat unique (takrorlanmagan) sonlarni olish kerak.
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
// 📌 Eslatma: Set ishlating.

// function unikArr(arr) {
//   if (Array.isArray(arr)) {
//     if (!arr.length) return [];
//     return [...new Set(arr.flat(Infinity))];
//   } else {
//     return 'array emas bu';
//   }
// }

// console.log(unikArr([]));
// console.log(unikArr([1, 2, 2, 2, 2, 3, 4, 4, 5]));
// console.log(unikArr(1));

//===============================================

// Masala 2: Student Map

// Sizda studentlar haqida ma’lumotlar arrayi bor:
// Map dan foydalanib id → name ko‘rinishida saqlang.
// Keyin:
// id=2 studentni olish
// id=3 studentni o‘chirish
// Yangi student {id:4, name:"Husan"} qo‘shis
// const students = [
//   { id: 1, name: 'Ali' },
//   { id: 2, name: 'Vali' },
//   { id: 3, name: 'Hasan' },
// ];

// function getMap(arr) {
//   let studentMap = new Map();
//   if (Array.isArray(arr)) {
//     if (!arr.length) return [];
//     arr.forEach((item) => {
//       studentMap.set(item.id, item.name);
//     });
//   } else {
//     return 'unknown';
//   }

//   return Array.from(studentMap.entries());
// }

// console.log(getMap(students));

//=================================================================================
// Sizda onlayn foydalanuvchilarni saqlash uchun Set bor.
// Boshida ["Ali", "Vali", "Hasan"] foydalanuvchilar onlayn bo‘ladi.
// Keyin quyidagilarni qiling:
// "Husan" ismli yangi foydalanuvchini qo‘shing
// "Hasan" foydalanuvchisini o‘chiring
// "Ali" foydalanuvchisi onlaynmi-yo‘qmi tekshiring
// Oxirida Setni massivga aylantirib qaytaring

// let users = new Set(['Ali', 'Vali', 'Hasan']);

// // [object Set] qaytaradi

// function getSet(users) {
//   console.log(users);

//   users.add('Husan');
//   users.delete('Hasan');
//   console.log('Ali onlaynmi?', users.has('Ali'));

//   return [...users];
// }

// console.log(getSet(users));

//===============================================
// 👉 Vazifa:
// Set yordamida takroriy email’larni olib tashlang
// Faqat gmail.com domeniga tegishli email’larni ajratib oling
// Natijani massiv ko‘rinishida qaytaring

// const emails = [
//   'ali@gmail.com',
//   'vali@gmail.com',
//   'ali@gmail.com',
//   'hasan@mail.com',
//   'husan@gmail.com',
//   'vali@gmail.com',
// ];

// function UniqueEmail(emails) {
//   if (!Array.isArray(emails)) return 'Array emas!';
//   if (!emails.length) return [];

//   const newEmail = emails.filter((item) => item.endsWith('gmail.com'));
//   const emailsSet = new Set(newEmail);
//   return [...emailsSet];
// }

// console.log(UniqueEmail(emails));

//================================================
// const courses = [
//   { course: 'JavaScript', students: ['Ali', 'Vali', 'Hasan'] },
//   { course: 'Python', students: ['Husan', 'Vali', 'Ali'] },
//   { course: 'Java', students: ['Sardor', 'Hasan', 'Vali'] },
// ];

//   Map ichida saqlang, format:
// key → kurs nomi
// value → talabalar Set’i (takrorlarsiz)
// "Python" kursidagi talabalarni massiv shaklida qaytaring.
// "Vali" nechta kursga yozilganini hisoblab qaytaring.

// function courseStudents(courses) {
//   if (!Array.isArray(courses)) return 'Array emas!';
//   if (!courses.length) return [];

//   // 1. Map yaratamiz: course → Set(students)
//   const courseMap = new Map();

//   courses.forEach((item) => {
//     courseMap.set(item.course, new Set(item.students));
//   });

//   // 2. Python kursidagi talabalar (massivga aylantirib qaytarish)
//   const pythonStudents = Array.from(courseMap.get('Python'));

//   // 3. "Vali" nechta kursga yozilgan?
//   let valiCount = 0;
//   for (let [course, students] of courseMap) {
//     if (students.has('Vali')) {
//       valiCount++;
//     }
//   }

//   return [
//     `Python kursi: ${JSON.stringify(pythonStudents)}`,
//     `Vali yozilgan kurslar soni: ${valiCount}`,
//   ];
// }

// console.log(courseStudents(courses));

//================================================================

// const products = [
//   'iPhone',
//   'Samsung',
//   'Nokia',
//   'iPhone',
//   'Xiaomi',
//   'Samsung',
//   'Oppo',
// ];

// function findDuplicates(arr) {
//   let seen = new Set();
//   let duplicates = new Set();

//   for (let item of arr) {
//     if (seen.has(item)) {
//       duplicates.add(item);
//     } else {
//       seen.add(item);
//     }
//   }

//   return [...duplicates];
// }

// // Test
// console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6, 1]));
// [2, 1]

//=================================================
// const phones = [
//   '+998901112233',
//   '+998901112233',
//   '+998907778899',
//   '+998933334455',
//   '+998907778899',
//   '+998935551122',
// ];

// Set yordamida takroriy raqamlarni olib tashlang.

// Natijani massiv ko‘rinishida qaytaring.

// function getUnique(arr) {
//   return [...new Set(arr)];
// }

// console.log(getUnique(phones));

//=========================================================
// const users = [
//   { id: 1, name: 'Ali' },
//   { id: 2, name: 'Vali' },
//   { id: 3, name: 'Hasan' },
//   { id: 4, name: 'Husan' },
// ];
// Map yarating, unda id → name bo‘lsin.

// Mapdan foydalanuvchi id=3 bo‘yicha ismni oling.

// function getMap(arr) {
//   let myMap = new Map();

//   arr.forEach((element) => {
//     myMap.set(element.id, element.name);
//   });

//   return myMap.has(id) ? myMap.get(id) : 'Bunday id topilmadi';
// }

// console.log(getMap(users));

//==================================================

// const emails = [
//   'ali@gmail.com',
//   'vali@gmail.com',
//   'ali@gmail.com',
//   'hasan@yahoo.com',
//   'vali@gmail.com',
//   'husan@mail.ru',
// ];
// Set yordamida unique email ro‘yxatini chiqaring.

// Takrorlangan email’larni alohida massivda qaytaring.

// function getSet(arr) {
//   let seen = new Set();
//   let dublicates = new Set();

//   for (let item of arr) {
//     if (seen.has(item)) {
//       dublicates.add(item);
//     } else {
//       seen.add(item);
//     }
//   }
//   return {
//     seen: [...seen],
//     dublicates: [...dublicates],
//   };
// }

// console.log(getSet(emails));

// console.log([...new Set(emails)]);

//============================================

// function getUnique(arr) {
//   return [...new Set(arr)];
// }

// console.log(getUnique([1, 2, 2, 3, 4, 4, 5]));
// Natija: [1, 2, 3, 4, 5]

//===============================================

// Berilgan massivdagi elementlarning necha marta takrorlanganini hisoblab, natijani Map ko‘rinishida qaytaring.
// function countFrequency(arr) {
//   if (!Array.isArray(arr)) return 'bu array emas';
//   if (!arr.length) return new Map();

//   return arr.reduce((acc, cur) => {
//     if (acc.has(cur)) {
//       acc.set(cur, acc.get(cur) + 1);
//     } else {
//       acc.set(cur, 1);
//     }
//     return acc;
//   }, new Map());
// }

// console.log(
//   countFrequency(['apple', 'banana', 'apple', 'orange', 'banana', 'apple'])
// );
// // Natija: Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

//===================================================

// Berilgan massivdagi foydalanuvchi nomlaridan foydalanib, har bir foydalanuvchi qaysi unikal mahsulotlarni sotib olganini hisoblang.
// 👉 Ma’lumot: massivda obyektlar bor, har birida user va product mavjud.
// 👉 Natija: Map bo‘lsin, key = user, value = Set (unikal mahsulotlar).

// function userProducts(purchases) {
//   if (!Array.isArray(purchases)) return 'bu array emas';
//   if (!purchases.length) return new Map();

//   return purchases.reduce((acc, cur) => {
//     if (acc.has(cur.user)) {
//       acc.get(cur.user).add(cur.product);
//     } else {
//       acc.set(cur.user, new Set([cur.product]));
//     }
//     return acc;
//   }, new Map());
// }

// const purchases = [
//   { user: 'Ali', product: 'Book' },
//   { user: 'Vali', product: 'Pen' },
//   { user: 'Ali', product: 'Book' },
//   { user: 'Ali', product: 'Laptop' },
//   { user: 'Vali', product: 'Notebook' },
// ];

// console.log(userProducts(purchases));
//=========================================================

// function loginDays(logs) {
//   if (!Array.isArray(logs)) return 'array emasku';
//   if (!logs.length) return new Map();

//   return logs.reduce((acc, cur) => {
//     if (acc.get(cur.user)) {
//       acc.get(cur.user).add(cur.date);
//     } else {
//       acc.set(cur.user, new Set([cur.date]));
//     }
//     return acc;
//   }, new Map());
// }

// const logs = [
//   { user: 'Ali', date: '2025-09-10' },
//   { user: 'Ali', date: '2025-09-10' },
//   { user: 'Ali', date: '2025-09-11' },
//   { user: 'Vali', date: '2025-09-10' },
//   { user: 'Vali', date: '2025-09-12' },
//   { user: 'Ali', date: '2025-09-12' },
// ];

// console.log(loginDays(logs));
/*
Natija:
Map(2) {
  'Ali' => 3,
  'Vali' => 2
}
*/

//====================================================

// deleteProducts(products, ids) degan funksiya yozing.
// ids — massiv bo‘lib, ichida o‘chirilishi kerak bo‘lgan mahsulotlar idlari keladi.
// Funksiya massivni aslini o‘zgartirishi kerak.
// Agar ids ichidagi id mahsulotlar ichida topilmasa, "Some products not found" deb qaytarishi kerak.
// Oxirida o‘chirilgan mahsulotlarni qaytarib bersin.
// let products = [
//   { id: 1, name: 'Laptop', price: 1500, category: 'Electronics' },
//   { id: 2, name: 'Phone', price: 800, category: 'Electronics' },
//   { id: 3, name: 'Shirt', price: 50, category: 'Clothes' },
//   { id: 4, name: 'Tablet', price: 1200, category: 'Electronics' },
//   { id: 5, name: 'Shoes', price: 100, category: 'Clothes' },
// ];

// function deleteProducts(products, ids) {
//   if (!Array.isArray(products)) return 'bu array emas';
//   if (!products.length) return [];

//   let deleteProd = {
//     deleteArr: [],
//     message: [],
//   };

//   for (let i of ids) {
//     if (products.find((item) => item.id === i)) {
//       products = products.filter((prod) => {
//         if (prod.id === i) {
//           deleteProd.deleteArr.push(prod);
//         } else {
//           return prod;
//         }
//       });
//     } else {
//       deleteProd.message.push([i, 'Some products not found']);
//     }
//   }

//   return [products, deleteProd];
// }
// function deleteProducts(products, ids) {
//   if (!Array.isArray(products)) return "bu array emas";
//   if (!products.length) return [];

//   let deletedArr = [];
//   let notFound = false;

//   for (let id of ids) {
//     let index = products.findIndex((item) => item.id === id);
//     if (index !== -1) {
//       // asl massivdan o‘chiramiz
//       let deleted = products.splice(index, 1)[0];
//       deletedArr.push(deleted);
//     } else {
//       notFound = true;
//     }
//   }

//   return {
//     deleted: deletedArr,
//     message: notFound
//       ? "Some products not found"
//       : "All products deleted successfully",
//   };
// }

// console.log(deleteProducts(products, [2, 5, 10]));

//==========================================
// 👉 Vazifa:
// updateProduct(products, id, newData) degan funksiya yozing.
// id – qaysi mahsulotni yangilash kerakligini bildiradi.
// newData – obyekt, ichida faqat yangilanishi kerak bo‘lgan fieldlar bo‘ladi.
// Funksiya asl massivni o‘zgartirishi kerak.
// Agar id topilmasa "Product not found" qaytarsin.
// Agar topilsa yangilangan obyektni qaytarsin.
// let products = [
//   { id: 1, name: 'Laptop', price: 1500, category: 'Electronics' },
//   { id: 2, name: 'Phone', price: 800, category: 'Electronics' },
//   { id: 3, name: 'Shirt', price: 50, category: 'Clothes' },
// ];

// function updateProduct(products, id, newProduct) {
//   if (!Array.isArray(products)) return 'bu array emas';
//   if (!products.length) return [];

//   let productIndex = products.findIndex((item) => item.id === id);
//   if (productIndex !== -1) {
//     // products[productIndex] = {
//     //   id: productIndex,
//     //   ...newProduct,
//     //   category: products[productIndex].category,
//     // };
//     products[productIndex] = Object.assign(products[productIndex], newProduct);
//     return products;
//   } else {
//     return 'Product not found';
//   }
// }

// console.log(updateProduct(products, 2, { price: 1000, name: 'Smartphone' }));
//==================================================================
//Savol:
// resolve orqali 5 sonini qaytaradigan Promise yozing va natijani konsolga chiqaring.
// let promise = new Promise((resolve) => resolve(5));

// promise.then((res) => console.log(res));

//================================================
// Shunday Promise yozingki, u setTimeout yordamida 3 soniyadan keyin "✅ Vaqt tugadi!" degan matnni qaytarsin.
// Keyin .then() orqali konsolga chiqaring.
// 👉 Kutilyotgan chiqish (3 sek kutib)

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('✅ Vaqt tugadi!');
//   }, 3000);
// });

// myPromise.then((res) => console.log(res));

//=======================================================
// Shunday Promise yozingki:
// Agar success = true bo‘lsa → "🎉 Muvaffaqiyatli!" qaytarsin.
// Agar success = false bo‘lsa → "❌ Xato yuz berdi!" qaytarsin.
// .then() orqali natijani, .catch() orqali xatoni ushlang.

// let myPromise = new Promise((resolve, reject) => {
//   let succes = true;
//   if (succes) {
//     resolve('🎉 Muvaffaqiyatli!');
//   } else {
//     reject('❌ Xato yuz berdi!');
//   }
// });

// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//=====================================================
// Shunday funksiya yozingki, u Promise qaytarsin va parametr sifatida berilgan sonni 2 ga ko‘paytirib qaytarsin.
// Agar son berilmasa (undefined yoki null bo‘lsa), xato (reject) qaytarsin.

// function double(num1) {
//   let myPromise = new Promise((resolve, reject) => {
//     if (num1 != undefined && num1 != null) {
//       resolve(num1 * 2);
//     } else {
//       reject('error');
//     }
//   });
//   return myPromise;
// }

// double().then(console.log).catch(console.log);
// double(2).then(console.log).catch(console.log);

//=======================================================

// Funksiya yozing, u raqam qabul qiladi va 2 soniyadan keyin shu raqamning kvadratini qaytaradigan Promise qaytarsin.

// Agar raqam bo‘lmasa → reject("❌ Iltimos, raqam yuboring!") chiqsin.

// function square(num) {
//   let p = new Promise((resolve, reject) => {
//     if (typeof num == 'number' && !isNaN(num)) {
//       setTimeout(() => {
//         resolve(num ** 2);
//       }, 2000);
//     } else {
//       reject('❌ Iltimos, raqam yuboring!');
//     }
//   });

//   return p;
// }

// Promise.all([square(2), square(3), square(4)])
//   .then(console.log)
//   .catch(console.log)
//   .finally(() => console.log('ishim tugadi'));
//===================================================================

// function getData() {
//   fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("✅ Ma'lumot (Promise):", data);
//     })
//     .catch((error) => {
//       console.log("❌ Xatolik:", error);
//     });
// }

// getData();

// function getData(callback) {
//   setTimeout(() => {
//     callback('✅ Ma’lumot olindi');
//   }, 2000);
// }

// getData((result) => {
//   console.log(result);
// });
