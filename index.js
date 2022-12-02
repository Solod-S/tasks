// -----Фибаначи

const fibanachi = (num) => {
  const result = [0, 1];
  for (let i = 2; i <= num; i += 1) {
    const lastNum = result[i - 1];
    const preLastNum = result[i - 2];
    result.push(lastNum + preLastNum);
  }
  return result;
};

const fibanachiShort = (num) => {
  let lastNum = 1;
  let prelastNum = 1;
  for (let i = 3; i <= num; i += 1) {
    const current = lastNum + prelastNum;
    prelastNum = lastNum;
    lastNum = current;
    // [prelastNum, lastNum] = [lastNum, lastNum + prelastNum];
  }
  return lastNum;
};
console.log(`fibanachi`, fibanachi(7));
console.log(`fibanachiShort`, fibanachiShort(7)); // 13 => [0,1,1,2,3,5,8,13] стартуем после arr[2]

//
// -----Палиндром

// const arr1 = ["1", 2, 3, 4];
const reversed = (arr) => {
  const result = [];
  for (let i = 0; i <= arr.length - 1; i += 1) {
    result.push(arr[arr.length - 1 - i]);
  }
  return result.join("");
};

const palindrom = (str) => {
  str = str.toLowerCase().replace(/\s/g, "");
  // медот реплейс плюс регулярное вЫражение
  // const palindromStr = str.split("").reverse().join("");
  const palindromStr = reversed(str.split("").join(""));
  //   console.log(palindromStr, str);
  return str === palindromStr;
};

// console.log(reversed(arr1));
console.log(`palindrom`, palindrom("A ba"));

// -----поиск уникального числа

const numbers = [1, 2, 3, 3, 2, 1, 9, 11];

const findUniq = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  let skip = false;
  let result = null;

  for (let i = 0; i <= sortedArr.length - 1; i += 1) {
    if (skip) {
      skip = false;
    } else if (!skip) {
      sortedArr[i] !== sortedArr[i + 1]
        ? (result = sortedArr[i])
        : (result = null);
      skip = true;
    }
  }
  return result;
};

const findUniqNew = (arr) => {
  const obj = arr.reduce((acc, el) => {
    acc[el] ? (acc[el] += 1) : (acc[el] = 1);
    return acc;
  }, {});
  const entries = Object.entries(obj);
  console.log(entries);
  for (const arr of entries) {
    if (arr[1] === 1) {
      return arr[0];
    }
  }
};

console.log(findUniqNew(numbers));
console.log(`findUniq`, findUniq(numbers));

// -----fizzBuzz

const fizzBuzz = (number) => {
  for (i = 1; i <= number; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`FizzBuzz`, i);
    } else if (i % 3 === 0) {
      console.log(`Fizz`, i);
    } else if (i % 5 === 0) {
      console.log(`Buzz`, i);
    }
    console.log(i);
  }
};

// console.log("fizzBuzz", fizzBuzz(20));
// -----количество глассных в строке

const countVovels = (str) => {
  const vowels = ["A", "E", "I", "O", "U", "Y", "W"];
  let result = 0;
  str = str.toUpperCase().split("");
  for (const letter of str) {
    if (vowels.includes(letter)) {
      result += 1;
    }
  }
  return result;
};

console.log(`countVovels`, countVovels("aaii"));
// покупка акций 2

const stocks = [7, 1, 5, 3, 6, 4];
const stocks2 = [7, 6, 4, 3, 1];
const stockSale = (stocks) => {
  let result = 0;
  for (i = 0; i <= stocks.length - 1; i += 1) {
    if (stocks[i] >= stocks[i - 1]) {
      result += stocks[i] - stocks[i - 1];
    }
  }
  return result;
};

console.log(`stockSale`, stockSale(stocks));
console.log(`stockSale`, stockSale(stocks2));
// -----классы

let classNames = [
  "all",
  "link",
  "sale-menu__btn",
  "menu",
  "item",
  "class-menu",
  "top-products__ul",
  "sale-menu__icon",
  "item",
  "sale-menu__btn",
  "menu",
  "top-products__ul",
  "link",
  "menu",
];

