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
function findLarg(p, o, i) {
    return Math.max(p, o, i);
}
console.log(findLarg(3, 6, 4));
console.log(findLarg(3, 6, 9));
console.log(findLarg(7, 6, 4));
// 32
function findNear100(k, l) {
    const first100 = Math.abs(100 - k); 
    const second100 = Math.abs(100 - l);
    if (first100 < second100) {
        return `უფრო ახლოს იყო ${k} , მეორე რიცხვი იყო ${l}`;
    }
    if (first100 > second100) {
        return `უფრო ახლოს იყო ${l} , მეორე რიცხვი იყო ${k}`;
    }
}
console.log(findNear100(99, 80));
console.log(findNear100(79, 80));
// 33
function check70to100(num10, num11) {
    if((num10 >= 40 && num10 <= 60) && (num11 >= 40 && num11 <= 60)) {
        return `your nums was inclusive 40-60, your num was ${num10} and ${num11}`;
    }
    if((num10 >= 70 && num10 <= 100) && (num10 >= 70 && num10 <= 100)) {
        return `your nums was inclusive 70-100, your num was ${num10} and ${num11}`;
    }
    return `your number is not unclusive 40-60 and 70-100. your nums were ${num10} and ${num11}`;
}
console.log(check70to100(50, 60));
console.log(check70to100(70, 80));
console.log(check70to100(60, 30));
// 34
function findMostLarge(one, two) {
    if((one >= 40 && one <= 60) && (two >= 40 && two <= 60)) {
        return one > two ? one : two;
    }
    return `your numbers it was not inclusive 40-60`;
}
console.log(findMostLarge(45, 40));
console.log(findMostLarge(45, 50));
console.log(findMostLarge(65, 70));
// 35
function check2To4Inclusive(three, four) {
    if (three.length < 4) {
        return "სიტყვა არის ძალიან მოკლე";
    } 
    return three.includes(four) 
        ? `ეს სიმბოლო "${four}" არსებობს შენს სიტყვაში 2 დან 4 ის ჩათვლით, შენი სიტყვა იყო "${three}"`
        : `ეს სიმბოლო "${four}" არ არსებობს შენს სიტყვაში 2 დან 4 ის ჩათლით, შენი სიტყვა იყო "${three}"`;
}
console.log(check2To4Inclusive("mshvidobit", "v"));
console.log(check2To4Inclusive("gamarjoba", "v"));
console.log(check2To4Inclusive("bar", "v"));
// 36
function chechLast(pirveli, meore, mesame) {
    let num20 = pirveli % 10;
    let num30 = meore % 10;
    let num40 = mesame % 10;
    if (num20 === num30 && num30 === num40) {
        return `your last digit is same`;
    }
    return `your last digit isnot same, try again`;
}
console.log(chechLast(111, 211, 311));
console.log(chechLast(111, 211, 312));
console.log(chechLast(110, 210, 310));
// 37
function conventHigtCase(dzma){
    if(dzma.length < 3) {
        return dzma.toUpperCase();
    }
    else{
        return dzma.slice(0, 3).toLowerCase() + dzma.slice(3).toUpperCase();
    }
}
console.log(conventHigtCase("hi"));
console.log(conventHigtCase("gamrjoba"));
// 38
function chechTotalMarks(jami, finaluri) {
    if (finaluri){
        return jami >= 90 
            ? `congragulation you pass, your marks is A+, because you total marks was "${jami}"`
            : `sorry You couldn't cross the barrier and recive it grade, your marks was "${jami}"`;
    }
    else {
        return jami >= 89 && jami <= 100 
            ? `congragulation you pass, your marks is A+, because you total marks was "${jami}"`
            : `sorry You couldn't cross the barrier and recive it grade, your marks was "${jami}"`;
    }
}
console.log(chechTotalMarks(89, "finaluri"));
console.log(chechTotalMarks(89));
console.log(chechTotalMarks(93, "final"));
// 39
function calculateSum(ten, twenty) {
    const sum = ten + twenty;
    if (sum >= 50 && sum <= 80) {
        return `65 because your numbers sum was between 50-80, your number was ${sum}`;
    }
    else {
        return `80 your numbers sum wasnot between 50-80, your number was ${sum}`;
    }
}
console.log(calculateSum(40, 20));
console.log(calculateSum(40, 5));
// 40
function checkIf8(num1, num2){
    if (num1 === 8 || num2 === 8 || num1 + num2 === 8 || Math.abs(num1 - num2) === 8){
        return true;
    }
    return false;
}
console.log(checkIf8(4, 4)); // sum is 8
console.log(checkIf8(8, 4)); //first is 8
console.log(checkIf8(12, 4)); //diferent is 8
console.log(checkIf8(2, 4));  //  none is 8
// 41
function checkTreeNum(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        return 30;
    }
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        return 40;
    }
    else {
        return 20;
    }
}
console.log(checkTreeNum(2, 2, 2));
console.log(checkTreeNum(2, 4, 2));
console.log(checkTreeNum(2, 22, 1));
// 42
function checkIfNumIsSoft(one, two, three) {
    if (one < two && two < three) {
        return "raghac mode";
    }
    if (one <= two && two <= three) {
        return "soft mode";
    }
    else {
        return "araferi";
    }
}
console.log(checkIfNumIsSoft(1, 2, 3));
console.log(checkIfNumIsSoft(2, 2, 3));
console.log(checkIfNumIsSoft(3, 2, 3));
// 43
function chechLastDigit(pirv, meore, mesame) {
    let num1 = pirv % 10;
    let num2 = meore % 10;    // bolo cifrs ase vigeb
    let num3 = mesame % 10;
    if (num1 === num2 || num2 === num3 || num1 === num3){
        return "last digit is same";
    }
    return "try again";
}
console.log(chechLastDigit(22, 32, 202));
console.log(chechLastDigit(13, 32, 204));
console.log(chechLastDigit(22, 31, 202));
// 44
function check20(num, num2, num3) {
    if ((num1 >= 20 && (num1 < num2 || num1 < num3)) || 
        (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
        (num3 > 20 && (num3 < num1 || num3 < num2))) {
        return "malaci";
    }
    else{
        return false;
    }
}
console.log(check20(23, 20, 22));
console.log(check20(16, 10, 12));
console.log(check20(53, 20, 21));
// 45
function checkIf15(num1, num2){
    if (num1 === 15 || num2 === 15 || num1 + num2 === 15 || Math.abs(num1 - num2) === 15){
        return true;
    }
    return false;
}
console.log(checkIf15(15, 15)); 
console.log(checkIf15(8, 15)); 
console.log(checkIf15(16, 1)); 
console.log(checkIf15(2, 4));  
// 46
function checkMultiple(one, two) {
    let num1 = one % 7 === 0 || one % 11 === 0;
    let num2 = two % 7 === 0 || two % 11 === 0;
    return (num1 || num2) && !(num1 && num2); 
}
console.log(checkMultiple(14, 14));
console.log(checkMultiple(14, 20));
console.log(checkMultiple(14, 26));
// 47
function check40TO10000(nums) {
    if (nums >= 40 && nums <= 10000) {
        return `your number is inclusive 40 - 10 000, beacuse your num was ${nums}`;
    }
    return `your number isnot inclusive 40 - 10 000, beacuse your num was ${nums}`;
}
console.log(check40TO10000(45));
console.log(check40TO10000(25));
// 48
function reverse(what) {
    return what.split('').reverse().join('');
}
console.log(reverse("barro"));
// 49
function replaceWithNextChar(str) {
    return str.replace(/[a-zA-Z]/g, char => {
        let code = char.charCodeAt(0) + 1;
        if (char === 'z') return 'a';
        if (char === 'Z') return 'A';
        return String.fromCharCode(code);
    });
}
console.log(replaceWithNextChar("kvati"));
console.log(replaceWithNextChar("zura"));
console.log(replaceWithNextChar("mamachemi")); 
// 50
function upCase(some) {
    return some.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(upCase("zdarova biwebs, trusiki gviwers"));
// 51
function minutAndhours(total) {
    let hours = Math.floor(total / 60);
    let minuts = total % 60;
    return `${hours} :hours and ${minuts} :minuts`;
}
console.log(minutAndhours(200));
console.log(minutAndhours(40));
// 52
function sortStringAlphabetically(str) {
    return str.split('').sort((a, b) => a.localeCompare(b)).join(''); 
}
console.log(sortStringAlphabetically("marojni")); 
console.log(sortStringAlphabetically("sumka"));
console.log(sortStringAlphabetically("zmeika"));
// 53
function aAndB(str) {
    const check = /a...b|b...a/;
    return check.test(str);
}
console.log(aAndB(`is ${"babilina"} true?`));
console.log(aAndB(`is ${"gamarjob"} true?`));
// 54
function countVowels(str) {
    const vowels = /[aeiou]/gi;
    const matches = str.match(vowels);
    return matches ? matches.length : 0;
}
const inputString = "Hello World!";
const vowelCount = countVowels(inputString);
console.log(`Number of vowels in "${inputString}":`, vowelCount);
// 55
function hasEqualPsAndTs(str) {
    const firststr = str.toLowerCase();
    const p = (firststr.match(/p/g) || []).length;
    const t = (firststr.match(/t/g) || []).length;
    return p === t;
}
const inputString1 = "potato";
const inputString2 = "pasportti";
console.log(`შეიცავს "${inputString1}" თანაბარი რაოდენობის t ს და p ს'?`, hasEqualPsAndTs(inputString1));
console.log(`შეიცავს "${inputString1}" თანაბარი რაოდენობის t ს და p ს'?`, hasEqualPsAndTs(inputString2)); 
// 56
function divideAndFormat(num1, num2) {
    if (num2 === 0) {
        return "ნულზე გაყოფა";
    }
    const result = num1 / num2;
    const formattedResult = result.toLocaleString("en-US", {
        maximumFractionDigits: 2, 
    });
    return formattedResult;
}
const number1 = 230121;
const number2 = 720;
console.log(`შედეგი: ${divideAndFormat(number1, number2)}`);
// 57
function createCopies(str, count) {
    if (count < 0) {
        return "დადებითი უნდა იყოს რიცხვი";
    }
    return str.repeat(count);
}
const inpString = "ბარო";
const copies = 2;
console.log(`Result: "${createCopies(inpString, copies)}"`);
// 58
function createUpdatedString(something) {
    if (something.length < 3) {
        return "მინიმალური სიგრძე უნდა იყოს 3";
    }
    const lastThreeChars = something.slice(-3);
    return lastThreeChars.repeat(4);
}
const pirveli = "gamarjoba";
const meore = "ravaxar";
const mesame = "oe";
console.log(createUpdatedString(pirveli));
console.log(createUpdatedString(meore));
console.log(createUpdatedString(mesame));
// 59
function extractFirstHalf(str) {
    if (str.length % 2 !== 0) {
        return "it must be even.";
    }
    const half = str.length / 2;
    return str.slice(0, half);
}
const first = "megobaro";
const second = "samyaro";
const third = "zustadsami";
console.log(extractFirstHalf(first));
console.log(extractFirstHalf(second)); 
console.log(extractFirstHalf(third)); 
// 60
function removeFirstAndLast(str) {
    if (str.length <= 2) {
        return "სიტყვა მოკლეა იმისთვის რომ მოვაშოროთ პირველი და ბოლო ასო";
    }
    return str.slice(1, -1);
}
const inputString111 = "kacurikaci";
const inputString222 = "ma";
const inputString333 = "rasapireb";
console.log(removeFirstAndLast(inputString111));
console.log(removeFirstAndLast(inputString222)); 
console.log(removeFirstAndLast(inputString333));
// 61
function conectTwoWord(one, two) {
    let sum = one.slice(1) + two.slice(1);
    return sum;
}
console.log(conectTwoWord("zdarova", "kaci"));
// 62
function moveThreeChatStart(move) {
    if (move.length <= 3) {
        return "it must be 3";
    }
    let boloSami = move.slice(-3);
    let danarcheni = move.slice(0, -3);
    return boloSami + danarcheni;
}
console.log(moveThreeChatStart("salami"));
// 63
function moveMiddleThreeChar(shua) {
    if (shua.length < 3 || shua.length % 2 === 0) {
        return "it must be 3 and odd";
    }
    let shuaIndex = Math.floor(shua.length / 2);
    return shua.slice(shuaIndex -1, shuaIndex +2);
}
console.log(moveMiddleThreeChar("pamagidze"));
console.log(moveMiddleThreeChar("salami"));
// 64
function conectTwoString(one, two) {
    let result = one + two;
    return result;
}
console.log(conectTwoString("salama", "neiqum"));
// 65
function isEndScript(sityva) {
    if (sityva.length < 6) {
        return "min it must be 6";
    }
    if (sityva.toLowerCase().endsWith("script")) {
        return "your word is ending script";
    }
    return "Your word does not end with 'script'.";
}
console.log(isEndScript("javascript"));
console.log(isEndScript("marojniscr"));
// 66
function checkCity(city) {
    if (city.startsWith("los") || city.startsWith("new")) {
        return city;
    }
    return "";
}
console.log(checkCity("usa"));
console.log(checkCity("new-york"));
console.log(checkCity("los-angeles"));
console.log(checkCity("posle-briwia"));
// 67
function checkPchar(p) {
    if (p[0].toLowerCase() === 'p' || p[p.length - 1].toLowerCase() === 'p') {
        if (p[0].toLowerCase() === 'p') {
            p = p.substring(1);
        }
        if (p[p.length - 1].toLowerCase() === 'p') {
            p = p.substring(0, p.length - 1);
        }
    }
    return p;
}
console.log(checkPchar("python"));
console.log(checkPchar("zauri"));
console.log(checkPchar("zairap"));
// 68
function checkLengthN(sityva, n) {
    if (sityva.length >= n) {
        let fisrtTwo = sityva.substring(0, n);
        let lastTwo = sityva.substring(sityva.length - n);
        return fisrtTwo + lastTwo;
    }
    return "sityva aris very short"
}
console.log(checkLengthN("gamarjoba", 2));
console.log(checkLengthN("vashlu", 1));
console.log(checkLengthN("hellllou", 3));
// 69
function sumThreeEl(element) {
    if (element.length === 3) {
        return element[0] + element[1] + element[2];
    }
    else {
        return "unda iyos minimum 3 elementi";
    }
}
console.log(sumThreeEl([1, 2, 10]));
console.log(sumThreeEl([21, 22, 10]));
console.log(sumThreeEl([11, 2, -10]));
console.log(sumThreeEl([2, -10]));
// 70
function rotateArr(aray){
    if (aray.length === 3) {
        return[aray[1], aray[2], aray [0]];
    }
    else {
        return "aray unda iyos minimum 3";
    }
}
console.log(rotateArr([10, 11, -1]));
console.log(rotateArr([2, 3, -21]));
// 71
function checkFandL(array) {
    if (array.length >= 1) {
        return array[0] === 1 || array[array.length - 1] === 1;
    } else {
        return "Array unda iyos 1 ze meti.";
    }
}
console.log(checkFandL([1, 4, 5]));
console.log(checkFandL([1, 6, 1]));
console.log(checkFandL([7, 5, 6]));
console.log(checkFandL([]));
// 72






























    





    



















 
  


