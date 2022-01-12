var body = null;
if (typeof document !== 'undefined') { // will run in client's browser only
    body = document.getElementsByTagName("body")[0];
    var result_1 = document.getElementById("res");
    var list1_1 = document.getElementById("history-list");
    var his_catch_1 = [];
    var ans_1;
    //take and display the numbers 0-9 and operators
    var sol = function (number) {
        var ch, cache;
        if (result_1.value === "") {
            if (isNaN(parseInt(number))) {
                if (number == "-" || number == "(") {
                    result_1.value += number;
                    return result_1.value;
                }
            }
            else {
                return result_1.value += number;
            }
        }
        else {
            ch = result_1.value;
            ch = ch.slice(-1);
            if (isNaN(parseInt(ch))) {
                if (isNaN(parseInt(number))) {
                    cache = result_1.value;
                    cache = cache.substring(0, cache.length - 1);
                    result_1.value = cache;
                    result_1.value += number;
                    return result_1.value;
                }
                else {
                    return result_1.value += number;
                }
            }
            else {
                return result_1.value += number;
            }
        }
    };
    // ans 
    var Answer = function () {
        if (result_1.value.includes("^")) {
            var temp = result_1.value;
            var x = temp.split("^")[0];
            var y = temp.substring(temp.indexOf("^") + 1);
            return result_1.value = Math.pow(x, y);
        }
        var disp = String(result_1.value);
        disp = String(disp);
        var dispnew = disp.slice(-1);
        var n_before;
        if (isNaN(parseFloat(dispnew))) {
            disp = disp.substring(0, disp.length - 1);
            n_before = disp;
        }
        else {
            n_before = result_1.value;
        }
        document.getElementById("sm").innerHTML = n_before; // displaying operations
        result_1.value = eval(n_before); // for calculating basic math operations
        var n_after = result_1.value;
        var num = n_before + '=' + n_after;
        his_catch_1.push(num); //pushes the elements in array
        //list1.innerHTML = '';
        his_catch_1.forEach(function (element) {
            list1_1.innerHTML += '<li>' + element + '</li>'; //prints element history block
        });
    };
    //clear function
    var clr = function () {
        document.getElementById("sm").innerHTML = "";
        return result_1.value = "";
    };
    //delete function
    var del = function () { return result_1.value = result_1.value.slice(0, -1); };
    //square root function
    var sqrt = function () { return result_1.value = Math.sqrt(result_1.value); };
    //factorial function
    var fact = function () {
        var n = parseInt(result_1.value);
        var facto = 1;
        if (n == 0 || n == 1) {
            facto = 1;
        }
        else {
            for (var i = n; i >= 1; i--) {
                facto = facto * i;
            }
        }
        result_1.value = facto.toString();
        return result_1.value;
    };
    //function radian to degree
    function btnDeg() {
        var a = document.getElementById("dtor").innerHTML;
        if (a === "DEG") {
            var rad = parseFloat(result_1.value);
            var degr = (rad * 180) / Math.PI;
            result_1.value = degr.toString();
            document.getElementById("dtor").innerHTML = "RND";
            return result_1.value;
        }
        else {
            var degr = parseFloat(result_1.value);
            var rad = (degr * Math.PI) / 180;
            result_1.value = rad.toString();
            document.getElementById("dtor").innerHTML = "DEG";
            return result_1.value;
        }
    }
    //function F-E
    var f_e = function () {
        ans_1 = (parseFloat(result_1.value)).toExponential();
        return result_1.value = ans_1;
    };
    //function square
    var square = function () { return result_1.value = Math.pow(result_1.value, 2); };
    /* logarithmic functions*/
    var log = function () { return result_1.value = Math.log10(result_1.value); };
    var ln = function () { return result_1.value = Math.log(result_1.value); };
    var powx = function () { return result_1.value = Math.pow(10, result_1.value); };
    var exp = function () { return result_1.value = Math.exp(result_1.value); };
    /* trigo functions*/
    var sin = function () { return result_1.value = Math.sin(result_1.value); };
    var tan = function () { return result_1.value = Math.tan(result_1.value); };
    var cos = function () { return result_1.value = Math.cos(result_1.value); };
    var asin = function () { return result_1.value = Math.asin(result_1.value); };
    var acos = function () { return result_1.value = Math.acos(result_1.value); };
    var atan = function () { return result_1.value = Math.atan(result_1.value); };
    /* maths basic functions*/
    var e = function () { return result_1.value = Math.E * (result_1.value); };
    var pie = function () { return result_1.value = Math.PI * (result_1.value); };
    var floor = function () { return result_1.value = Math.floor(result_1.value); };
    var ceil = function () { return result_1.value = Math.ceil(result_1.value); };
    var random = function () { return result_1.value = Math.random(); };
    var abs = function () { return result_1.value = Math.abs(result_1.value); };
    var reciprocal = function () { return result_1.value = 1 / result_1.value; };
    var xpow3 = function () { return result_1.value = Math.pow(result_1.value, 3); };
    var pm = function () { return result_1.value = -result_1.value; };
    var ms_1 = [];
    var index_1 = 0;
    // function memory save
    var memorysave = function () {
        ms_1.push(parseInt(result_1.value));
        result_1.value = "";
    };
    //function memory plus (M+)
    var memoryplus = function () {
        if (ms_1.length == 0) {
            alert("Nothing is stored in memory");
        }
        else {
            var sum = ms_1.reduce(function (num1, num2) {
                return num1 + num2;
            }, 0);
            return result_1.value = String(sum);
        }
    };
    //function memory minus
    var memoryminus = function () {
        if (ms_1.length == 0) {
            alert("Nothing is stored in memory");
        }
    };
    //function memory recall 
    var memoryrecall = function () {
        if (ms_1.length == 0) {
            alert("Nothing is stored in memory");
        }
        else {
            index_1 %= ms_1.length;
            result_1.value = String(ms_1[index_1]);
            index_1++;
        }
    };
    //function memory clear
    var memoryclear = function () {
        ms_1.splice(0, ms_1.length);
        result_1.value = "";
    };
}
