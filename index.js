document.getElementById("bu1").addEventListener("click",show)
document.getElementById("bu3").addEventListener("click",shows)

function show() {
    var i=document.getElementById("id0").value;
    
    if(i=="d1")
        {
            var j=document.getElementById("no1").value;
            var q=parseInt(j);
            return document.getElementById("bu2").innerHTML=(q*68.85)+"  INR";
        }
      if(i=="d2")
        {
            var j=document.getElementById("no1").value;
            var q=parseInt(j);
            return document.getElementById("bu2").innerHTML=(q*226.19)+"  INR";
        }
      if(i=="d3")
        {
            var j=document.getElementById("no1").value;
            var q=parseInt(j);
            return document.getElementById("bu2").innerHTML=(q*85.95)+"  INR";
        }
}
function shows() {
    var i=document.getElementById("idd").value;
    
    if(i=="d4")
        {
            var j=document.getElementById("temp").value;
            var q=parseInt(j);
            return document.getElementById("bu4").innerHTML=(32*q-32)*5/9+"  degrees";
        }
      if(i=="d5")
        {
            var j=document.getElementById("temp").value;
            var q=parseInt(j);
            return document.getElementById("bu4").innerHTML=q-273.15+"  degrees";
        }
    
}