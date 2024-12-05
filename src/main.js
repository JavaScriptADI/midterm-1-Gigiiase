// Write your code here
// #1 
function determinationDate() {
    let nowIs = new Date();
    const daysOfWeek = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი" ];
    const todayIs = daysOfWeek[nowIs.getDay()];
    const hoursOfDays = nowIs.getHours();
    const minutesOfHours = nowIs.getMinutes();
    const secondOfMinuts = nowIs.getSeconds();
    const output = `დღეს არის ${todayIs}. ხოლო მიმდინარე დროა : ${hoursOfDays} : ${minutesOfHours} : ${secondOfMinuts}`;
    console.log(output);
}
determinationDate();
// 2#
// function printContent() {
//     window.print();
// }
// printContent();
// #3
function currentDate() {
    const dateIs = new Date();
    const year = dateIs.getFullYear() ;
    const month = dateIs.getMonth() + 1; // meate tve dawera da davumate 1..
    const day = dateIs.getDay();  // magram dge ar dawera sworad... 
    const firstFormat = `${month}-${day}-${year}`;
    const secondFormat = `${month}/${day}/${year}`;
    console.log(`mm-dd-yyyy: ${firstFormat}`);
    console.log(`mm/dd/yyyy: ${secondFormat}`);
}
currentDate();
// 4#
function findArea(first, second, third) {
    const sum = (first + second + third) / 2;  //  anu sum = a + b + c / 2
    const area = Math.sqrt(sum * (sum - first) * (sum - second) * (sum - third));
    return area;
}                                                                //    es ver gavige kargad  
const firstPart = 5;   
const secondPart = 6;
const thirdPart = 7;
const area = findArea(firstPart, secondPart, thirdPart);
console.log(`areas sum is : ${area.toFixed(2)}`);  // es xazi ver mivxvdi tofixed raaris
//   5#
// function rotateString(str) {
//     let rotatedStr = str;
//     setInterval(() => {
//       rotatedStr = rotatedStr[rotatedStr.length - 1] + rotatedStr.slice(0, -1);
//       console.log(rotatedStr);
//     }, 1000); // Rotate every 500 milliseconds
//   }
//   rotateString("gigi");
// vafshe ver gavige es 
//  6
function isLeap(year) {
    if ((year % 4 === 0 && year % 100 === 0)) {
        return true;
    }
    else {
        return false;
    }
}
const year = 2024;  
if (isLeap(year)) {
    console.log(`${year} : is a leap year`);
}
else{
    console.log(`${year} isnot leap year`);
}
//   exgample 2
function isALeap(year1) {
    if ((year1 % 4 === 0 && year1 % 100 === 0)){
        return true;
    }
    else {
        return false;
    }
}
const year1 = 2000; 
if(isALeap(year1)) {
    console.log(`${year1} is a leap`);
}
else{
    console.log(`${year1} is not a laep yaer`);
}
// 7
for(let year = 2014; year <= 2024; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
        console.log(`1st januari was in ${year} sunday`);
    }
}
for(let year = 2024; year <= 2050; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
        console.log(`1st januari will be ${year} sunday`);
    }
}
// 8
// const randomNumber = Math.floor(Math.random() * 10) + 1;
// const user = parseInt(prompt("please enter ricxvi what do you think"))
// if (user === randomNumber) {
//     console.log("good job brother");
// }
// else{
//     console.log(`try again it was ${randomNumber}`);
// }
// 9
// function christmasDay() {
// const today = new Date(); 
// const christmas = new Date(today.getFullYear(), 11, 25); 
// if (today > christmas) {
// console.log();
// }
// }  
//    icannnnnttt idont understand
//   10
function calculate() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const multiplication = num1 * num2;
    const division = num1 !== 0 ? num1 / num2 : "Cannot divide by zero";    
    document.getElementById("multiplicationResult").textContent = "Multiplication : " + multiplication;
    document.getElementById("divisionResult").textContent = "division : "+ division;
}
calculate();
// 11
function CtoF(celsius) {
    return (celsius * 9) / 5 + 32;
}
function FtoC(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}
let celsius = 30;
let fahrenheit = 80;
let fahrenheitResult = CtoF(celsius);
console.log(`${celsius}°C is ${fahrenheitResult}°F`);
let celsiusResult = FtoC(fahrenheit);
console.log(`${fahrenheit}°F is ${celsiusResult.toFixed(2)}°C`);
//  12
let url = window.location.href;
console.log(`this is your ${url}`);
//  13
// const variableName = prompt("შეიყვანე სახელი:");
// const dynamicVariables = {};
// dynamicVariables[variableName] = "This is a dynamically created variable";
// console.log(`შენ შექმენი ცვლადი სახელად ${variableName}`);
// 14
function getFileExtension(filename) {
    const extension = filename.split('.').pop();
    if (extension === filename) {
        return "No extension found";
    }
    return extension;
}
const filename1 = "document.pdf";
const filename2 = "image.jpeg";
const filename3 = "archive";
console.log(`The extension of "${filename1}" is: ${getFileExtension(filename1)}`);
console.log(`The extension of "${filename2}" is: ${getFileExtension(filename2)}`);
console.log(`The extension of "${filename3}" is: ${getFileExtension(filename3)}`);   
// 15
function difference(number) {
    if (number > 13) {
        return 2 * Math.abs(number - 13);   
    }
    else {
        return Math.abs(number - 13); 
    }
}
const num1 = 13;
const num2 = 20;
console.log(`შედეგი არის ${num1} ის: ${difference(num1)}`);
console.log(`შედეგი არის  ${num2} ის : ${difference(num2)}`);
//   16
function computeSum(a, b) {
    if (a === b) {
        return 3 * (a + b); 
    }  
    else {
        return a + b; 
    }
}
const nums1 = 5;
const nums2 = 5;
const num3 = 7;
const num4 = 10;
console.log(`The result for (${nums1}, ${nums2}) is: ${computeSum(nums1, nums2)}`); 
console.log(`The result for (${num3}, ${num4}) is: ${computeSum(num3, num4)}`); 
//17
function difference19(number) {
    const difference = Math.abs(number - 19);
    if (number > 19) {
        return 3 * difference;
    } 
    else {
        return difference;
    }
}
const nu1 = 15;
const nu2 = 25;
console.log(`difference ${nu1} is: ${difference19(nu1)}`);
console.log(`difference ${nu2} is: ${difference19(nu2)}`);
//   18
function checkN(a, b) {
    if(a === 50 || b === 50 || (a + b) === 50) {
        return true;
    }
    else {
        return false;
    }
}
let a = 40;
let b = 10;
let c = 25;
let d = 50;
console.log(`შედეგი ${a}, ${b} არის : ${checkN(a, b)}`);
console.log(`შედეგი ${c}, ${d} არის : ${checkN(c, d)}`); //but
console.log(`sum ${b}, ${c} is : ${checkN(b, c)}`);
// 19
function check20And100And400(numbers){
    return Math.abs(numbers - 100) <= 20 || Math.abs(numbers - 400) <= 20;
}
let numbers1 = 40;
let numbers2 = 100;
let numbers3 = 220;
let numbers4 = 190;
console.log(`არის ${numbers1} 20 ის 100 ის ან 400 ის ფარგლებში? ეს არის ${check20And100And400(numbers1)}`);
console.log(`არის ${numbers2} 20 ის 100 ის ან 400 ის ფარგლებში? ეს არის ${check20And100And400(numbers2)}`);
console.log(`არის ${numbers3} 20 ის 100 ის ან 400 ის ფარგლებში? ეს არის ${check20And100And400(numbers3)}`);
console.log(`არის ${numbers4} 20 ის 100 ის ან 400 ის ფარგლებში? ეს არის ${check20And100And400(numbers4)}`);
// 20
function checkNegativeorPositiv(ricxvi1, ricxvi2) {
    return (ricxvi1 > 0 && ricxvi2 < 0) || (ricxvi1 < 0 && ricxvi2 > 0);
}
let ricxvi1 = 30;
let ricxvi2 = -25;
let ricxvi3 = 100;
let ricxvi4 = 27;
let ricxvi5 = -27;
console.log(`${ricxvi1}, ${ricxvi2} : ${checkNegativeorPositiv(ricxvi1, ricxvi2)}`);
console.log(`${ricxvi3}, ${ricxvi4} : ${checkNegativeorPositiv(ricxvi3, ricxvi4)}`);
console.log(`${ricxvi2}, ${ricxvi5} : ${checkNegativeorPositiv(ricxvi2, ricxvi5)}`);
console.log(`${ricxvi1}, ${ricxvi4} : ${checkNegativeorPositiv(ricxvi1, ricxvi4)}`);

