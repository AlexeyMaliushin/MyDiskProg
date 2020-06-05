function difference() {
    var in1 = document.getElementById('in1').value;
    var in2 = document.getElementById('in2').value;
    in1 = in1.split('').reverse();
    in2 = in2.split('').reverse();
    var lenN1 = in1.length;
    var lenN2 = in2.length;
    var result = [];
    var inVal1 = parseInt(document.getElementById('in1').value);
    var inVal2 = parseInt(document.getElementById('in2').value);
    var i = 0, b = 0, c = 0;
    if (inVal1 > inVal2) {
        for (i, b, c; i < lenN1; i++) {
            b = in1[i] - (in2[i] || 0) + c;
            result[i] = b < 0 ? (c = -1 , 10 + b) : (c = 0 , b);
        }
        document.getElementById('res').value = result.reverse().join('')
            .replace(/^0*/g, '');
    }
    if (inVal1 < inVal2) {
        for (; i < lenN2; i++) {
            b = in2[i] - (in1[i] || 0) + c;
            result[i] = b < 0 ? (c = -1 , 10 + b) : (c = 0 , b);
        }
        document.getElementById('res').value = result.reverse().join('')
            .replace(/^0*/g, '-');
    }
    if (inVal1 === inVal2) {
        document.getElementById('res').value = 0;
    }
    if (lenN1 <1 || lenN2 <1){
        document.getElementById('res').value = "";
        }
        }