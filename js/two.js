function as()
{
    var t=document.getElementById("t");
    var a=t.value.split(',');
    a.sort();
    t.value=a;
}
function ds()
{
    var t=document.getElementById("t");
    var a=t.value.split(',');
    a.sort().reverse();
    t.value=a;
}
var a=[];
function e()
{
    var i=document.getElementById("i");
    var x=i.value;
    alert("element entered");
    a.push(x);
    i.value='';
}
function s()
{
    var d=document.getElementById("d");
    var d1=document.getElementById("d1");

    d.innerText="array elements=  "+a;
    a.sort();
    d1.innerText="sorted elements=  "+a.join('+');
    
    
}