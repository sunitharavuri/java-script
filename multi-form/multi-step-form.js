/*------------Validation Function-----------------*/
var count = 0; // To count blank fields.
function validation(event) {
var radio_check = document.getElementsByName('gender'); // Fetching radio button by name.
var input_field = document.getElementsByClassName('text_field'); // Fetching all inputs with same class name text_field and an html tag textarea.
var text_area = document.getElementsByTagName('textarea');
// Validating radio button.
if (radio_check[0].checked == false && radio_check[1].checked == false) {
var y = 0;
} else {
var y = 1;
}
// For loop to count blank inputs.
for (var i = input_field.length; i > count; i--) {
if (input_field[i - 1].value == '' || text_area.value == '') {
count = count + 1;
} else {
count = 0;
}
}
if (count != 0 || y == 0) {
alert("*All Fields are mandatory*"); // Notifying validation
event.preventDefault();
} else {
return true;
}
}
/*---------------------------------------------------------*/
// Function that executes on click of first next button.
function next_step1() {
document.getElementById("first").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.color = "red";
}
// Function that executes on click of first previous button.
function prev_step1() {
document.getElementById("first").style.display = "block";
document.getElementById("second").style.display = "none";
document.getElementById("active1").style.color = "red";
document.getElementById("active2").style.color = "gray";
}
// Function that executes on click of second next button.
function next_step2() {
document.getElementById("second").style.display = "none";
document.getElementById("third").style.display = "block";
document.getElementById("active3").style.color = "red";
}
// Function that executes on click of second previous button.
function prev_step2() {
document.getElementById("third").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.color = "red";
document.getElementById("active3").style.color = "gray";
}


// var app = new function () {
//      this.el = document.getElementById('account');
//      this.account=[];


//      this.FetchAll = function () {
//         var data = '';
//         if (this.accounts.length > 0) {
//           for (i = 0; i < this.accounts.length; i++) {
//             data += '<tr>';
//             data += '<td>' + this.accounts[i] + '</td>';
//             // data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
//             // data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
//             data += '</tr>';
            
//           }
//         }
//         //  this.Count(this.countries.length);
//         return this.el.innerHTML = data;
//       };

//       this.Add = function () {
//           el = document.getElementById('add-email');
//           // Get the value
//           var account = el.value;
//           if (account) {
//             // Add the new value
//             this.accounts.push(account.trim());
//             // Reset input value
//             el.value = '';
//             // Dislay the new list
//       this.FetchAll();
//           }
//         };
// }