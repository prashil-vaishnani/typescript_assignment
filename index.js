var body = null;
if (typeof document !== 'undefined') { // will run in client's browser only
    body = document.getElementsByTagName("body")[0];
    var result_1 = document.getElementById("res");
    var list_1 = document.getElementById("memory-list");
    var list1_1 = document.getElementById("history-list");
    var memoryRegister_1 = [];
    var his_catch_1 = [];
    var ans_1;
    //take and display the numbers 0-9 and operators
    var sol = function (number) {
        var ch, cache;
        if (result_1.value === "") {
            if (isNaN(number)) {
                if (number == "-" || number == "(") {
                    result_1.value += number;
                }
            }
            else {
                result_1.value += number;
            }
        }
        else {
            ch = result_1.value;
            ch = String(ch);
            ch = ch.slice(-1);
            if (isNaN(ch)) {
                if (isNaN(number)) {
                    cache = result_1.value;
                    cache = cache.substring(0, cache.length - 1);
                    console.log("replace", cache);
                    result_1.value = cache;
                    result_1.value += number;
                    console.log(cache);
                }
                else {
                    result_1.value += number;
                }
            }
            else {
                result_1.value += number;
            }
        }
    };
    // ans 
    var Answer = function () {
        //condition checks the value contains ^ if yes then it will perform x^y
        if (result_1.value.includes("^")) {
            var temp = result_1.value;
            var x = temp.split("^")[0];
            var y = temp.substring(temp.indexOf("^") + 1);
            result_1.value = Math.pow(x, y);
        }
        var disp = result_1.value;
        console.log("disp", disp);
        disp = String(disp);
        var dispnew = disp.slice(-1);
        console.log("dispnew", dispnew);
        var n_before;
        if (isNaN(dispnew)) {
            disp = disp.substring(0, disp.length - 1);
            n_before = disp;
            console.log("n_before", n_before);
        }
        else {
            n_before = result_1.value;
        }
        n_before = document.getElementById("sm").innerHTML=n_before; // displaying operations
        result_1.value=n_before.innerHTML ;
        result_1.value = eval(n_before); // for calculating basic math operations
        var n_after = result_1.value;
        var num = n_before + '=' + n_after;
        //if (Number.isNaN(n_after))
        // return; // checks nan if yes then returned else will considered as number
        his_catch_1.push(num); //pushes the elements in array
        list1_1.innerHTML = '';
        his_catch_1.forEach(function (element) {
            list1_1.innerHTML += '<li>' + element + '</li>'; //prints element history block
        });
    };
    //clear function
    var clr = function () {
        document.getElementById("sm").innerHTML = "";
        result_1.value = "";
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
    };
    //function radian to degree
    function btnDeg() {
        var a = document.getElementById("dtor").innerHTML;
        if (a === "DEG") {
            var rad = parseFloat(result_1.value);
            var degr = (rad * 180) / Math.PI;
            result_1.value = degr.toString();
            document.getElementById("dtor").innerHTML = "RND";
        }
        else {
            var degr = parseFloat(result_1.value);
            var rad = (degr * Math.PI) / 180;
            result_1.value = rad.toString();
            document.getElementById("dtor").innerHTML = "DEG";
        }
    }
    //function F-E
    var f_e = function () {
        ans_1 = (parseFloat(result_1.value)).toExponential();
        result_1.value = ans_1;
    };
    //function square
    var square = function () { return result_1.value = Math.pow(result_1.value, 2); };
    /* logarithmic functions*/
    var log = function () { return result_1.value = Math.LOG10E; };
    var ln = function () { return result_1.value = Math.log; };
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
    var floor = function () { return result_1.value = Math.floor(result_1.value); };
    var ceil = function () { return result_1.value = Math.ceil(result_1.value); };
    var random = function () { return result_1.value = Math.random(); };
    var abs = function () { return result_1.value = Math.abs(result_1.value); };
    var reciprocal = function () { return result_1.value = 1 / result_1.value; };
    var xpow3 = function () { return result_1.value = Math.pow(result_1.value, 3); };
    var pm = function () { return result_1.value = -result_1.value; };
    //function memory
    var Memory = function () {
        var div = document.getElementsByClassName('show').item(0);
        if (div.style.display == 'block') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
    };
    void history;
    (function () {
        var div = document.getElementsByClassName('show1').item(0);
        if (div.style.display == 'block') {
            div.style.display = 'none';
        }
        else {
            div.style.display = 'block';
        }
    });
    // function memory save
    var MemorySave = function () {
        var num = result_1.value;
        memoryRegister_1.push(num); //pushes the elements in array
        list_1.innerHTML = '';
        memoryRegister_1.forEach(function (element) {
            list_1.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
        });
    };
    //function memory plus
    var memoryplus = function () {
        var num = result_1.value;
        var lastvalue = list_1.lastChild.innerHTML; //storing last value to list
        var ans = parseInt(lastvalue) + parseInt(num); //adding last value to memory
        memoryRegister_1.pop(); //remove last elements
        memoryRegister_1.push(ans); //insert new element
        list_1.innerHTML = '';
        memoryRegister_1.forEach(function (element) {
            list_1.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
        });
    };
    //function memory minus
    var memoryminus = function () {
        var num = result_1.value;
        //if (Number.isNaN(num))
        //   return; // checks  nan if yes then returned else will considered as number
        var lastvalue = list_1.lastChild.innerHTML; // takes last element of list and stores in lastvalue
        var ans = parseInt(lastvalue) - parseInt(num); //substracts the last item in memory and the number
        memoryRegister_1.pop(); //pops out the lastvalue in array
        memoryRegister_1.push(ans); //pushes the elements in array
        list_1.innerHTML = '';
        memoryRegister_1.forEach(function (element) {
            list_1.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
        });
    };
    //function memory recall
    var memoryrecall = function () {
        result_1.value = list_1.lastChild.innerHTML; //prints last element in list on display
    };
    //function memory clear
    var memoryclear = function () {
        list_1.innerHTML = '';
        memoryRegister_1.forEach(function (element) {
            while (memoryRegister_1.length) {
                memoryRegister_1.pop();
            }
        });
    };
}
