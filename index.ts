let body = null;
                           
if (typeof document !== 'undefined') {                          // will run in client's browser only

 body = document.getElementsByTagName("body")[0];
let result:any = document.getElementById("res");
let list:HTMLElement = document.getElementById("memory-list");
let list1:HTMLElement = document.getElementById("history-list");
let memoryRegister:Array<number> = [];
let his_catch:Array<string> = [];
let ans:string;
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
        ch=String(ch);
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
        let x:number = temp.split("^")[0];
        let y:number = temp.substring(temp.indexOf("^") + 1);
        return result.value = Math.pow(x, y);
        
    }
    let disp = result.value;
    disp = String(disp);
    let dispnew = disp.slice(-1);
    let n_before:any;
    if (isNaN(dispnew)) {
        disp = disp.substring(0, disp.length - 1);
        n_before = disp;
    }
    else {
        n_before = result.value;
    }
    document.getElementById("sm").innerHTML=n_before; // displaying operations
    result.value = eval(n_before); // for calculating basic math operations
    let n_after = result.value;
    let num = n_before + '=' + n_after;
    his_catch.push(num); //pushes the elements in array
    list1.innerHTML = '';
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
let sqrt = () =>{ return result.value = Math.sqrt(result.value);}
   
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
    return result.value;
}


//function radian to degree

function btnDeg() {
    let a:string = document.getElementById("dtor").innerHTML;
    if (a === "DEG") {
        let rad =parseFloat(result.value);
        let degr = (rad * 180) / Math.PI;
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

//function square
let square = () =>{ return result.value = Math.pow(result.value , 2);}

/* logarithmic functions*/
let log = () => { return result.value = Math.log10(parseFloat(result.value));}
let ln = () => { return result.value = Math.log(result.value);}
let powx = () => { return result.value = Math.pow(10 , result.value);}
let exp = () => { return result.value = Math.exp(result.value);}

/* trigo functions*/
let sin = () =>{ return result.value = Math.sin(result.value);}
let tan = () => { return result.value = Math.tan(result.value);}
let cos = () => { return result.value = Math.cos(result.value);}
let asin = () => { return result.value = Math.asin(result.value);}
let acos = () => { return result.value = Math.acos(result.value);}
let atan = () =>{ return result.value = Math.atan(result.value);}

/* maths basic functions*/
let e=()=>{return result.value=Math.E*(parseFloat(result.value))}
let pie=() =>{return result.value=Math.PI*(parseFloat(result.value))}
let floor = () =>{ return result.value = Math.floor(result.value);}
let ceil = () =>{ return result.value = Math.ceil(result.value);}
let random = () => { return result.value = Math.random();}
let abs = () =>{ return result.value = Math.abs(result.value);}
let reciprocal = () =>{ return result.value = 1/result.value;}
let xpow3 = () => { return result.value = Math.pow(result.value , 3);}
let pm =  () => { return result.value = -result.value;}

//function memory
let Memory = function () {
    let div =<HTMLDivElement>document.getElementsByClassName('show').item(0);
    if (div.style.display == 'block') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};


// function memory save
let MemorySave = function () {
    let num = result.value;
    memoryRegister.push(num); //pushes the elements in array
    list.innerHTML = '';
    memoryRegister.forEach(function (element:any) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory plus
let memoryplus = function () {
    let num = result.value;
    let lastvalue = list.lastChild //.innerHTML; //storing last value to list
    let ans = parseInt(lastvalue.toString()) + parseInt(num); //adding last value to memory
    memoryRegister.pop(); //remove last elements
    memoryRegister.push(ans); //insert new element
    list.innerHTML = '';
    memoryRegister.forEach(function (element:any) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory minus
let memoryminus = function () {
    let num = result.value;
    let lastvalue:any = list.lastChild //.innerHTML; // takes last element of list and stores in lastvalue
    let ans = parseInt(lastvalue) - parseInt(num); //substracts the last item in memory and the number
    memoryRegister.pop(); //pops out the lastvalue in array
    memoryRegister.push(ans); //pushes the elements in array
    list.innerHTML = '';
    memoryRegister.forEach(function (element:any) {
        list.innerHTML += '<li>' + element + '</li>'; //prints element in memory block
    });
};
//function memory recall
let memoryrecall = function () {
    result.value = list.lastChild //.innerHTML; //prints last element in list on display
};
//function memory clear
let memoryclear = function () {
    list.innerHTML = '';
    memoryRegister.forEach(function (element:any) {
        while (memoryRegister.length) {
            memoryRegister.pop();
        }
    });
};
}