// let rows = prompt("Enter the number")

// printPattern(rows)

// function printPattern(rows){
//     for (let i = 1; i <= rows; i++) {   
//         for (let j = 1; j <=i; j++) {
//             document.write("*")
//         }     
//         document.write("<br/>")
//     }
// };




// let row = prompt("Enter the number of lines..")

// for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br/>")
// }

/************* Reverse the loop ***************/

let rows = prompt("Enter the rows...")

for (let i = rows; i >= 1; i--) {
    for (let j = 0; j <= i; j++) {
        document.write("*")
    }
    document.write("<br/>")
}