// 21
function addPyHead(string) {
    if (string.startsWith("Py")) {
        return string; 
    } else {
        return "Py" + string;
    }
}
let stringFirst = "ramia";
let stringSecond = "Pyramia";
let stringThird = "zdarova";
console.log(`${stringFirst} = ${addPyHead(stringFirst)}`); 
console.log(`${stringSecond} = ${addPyHead(stringSecond)}`); 
console.log(`${stringThird} = ${addPyHead(stringThird)}`); 

// 22
function removeCharacter(str, index) {
    if (index < 0 || index >= str.length) {
        return "faild";
    }
    else {
        return str.slice(0, index) + str.slice(index + 1);   // ეს ცოტა გამიჭირდა ისე დავამუღამე
    }
}
let str1 = "zdrastuite";
let index1 = 2;
console.log(`ორიგინალი ${str1}`);
console.log(`და შეცვლილი : ${removeCharacter(str1, index1)}`);

// 23
function changeLastAndFirst(sityva) {
    if (sityva.length < 1) {
        return "It must be at least 1 character long."; 
    }
    if (sityva.length === 1) {
        return sityva; 
    }
    let firstWord = sityva[0];
    let lastWord = sityva[sityva.length - 1];
    let middleStr = sityva.slice(1, sityva.length - 1);
    return lastWord + middleStr + firstWord;
}
let firstSityva = "girlfriend";
let secondSityva = "oe";
let thirdSityva = "miatni";
console.log(`თავდაპირველად იყო "${firstSityva}", და შემდეგ გახდა "${changeLastAndFirst(firstSityva)}".`);
console.log(`თავდაპირველად იყო "${secondSityva}", და შემდეგ გახდა "${changeLastAndFirst(secondSityva)}".`);
console.log(`თავდაპირველად იყო "${thirdSityva}", და შემდეგ გახდა "${changeLastAndFirst(thirdSityva)}".`);

