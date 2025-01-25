var dis = document.getElementById("display");

var a = document.getElementById("1");
a.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var b = document.getElementById("2");
b.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})
var c = document.getElementById("3");
c.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})
var d = document.getElementById("4");
d.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})
var e = document.getElementById("5");
e.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})
var f = document.getElementById("6");
f.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})
var g = document.getElementById("7");
g.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var h = document.getElementById("8");
h.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var i = document.getElementById("9");
i.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var j = document.getElementById("0");
j.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var k = document.getElementById("sum");
k.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var l = document.getElementById("sub");
l.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var m = document.getElementById("pro");
m.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var n = document.getElementById("cut");
n.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

var o = document.getElementById("div");
o.addEventListener("click",(e)=>{
    dis.value+=e.target.textContent
})

function cut(){
    dis.value=dis.value.slice(0,-1);
}

var clear = document.getElementById("goli");
clear.addEventListener("click",(e)=>{
    dis.value=" ";
})

var equal = document.getElementById("equal").addEventListener("click",(e)=>{
    dis.value=eval(dis.value);
})