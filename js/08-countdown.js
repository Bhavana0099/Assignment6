var no = parseInt(window.prompt("Enter a number"));
if (no < 0) {
    document.write("Please enter a valid positive number.")
}
for (var i = no; i >= 0; i--) {
    document.write(i + '<br>');
}
