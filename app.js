// .............CHAPTER 6 to 9.............

// 1

// var a = 10


// document.write("The value of a is: " + a +"<br>")
// document.write("................................<br>")



// document.write("The value of a++ is: " + (++a) +"<br>")
// document.write("Now the value of a++ is: " + (a) +"<br>")

// document.write("The value of ++a is: " + (a++) +"<br>")
// document.write("Now the value of ++a is: " + (a) +"<br>")

// document.write("The value of --a is: " + (--a) +"<br>")
// document.write("The value of a is: " + (a) +"<br>")

// document.write("The value of --a is: " + (a--) +"<br>")
// document.write("The value of a is: " + (a) +"<br>")

// 2
// var a = 2, b = 1

// var result = --a - --b + ++b + b--;

// document.write("a is: " + a + "<br>")
// document.write("b is: " + b + "<br>")
// document.write("result is: " + result )

// 3

// var Name = prompt("What is your Name?")
// document.write("Hello " + Name + " Welcome to our Website!")

// 4

//  var table = prompt("Write a number table you want?")


//  if (table !== "" && table !== null){
// multiplication = table * 1
// document.write(table + " x  1 = " + multiplication + "<br>")

// multiplication = table * 2
// document.write(table + " x  2 = " + multiplication + "<br>")

// multiplication = table * 3
// document.write(table + " x  3 = " + multiplication + "<br>")

// multiplication = table * 4
// document.write(table + " x  4 = " + multiplication + "<br>")

// multiplication = table * 5
// document.write(table + " x  5 = " + multiplication + "<br>")

// multiplication = table * 6
// document.write(table + " x  6 = " + multiplication + "<br>")

// multiplication = table * 7
// document.write(table + " x  7 = " + multiplication + "<br>")

// multiplication = table * 8
// document.write(table + " x  8 = " + multiplication + "<br>")

// multiplication = table * 9
// document.write(table + " x  9 = " + multiplication + "<br>")

// multiplication = table * 10
// document.write(table + " x  10 = " + multiplication + "<br>")
// }else{

// document.write("5 x 1 = 5<br> 5 x 2 = 10 <br>5 x 3 = 15 <br>5 x 4 = 20 <br>5 x 5 = 25 <br>5 x 6 = 30 <br>5 x 7 = 35 <br>5 x 8 = 40 <br>5 x 9 = 45 <br>5 x 10 = 50 <br>")
// }


// 5
// var subject1 = prompt("Enter your first Subject")
// var subject2 = prompt("Enter your Second Subject")
// var subject3 = prompt("Enter your Third Subject")

// var marks1 = Number(prompt("Enter you obtained Marks of " + subject1 + " ;"))
// var marks2 = Number(prompt("Enter you obtained Marks of " + subject2 + " ;"))
// var marks3 = Number(prompt("Enter you obtained Marks of " + subject3 + " ;"))

// var totalmarks = 100;

// var percentage1 = (marks1 / totalmarks) * 100;
// var percentage2 = (marks2 / totalmarks) * 100;
// var percentage3 = (marks3 / totalmarks) * 100;

// var totalmarksofall = 300
// var totalobtainedmarks = marks1 + marks2 + marks3
// var totalpercentage = (totalobtainedmarks / totalmarksofall) * 100

// document.write("<table>")

// document.write("<tr>")
// document.write("<th>Subject</th>")
// document.write("<th>Total Marks</th>")
// document.write("<th>Obtained Marks</th>")
// document.write("<th>Percentage</th>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>"+subject1+"</td>")
// document.write("<td>"+totalmarks+"</td>")
// document.write("<td>"+marks1+"</td>")
// document.write("<td>"+percentage1+"%</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>"+subject2+"</td>")
// document.write("<td>"+totalmarks+"</td>")
// document.write("<td>"+marks2+"</td>")
// document.write("<td>"+percentage2+"%</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>"+subject3+"</td>")
// document.write("<td>"+totalmarks+"</td>")
// document.write("<td>"+marks3+"</td>")
// document.write("<td>"+percentage3+"%</td>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<th>"+totalmarksofall+"</th>")
// document.write("<th>"+totalobtainedmarks+"</th>")
// document.write("<th>"+totalpercentage+"%</th>")
// document.write("</tr>")

// document.write("</table>")