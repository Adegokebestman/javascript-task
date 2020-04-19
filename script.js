function divide(num) {
    var result = [];
    for (var i = 1; i <= num; i++) {
        var s = ""
        if (i % 2 == 0) {
            s = s + "yu";
        }
        if (i % 3 == 0) {
            if (s.length == 0) {
                s = s + "gi";
            }
            else {
                s = s + "-gi"
            }
        }
        if (i % 5 == 0) {
            if (s.length == 0) {
                s = s + "oh";
            }
            else {
                s = s + "-oh"
            }
        }
        if (s.length == 0) {
            result.push(i);
        }
        else {
            result.push(s);
        }

    }
    return (result);
}

var res = divide(100);
for (let elements of res) {
    console.log(elements);
}
