var no1;
var no2;

no1 = parseInt(window.prompt("Enter the first number"));
no2 = parseInt(window.prompt("Enter the second number"));

if (no1 == no2) {
    window.document.write("Both the numbers are equal");
} else if (no1 > no2) {
    window.document.write("Greatest number is: " + String(no1));
} else if (no2 > no1) {
    window.document.write("Greatest number is: " + String(no2));
} else {
    window.document.write("Please enter a valid number");
}