var body = null;
                           
if (typeof document !== 'undefined') {                          // will run in client's browser only

 body = document.getElementsByTagName("body")[0];
let result:any = document.getElementById("res");
let list:any = document.getElementById("memory-list");
let list1:any = document.getElementById("history-list");
let memoryRegister = [];
let his_catch = [];
let ans;
//take and display the numbers 0-9 and operators
let sol = (number) => {
    let ch,cache;
    if (result.value === "") {
        if(isNaN(number)){
            if(number=="-" || number=="("){
                result.value += number;
            }
         }else{
            result.value += number;
        }
    }
    else{
       
        ch = result.value;
        ch=String(ch);
        ch=ch.slice(-1);
        if(isNaN(ch)){
            if(isNaN(number)){
                cache=result.value;
                cache=cache.substring(0, cache.length - 1);
                console.log("replace",cache);
                result.value = cache;
                result.value += number;
                console.log(cache);
             }else{
                result.value += number;
             }
         } 
         else{
            result.value += number;
         }
    }
};
// ans 
var Answer = function () {
    //condition checks the value contains ^ if yes then it will perform x^y
    if (result.value.includes("^")) {
        let temp = result.value;
        let x = temp.split("^")[0];
        let y = temp.substring(temp.indexOf("^") + 1);
        result.value = Math.pow(x, y);
    }
    let disp = result.value;
    console.log("disp", disp);
    disp = String(disp);
    let dispnew = disp.slice(-1);
    console.log("dispnew", dispnew);
    let n_before:any;
    if (isNaN(dispnew)) {
        disp = disp.substring(0, disp.length - 1);
        n_before = disp;
        console.log("n_before", n_before);
    }
    else {
        n_before = result.value;
    }
    n_before = <HTMLInputElement>document.getElementById("sm") ; // displaying operations
    n_before.innerHTML=result.value;
    result.value = eval(n_before); // for calculating basic math operations
    let n_after = result.value;
    let num = n_before + '=' + n_after;
    //if (Number.isNaN(n_after))
      // return; // checks nan if yes then returned else will considered as number
    his_catch.push(num); //pushes the elements in array
    list1.innerHTML = '';
    his_catch.forEach(function (element:any) {
        list1.innerHTML += '<li>' + element + '</li>'; //prints element history block
    });
};
//clear function
let clr = () =>
{
    document.getElementById("sm").innerHTML="";
    result.value= "";
}

//delete function
let del = () => result.value = result.value.slice(0, -1);

//square root function
let sqrt = () => result.value = Math.sqrt(result.value);
   
//factorial function
let  fact = () => {
    let n = parseInt(result.value);
    let facto = 1;
        if(n == 0 || n == 1){
            facto = 1;
        }
        else{
            for(let i = n; i >= 1; i--)
            {
            facto = facto * i;
            }
        }
    result.value = facto.toString();
}


//function radian to degree

function btnDeg() {
    let a = document.getElementById("dtor").innerHTML;
    if (a === "DEG") {
        let rad =parseFloat(result.value);
        let degr = (rad * 180) / Math.PI;
        result.value = degr.toString();
        document.getElementById("dtor").innerHTML = "RND";
    }
    else {
        let degr =parseFloat(result.value);
        let rad = (degr * Math.PI) / 180;
       result.value = rad.toString();
        document.getElementById("dtor").innerHTML = "DEG";

    }
}

//function F-E
let f_e = () => {
  
    ans = (parseFloat(result.value)).toExponential();
    result.value = ans;
}

//function square
let square = () => result.value = Math.pow(result.value , 2);

/* logarithmic functions*/
let log = () => result.value = Math.LOG10E
let ln = () => result.value = Math.log(result.value);
let powx = () => result.value = Math.pow(10 , result.value);
let exp = () => result.value = Math.exp(result.value);

/* trigo functions*/
let sin = () => result.value = Math.sin(result.value);
let tan = () => result.value = Math.tan(result.value);
let cos = () => result.value = Math.cos(result.value);
let asin = () => result.value = Math.asin(result.value);
let acos = () => result.value = Math.acos(result.value);
let atan = () => result.value = Math.atan(result.value);

/* maths basic functions*/
let floor = () => result.value = Math.floor(result.value);
let ceil = () => result.value = Math.ceil(result.value);
let random = () => result.value = Math.random();
let abs = () => result.value = Math.abs(result.value);
let reciprocal = () => result.value = 1/result.value;
let xpow3 = () => result.value = Math.pow(result.value , 3);
let pm =  () =>  result.value = -result.value;

//function memory
var Memory = function () {
    let div =<HTMLDivElement>document.getElementsByClassName('show').item(0);
    if (div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

void history; () => {
    let div = <HTMLDivElement>document.getElementsByClassName('show1').item(0);
    if (div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};
// function memory save
var MemorySave = function () {
    let num = result.value;
    memoryRegister.push(num); //pushes the elements in array
    list.innerHTML = '';
    memoryRegister.forEach(function (element:any) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory plus
var memoryplus = function () {
    let num = result.value;
    let lastvalue = list.lastChild.innerHTML; //storing last value to list
    let ans = parseInt(lastvalue) + parseInt(num); //adding last value to memory
    memoryRegister.pop(); //remove last elements
    memoryRegister.push(ans); //insert new element
    list.innerHTML = '';
    memoryRegister.forEach(function (element:any) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory minus
var memoryminus = function () {
    let num = result.value;
    //if (Number.isNaN(num))
     //   return; // checks  nan if yes then returned else will considered as number
    let lastvalue:any = list.lastChild.innerHTML; // takes last element of list and stores in lastvalue
    let ans = parseInt(lastvalue) - parseInt(num); //substracts the last item in memory and the number
    memoryRegister.pop(); //pops out the lastvalue in array
    memoryRegister.push(ans); //pushes the elements in array
    list.innerHTML = '';
    memoryRegister.forEach(function (element:any) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory recall
var memoryrecall = function () {
    result.value = list.lastChild.innerHTML; //prints last element in list on display
};
//function memory clear
var memoryclear = function () {
    list.innerHTML = '';
    memoryRegister.forEach(function (element:any) {
        while (memoryRegister.length) {
            memoryRegister.pop();
        }
    });
};
}