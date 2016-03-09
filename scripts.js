function divider() {
    var num1 = document.getElementById('one').value;
    var num2 = document.getElementById('two').value;
    var para = document.createElement('p');
    para.innerHTML = 'loading...';
    var running = document.getElementById('running');
    running.appendChild(para);
    davidsLib.divide(num1, num2, function(err, result) {
        if (err) {
            alert('There was a problem, bro');
            running.removeChild(para);
        } else {
            alert(result);
            running.removeChild(para);
        }
    });
}

function adder() {
    var num1 = document.getElementById('one').value;
    var num2 = document.getElementById('two').value;
    var para = document.createElement('p');
    para.innerHTML = 'loading...';
    var running = document.getElementById('running');
    running.appendChild(para);
    davidsLib.add(num1, num2, function(err, result) {
        if (err) {
            alert('There was a problem, bro');
            running.removeChild(para);
        } else {
            alert(result);
            running.removeChild(para);
        }
    });
}

function multiplier() {
    var num1 = document.getElementById('one').value;
    var num2 = document.getElementById('two').value;
    var para = document.createElement('p');
    para.innerHTML = 'loading...';
    var running = document.getElementById('running');
    running.appendChild(para);
    davidsLib.multiply(num1, num2, function(err, result) {
        if (err) {
            alert('There was a problem, bro');
            running.removeChild(para);
        } else {
            alert(result);
            running.removeChild(para);
        }
    });
}

function subtracting() {
    var num1 = document.getElementById('one').value;
    var num2 = document.getElementById('two').value;
    var para = document.createElement('p');
    para.innerHTML = 'loading...';
    var running = document.getElementById('running');
    running.appendChild(para);
    davidsLib.subtract(num1, num2, function(err, result) {
        if (err) {
            alert('There was a problem, bro');
            running.removeChild(para);
        } else {
            alert(result);
            running.removeChild(para);
        }
    });
}