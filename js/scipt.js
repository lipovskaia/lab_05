/*eslint-env browser*/
var miles;
var gallons;
var mpg;
var again = "y";

do {
    miles = parseFloat(window.prompt("Enter miles driven"));
    gallons = parseFloat(window.prompt("enter size of tank in gallons"));
    if (!isNaN(miles) && miles > 0  && !isNaN(gallons) && gallons > 0){
        mpg = miles / gallons;
        window.document.write("Miles per gallon: " + parseInt(mpg, 10));
    }else{
        window.alert("One or both entire are invalid");
    }
    again = window.pronpt("Repeat entries? (y/n)", "y");
} while (again === "y");

