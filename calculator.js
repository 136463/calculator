var button = document.getElementById('on');
button.addEventListener('click', function () {
    var d = document.getElementById('mine');
    var e = document.getElementById('other');
    e.style.borderColor = '#AAFF00';
    e.style.color = '#AAFF00';
    d.style.backgroundColor = '#AAFF00';
    
})
var ours = document.getElementById('other');
ours.addEventListener('click', function () {
    var f = document.getElementById('lower_child_container');
    f.innerHTML = "";
})

document.addEventListener('keydown', function(event) {
    const key = event.key;
    // Check if the key is a number (0-9), decimal point (.), or an operator (+, -, *, /)
    if (key === '0') {
        input.value += '0';
    } else if (key === 'Escape') {
        clearInput();
    }
});

function absolute() {
    
    let e = Math.abs(document.getElementById('result').value);
    document.getElementById('result').value = e;

}

function addValue(value) {
    document.getElementById('result').value += value;
}

function clearInput() {
    document.getElementById('result').value = '';
}

function calculate() {
    let input = document.getElementById('result').value;
    let result = '';
    try {
        result = eval(input);
    } catch (e) {
        if (e instanceof SyntaxError) {
            result = 'Math Error';
        }
    }
    document.getElementById('result').value = result;
}