function sortClass(classes) {
  const coutValues = classes.reduce((acc, value) => {
    acc[value] ? (acc[value] += 1) : (acc[value] = 1);
    return acc;
  }, {});
  const uniqClasses = [];
  for (i = 0; i <= classes.length - 1; i += 1) {
    if (!uniqClasses.includes(classes[i])) {
      uniqClasses.push(classes[i]);
    }
  }
  return uniqClasses.sort((a, b) => coutValues[b] - coutValues[a]);
}

console.log(`sortClass`, sortClass(classNames));

// обменик

const input = [
  ["usd", "buy", 10000],
  ["usd", "sell", 5000],
  ["gpd", "buy", 9000],
  ["eur", "sell", 7000],
  ["uah", "buy", 10000],
  ["usd", "sell", 25000],
];

const countInput = (input) => {
  const result = {};
  input.forEach((element) => {
    const [currency, operation, value] = element;
    if (!result[currency]) {
      result[currency] = [0, 0];
    }
    result[currency][operation === "buy" ? 0 : 1] =
      result[currency][operation === "buy" ? 0 : 1] + value;
  });
  return result;
};
console.log(countInput(input));

const consoles = [
  ["ps4", "buy", 10000],
  ["ps4", "sell", 5000],
  ["xbox", "buy", 9000],
  ["nintendo", "sell", 7000],
  ["xbox", "sell", 9000],
  ["pc", "buy", 10000],
  ["ps4", "sell", 25000],
];

const countConsoles = (input) => {
  const result = {};
  for (let i of input) {
    const [gadget, operation, value] = i;
    if (!result[gadget]) {
      result[gadget] = [0, 0];
    }
    result[gadget][operation === "buy" ? 0 : 1] =
      result[gadget][operation === "buy" ? 0 : 1] + value;
  }

  return result;
};

console.log(countConsoles(consoles));
const inputC = [
  ["usd", "buy", 10000],
  ["usd", "sell", 5000],
  ["gpd", "buy", 9000],
  ["eur", "sell", 7000],
  ["uah", "buy", 10000],
  ["usd", "sell", 25000],
];

const countInputNew = (arrays) => {
  const result = {};
  for (const arr of arrays) {
    const [currency, operation, value] = arr;
    if (!result[currency]) {
      result[currency] = { buy: 0, sell: 0 };
    }
    result[currency][operation] += value;
  }

  return result;
};

console.log(countInputNew(inputC));
const countInputNew2 = (arrays) => {
  const result = [];
  for (const arr of arrays) {
    const [currency, operation, value] = arr;
    if (!result.find((obj) => obj.currency === currency)) {
      result.push({ currency, operation: { buy: 0, sell: 0 } });
    }
    for (const obj of result) {
      if (obj.currency === currency) {
        obj.operation[operation] += value;
      }
    }
  }

  return result;
};

console.log(countInputNew2(inputC));

// подмассив

let subarray = [
  [11, 12],
  [2, 3],
  [5, 7],
  [1, 4],
  [8, 10],
  [6, 8],
];

const subarrayFn = (array) => {
  if (array.length <= 1) {
    return array;
  }
  array.sort((a, b) => a[0] - b[1]);
  const result = [array[0]];

  for (const arr of array) {
    const current = result[result.length - 1];
    if (current[1] >= arr[0]) {
      current[1] = Math.max(current[1], arr[1]);
    } else {
      result.push(arr);
    }
  }
  return result;
};
console.log(subarrayFn(subarray));
console.log(subarrayFn([[1, 1]]));

let subarray2 = [
  [{ a: 11, b: 12 }],
  [{ a: 2, b: 3 }],
  [{ a: 5, b: 7 }],
  [{ a: 1, b: 4 }],
  [{ a: 8, b: 10 }],
  [{ a: 6, b: 8 }],
];
const subarrayFnNew = (array) => {
  if (array.length <= 1) {
    return array;
  }
  array.sort((a, b) => a[0].a - b[0].a);
  console.log(array);
  const result = [array[0]];

  for (const arr of array) {
    const current = result[result.length - 1];
    if (current[0].b >= arr[0].a) {
      current[0].b = Math.max(current[0].b, arr[0].b);
    } else {
      result.push(arr);
    }
  }
  return result;
};
console.log(`subarrayFnNew`, subarrayFnNew(subarray2));
// console.log(`subarrayFnNew`, subarrayFnNew([[{ a: 6, b: 8 }]]));
//-----------
