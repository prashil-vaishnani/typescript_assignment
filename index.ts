let body = null;
                           
if (typeof document !== 'undefined') {                          // will run in client's browser only

 body = document.getElementsByTagName("body")[0];

let result:HTMLInputElement = <HTMLInputElement>document.getElementById("res");
let list1:HTMLElement = document.getElementById("history-list");
let his_catch:Array<string> = [];
let ans:string;
let num1:number;

let strtonum=()=>
{
    return num1=parseInt(result.value);
}
//take and display the numbers 0-9 and operators
let sol = (number:string) => {
    let ch:string,cache;
    if (result.value === "") {
        if(isNaN(parseInt(number))){
            if(number=="-" || number=="("){
                result.value += number;
                return result.value;
            }
         }else{
            return result.value += number;
            
        }
    }
    else{
       
        ch = result.value;
        ch=ch.slice(-1);
        if(isNaN(parseInt(ch))){
            if(isNaN(parseInt(number))){
                cache=result.value;
                cache=cache.substring(0, cache.length - 1);
                result.value = cache;
                result.value += number;
                return result.value;
             }else{
                return result.value += number;
                
             }
         } 
         else{
            return result.value += number;
          
         }
    }
};
// ans 
let Answer = function () {
    if (result.value.includes("^")) {
        let temp = result.value;
        let x:number =parseFloat(temp.split("^")[0]);
        let y:number =parseFloat(temp.substring(temp.indexOf("^") + 1));
        return result.value = Math.pow(x, y).toString();
        
    }
    let disp:string = String(result.value);
    disp = String(disp);
    let dispnew = disp.slice(-1);
    let n_before:string;
    if (isNaN(parseFloat(dispnew))) {
        disp = disp.substring(0, disp.length - 1);
        n_before = disp;
    }
    else {
        n_before = result.value;
    }
    document.getElementById("sm").innerHTML=n_before; // displaying operations
    result.value = eval(n_before); // for calculating basic math operations
    let n_after:string = result.value;
    let num:string = n_before + '=' + n_after;
    his_catch.push(num); //pushes the elements in array
    //list1.innerHTML = '';
    his_catch.forEach(function (element:string) {
        list1.innerHTML += '<li>' + element + '</li>'; //prints element history block
    });
};
//clear function
let clr = () =>
{
    document.getElementById("sm").innerHTML="";
    return result.value= "";
    
}

//delete function
let del = () => { return result.value = result.value.slice(0, -1);}

//square root function
let sqrt = () =>{ return result.value = Math.sqrt(num1).toString();}
   
//factorial function
let  fact = () => {
    let n:number = parseInt(result.value);
    let facto:number = 1;
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
    return result.value;
}


//function radian to degree

function btnDeg() {
    let a:string = document.getElementById("dtor").innerHTML;
    if (a === "DEG") {
        let rad:number =parseFloat(result.value);
        let degr:number = (rad * 180) / Math.PI;
        result.value = degr.toString();
        document.getElementById("dtor").innerHTML = "RND";
        return result.value;
    }
    else {
        let degr =parseFloat(result.value);
        let rad = (degr * Math.PI) / 180;
        result.value = rad.toString();
        document.getElementById("dtor").innerHTML = "DEG";
        return result.value;

    }
}

//function F-E
let f_e = () => {
  
    ans = (parseFloat(result.value)).toExponential();
    return result.value = ans;
    
}
// log functions
let e=()=>{strtonum(); return result.value=(Math.E*(num1)).toString();}
let pie=() =>{strtonum(); return result.value=(Math.PI*(num1)).toString()}
let log = () => { strtonum(); return result.value = Math.log10(num1).toString();}
let ln = () => {strtonum(); return result.value = Math.log(num1).toString();}
let square = function () {strtonum(); return result.value = (Math.pow(num1, 2)).toString(); };
let powx = function () {strtonum(); return result.value = Math.pow(10, num1).toString(); };
let exp = function () {strtonum(); return result.value = Math.exp(num1).toString(); };

//trigo function
let sin = function () {strtonum(); return result.value = Math.sin(num1).toString(); };
let tan = function () {strtonum(); return result.value = Math.tan(num1).toString(); };
let cos = function () {strtonum(); return result.value = Math.cos(num1).toString(); };
let asin = function () { strtonum(); return result.value = Math.asin(num1).toString(); };
let acos = function () {strtonum(); return result.value = Math.acos(num1).toString(); };
let atan = function () {strtonum(); return result.value = Math.atan(num1).toString(); };

// basic maths function
let floor = function () {strtonum(); return result.value = Math.floor(num1).toString(); };
let ceil = function () {strtonum(); return result.value = Math.ceil(num1).toString(); };
let random = function () {strtonum(); return result.value = Math.random().toString(); };
let abs = function () {strtonum(); return result.value = Math.abs(num1).toString(); };
let reciprocal = function () {strtonum(); return result.value = (1 / num1).toString(); };
let xpow3 = function () {strtonum(); return result.value = Math.pow(num1, 3).toString(); };
let powof2x = function () {strtonum(); return result.value = Math.pow(2, num1).toString(); };
let pm = function () {strtonum(); return result.value = (-num1).toString(); };



let ms: Array<number> = [];
let index:number = 0;
// function memory save

let memorysave = () =>{
  ms.push(parseInt(result.value));
  result.value = "";
}

//function memory plus (M+)
let memoryplus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } else {
    let sum: number = ms.reduce(function (num1: number, num2: number) {
      return num1 + num2;
    }, 0);
    return result.value = String(sum);
}
}

//function memory minus
let memoryminus = () => {
  if (ms.length == 0) {
    alert("Nothing is stored in memory");
  } 
}

//function memory recall 
let memoryrecall = () => {
      if (ms.length == 0) {
        alert("Nothing is stored in memory");
      } else {
        index %= ms.length;
        result.value = String(ms[index]);
        index++;
      }
}

//function memory clear
let memoryclear = () => {
    ms.splice(0, ms.length);
    result.value = "";
}
}