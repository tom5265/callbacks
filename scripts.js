function divider() {
    var num1 = document.getElementById('one').value;
    var num2 = document.getElementById('two').value;
    davidsLib.divide(num1, num2, function(err, result) {
        if (err) {
            alert('There was a problem, bro');
        } else {
            alert(result);
        }
    });
}