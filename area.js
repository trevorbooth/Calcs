function calc() {
    //collecting size of job 
 var length = document.getElementById("length").value;
 var width = document.getElementById("width").value;
 var depth = document.getElementById("depth").value;
    //removing commas 
 var l = (parseFloat(length.replace(/,/g, ''), 10));
 var w = (parseFloat(width.replace(/,/g, ''), 10));
 var d = (parseFloat(depth.replace(/,/g, ''), 10));
    //equation 
 var x = d / 36;
 var y = (((l * w) / 9) * x) * 1.4;
 document.getElementById("result").innerHTML = y.toFixed(2);
}


/*<form class="coverage">
 Legnth:<input type="text" id="length" placeholder="in Feet" /><br>
 Width: <input type="text" id="width" placeholder="in Feet"/><br>
 Depth: <input type="text" id="depth" placeholder="in Inches" /><br>*/
