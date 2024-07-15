// #! /usr/bin/env node
// import inquirer from "inquirer";
// import { months, myMessage, ordinalDate } from "./data.js";
// //! Messages
// for(let i = 0; i < myMessage.length; i++){
//     await new Promise(res => setTimeout(res, 2000))
//     console.log(`\n${myMessage[i]}`);
// }
// console.log("\n");
// //! User Input
// const user: {
//   input: number;
// } = await inquirer.prompt([
//   {
//     name: "input",
//     type: "number",
//     message: "Enter the result (number)...",
//     validate: (val: number) => {
//       if (
//         val < 351 ||
//         val > 1481 ||
//         val.toString().length > 4 ||
//         val.toString().length < 3 
//       ) {
//         return "You did a mistake in calculation.";
//       } else {
//         return true;
//       }
//     },
//   },
// ]);
// //! Logic
// if(!isNaN(user.input)){
// const valInStr: string = user.input.toString();
// const day: string = ordinalDate(valInStr);
// let month: string =
// valInStr.length === 4 ? valInStr.slice(0, 2) : valInStr.charAt(0);
// month = (Number(month) - 3).toString();
// console.log(`\nYour birthday date is ${day} ${months[Number(month)]}`);
// }else{
//     console.log("\nYou did a mistake in calculation.");
// }
const obj = {
    x: 10,
    y: 20,
};
for (let key in obj) {
    console.log(obj[key]);
}
export {};