// 24
function addFrontAndBack(some) {
    if (some.length < 1) {
        return "it must min 1";
    }
    else {
        const firstSome = some[0];
        return firstSome + some + firstSome;
    }
}
let some1 = "Gai";
let some2 = "gyji";
console.log(`at first was ${some1} but next became : ${addFrontAndBack(some1)}`);
console.log(`at first was ${some2} but next became : ${addFrontAndBack(some2)}`);

// 25
function number3And7(cifri) {
    if (cifri <= 0) {
        return "გთხოვთ ჩაწეროთ დადებითი რიცხვი";
    }
    if (cifri % 3 === 0 || cifri % 7 === 0) {
        return `შენი რიცხვი ${cifri} იყო და იყოფა 3 ზეც და 7 ზეც`;
    }
    if (cifri % 3 === 0) {
        return `შენი რიცხვი ${cifri} იყო და იყოფა მხოლოდ 3 ზე`;
    }
    if (cifri % 7 === 0) {
        return `შენი რიცხვი ${cifri} იყო და იყოფა მხოლოდ 7 ზე`;
    }
    else {
        return `შენი რიცხვი ${cifri} იყო და არიყოფა არცერთზე`;
    }
}
console.log(number3And7(9));
console.log(number3And7(14));
console.log(number3And7(20));
console.log(number3And7(28));
console.log(number3And7(10));
console.log(number3And7(-2));
// 26
function last3Char(rame) {
    if (rame.length < 3) {
        return "სიტყვის მინიმალური სიგრძე უნდა იყოს 3";
    }
    else {
        const last3Char = rame.slice(-3);
        return last3Char + rame + last3Char;
}
}
console.log(last3Char("zura"));
console.log(last3Char("marojni"));
// 27
function checkStart(word) {
    if (word.startsWith("java")){
        return `${word} იწყება java თი`;
    }
    else{
        return `${word} ეს არიწყება java თი`;
    }
}
console.log(checkStart("javaskript"));
console.log(checkStart("zuraskript"));
console.log(checkStart("javamedia"));
// 28
function checkIf50To99(g, f) {
    if((g >= 50 && g <= 99)){
        return `ეს რიცხვი არის 50 ის და 99 ის დიაპაზონში, შენი რიცხვი იყო ${g}`;
    }
    if((f >= 50 && f <= 99)){
        return `ეს რიცხვი არის 50 ის და 99 ის დიაპაზონში, შენი რიცხვი იყო ${f}`;
    }
    else {
        return `ეს რიცხვი არ არის 50 ის და 99 ის დიაპაზონში, შენი რიცხვები იყო ${g} და ${f}`;
    }
}
console.log(checkIf50To99(70, 100));
console.log(checkIf50To99(24, 55));
console.log(checkIf50To99(99, 12));
console.log(checkIf50To99(100, 34));
// 29
function check3Number(b, m, w) {
    if((b >= 50 && b <= 99) || (m >= 50 && m <= 99) || (w >= 50 && w <= 99)) {
        return true;
    }
    else{
        return false;
    } 

}
console.log(check3Number(25, 50, 100));
console.log(check3Number(50, 70, 90));
console.log(check3Number(25, 120, 100));
// 30
function removScript(amoshla){
    if (amoshla.substring(4, 10) === "Script") {
        return amoshla.substring(0, 4) + amoshla.substring(10);
    }
    else {
        return amoshla;
    }
}
console.log(removScript("endoScriptIsVeryGood"));
console.log(removScript("ScriptIsVeryGood"));
console.log(removScript("javaScriptIsABoring"));
// 31



    



















 
  


