const name = "ss",
  age = 24,
  gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, You are ${age}, you are a ${gender} aa`;
};

console.log(sayHi(name, age, gender));

export {};
