//---------------------------Chapter 6------------------------------
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// var a = +prompt('Enter a number');
// document.write('Result ' + '<br>');
// document.write('The value of a is :' + a + '<br>');
// document.write('.....................................................' + '<br>')
// document.write('<br>')
// //Pre-Increment
// document.write('The value of ++a is:'+ ++a+ '<br>')
// document.write('Now the value of a is:'+ a+ '<br>');
// document.write('<br>')
// //Post-Increment
// document.write('The value of a++ is:'+ a++ + '<br>')
// document.write('Now the value of a is:'+ a+ '<br>');
// document.write('<br>')
// //Pre-Decrement
// document.write('The value of --a is:'+ --a+ '<br>')
// document.write('Now the value of a is:'+ a+ '<br>');
// document.write('<br>')
// //Post-Decrement
// document.write('The value of a-- is:'+ a-- + '<br>')
// document.write('Now the value of a is:'+ a+ '<br>');
// document.write('<br>')

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a; output = 2
// --a - --b;  output = 1
// --a - --b + ++b;  output =2
// --a - --b + ++b + b--;  output =3

// var a= 2
// var b = 1
// document.write('The value of a is ' + a+'<br>')
// document.write('The value of a is ' + b+'<br>')
// var Result = --a - --b + ++b + b--;
// document.write('The result is ' + Result + '<br>')
// document.write('<h3>' + 'Explanation'+ '</h3>' + '<br>')
// document.write('--a' + '<br>')
// document.write('1' +'<br>')
// document.write('<br>')
// document.write('--a - --b' + '<br>')
// document.write('1-0' +'<br>')
// document.write('1' +'<br>')
// document.write('<br>')
// document.write('--a - --b + ++b' + '<br>')
// document.write('1 - 0 + 1' +'<br>')
// document.write('2' +'<br>')
// document.write('<br>')
// document.write('--a - --b + ++b +b--' + '<br>')
// document.write('1 - 0 + 1+ 1' + '<br>')
// document.write('<br>')
// document.write('The Result is : 3')
// document.write('<br>') 

// 3. Write a program that takes input a name from user &
// greet the user.
// var userName = prompt('Enter your Name')
// alert('Hello ' + userName)

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var num = +prompt('Enter Table Number')
// if(num===0){
//     for(var i=1 ; i<=10; i++){
//     document.write('5'+ ' X ' + i +' = '+'5'*i +'<br>')
//     }
// }
// else{
//     for(var i=1 ; i<=10; i++){
//         document.write(num+ ' X ' + i +' = '+num*i +'<br>')
//         }

// }

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
var sub1 = prompt('Enter your 1st subject name');
var sub2 = prompt('Enter your 2nd subject name');
var sub3 = prompt('Enter your 3rd subject name');

// b) Total marks for each subject is 100, store it in another
// variable.
var total = 300;

// c) Take obtained marks for first subject from user and
// stored it in different variable.
var obtainedMarks1 = +prompt('Enter your 1st subject marks');

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
var obtainedMarks2 = +prompt('Enter your 2nd subject marks');
var obtainedMarks3 = +prompt('Enter your 3rd subject marks');

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
var totalObtained = obtainedMarks1 + obtainedMarks2 + obtainedMarks1;
var percentage = (totalObtained / total) * 100;
percentage = percentage.toFixed(2);
var percentage1 = (obtainedMarks1 / 100) * 100
percentage1 = percentage1.toFixed(2);
var percentage2 = (obtainedMarks2 / 100) * 100
percentage2 = percentage2.toFixed(2);
var percentage3 = (obtainedMarks3 / 100) * 100
percentage3 = percentage3.toFixed(2);
document.write('<Table>')

document.write('<tr>')
document.write('<th>' + 'Subject' + '</th>');
document.write('<th>' + 'Total Marks' + '</th>');
document.write('<th>' + 'Obtained Marks' + '</th>');
document.write('<th>' + 'Percentage' + '</th>');
document.write('</tr>')

document.write('<tr>')
document.write('<td>' + sub1 + '</td>');
document.write('<td>' + '100' + '</td>');
document.write('<td>' + obtainedMarks1 + '</td>');
document.write('<td>' + percentage1 + '%' + '</td>');
document.write('</tr>');

document.write('<tr>');
document.write('<td>' + sub2 + '</td>');
document.write('<td>' + '100' + '</td>');
document.write('<td>' + obtainedMarks2 + '</td>');
document.write('<td>' + percentage2 + '%' + '</td>');
document.write('</tr>');

document.write('<tr>')
document.write('<td>' + sub3 + '</td>');
document.write('<td>' + '100' + '</td>');
document.write('<td>' + obtainedMarks3 + '</td>');
document.write('<td>' + percentage3 + '%' + '</td>');
document.write('</tr>')

document.write('<tr>')
document.write('<th>' + '</th>')
document.write('<th>' + total + '</th>')
document.write('<th>' + totalObtained + '</th>')
document.write('<th>' + percentage + '%' + '</th>')

document.write('</Table>')

