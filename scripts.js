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

function adder() {
    var num1 = document.getElementById('one').value;
    var num2 = document.getElementById('two').value;
    davidsLib.add(num1, num2, function(err, result) {
        if (err) {
            alert('There was a problem, bro');
        } else {
            alert(result);
        }
    });
}

function multiplier() {
    var num1 = document.getElementById('one').value;
    var num2 = document.getElementById('two').value;
    davidsLib.multiply(num1, num2, function(err, result) {
        if (err) {
            alert('There was a problem, bro');
        } else {
            alert(result);
        }
    });
}

function subtracting() {
    var num1 = document.getElementById('one').value;
    var num2 = document.getElementById('two').value;
    davidsLib.subtract(num1, num2, function(err, result) {
        if (err) {
            alert('There was a problem, bro');
        } else {
            alert(result);
        }
    });
}