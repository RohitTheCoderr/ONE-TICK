let num1=parseInt(document.getElementById('1').innerText)
let num2=parseInt(document.getElementById('2').innerText)
let num3=parseInt(document.getElementById('3').innerText)
let num4=parseInt(document.getElementById('4').innerText)
let num5=parseInt(document.getElementById('5').innerText)
let num6=parseInt(document.getElementById('6').innerText)
let num7=parseInt(document.getElementById('7').innerText)
let num8=parseInt(document.getElementById('8').innerText)
let num9=parseInt(document.getElementById('9').innerText)
let num0=parseInt(document.getElementById('0').innerText)
let mod=parseInt(document.getElementById('mod').innerText)
let inout=document.querySelector('#input')
console.log(inout);




function dis(val) {
    document.querySelector('#input').value +=val;
}

function handles(event) {

    if (event.key=='num0' || event.key=='num1' || event.key=='num2' || event.key=='num3' || event.key=='num4' || event.key=='num5' || event.key=='num6' || event.key=='num7' || event.key=='num8' || event.key=='num9' || event.key=='mod' || event.key=='+' || event.key=='-' || event.key=='*' || event.key=='/') {
        document.querySelector('#input').value += event.key;
    }
    else{
        inout.innerHTML=`pls valid input ${event.key}`
    }
}

var cal=document.querySelector('.container');
// console.log(cal);
// this function is use for enter value by use keyword button 
cal.onkeyup = function (event) {
    if (event.keyCode ===13) {
        // console.log("enter");
        let rohit =document.querySelector('#input').value 
        console.log(rohit);
        solve();
    }
}

// function that evaluate the digit and return result
function solve() {
    let rohit =document.querySelector('#input').value 
    //  let aryan = math.evaluate(rohit)
    let anshu =eval(rohit)
    document.querySelector('#input').value= anshu;
}

//  function that clear the display
function clr() {
    let rohit =document.querySelector('#input').value  = "";
}