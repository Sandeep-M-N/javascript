console.log("good afternoon all");
// number datatype
var num1 = 100, num2 = 200, num3 = 300;
console.log(num1, num2, num3);
// string
var fname = "sandeep";
console.log(fname);
//boolean
var con1 = true;
console.log(con1);
//array
var students_roll = [1, 2, 3, 4, 5, 6, 7];
console.log(students_roll);
var emp = ["ram", "shyam", "sundar"];
console.log(emp);
// tuple : it allows user to store mutliple type of data in array
var product = [101, "shyam"];
// enum data : it is use to create constant variable with value
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thurs"] = 4] = "thurs";
    days[days["fri"] = 5] = "fri";
    days[days["sat"] = 6] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
var data2 = days.mon;
var data3 = days.wed;
// union data: it allows user to store multiple type of data in single variable.
var items = 25645;
// any data type : when we dont know what type of data is going to store in a variable
var futureData = true;
// write a finction with three parametwer fname,mname laname and display full name
function full_name(fname, mname, lname) {
    return "^".concat(fname, " ").concat(mname, " ").concat(lname);
}
console.log(full_name("Sandeep", "M N", "Rao"));
