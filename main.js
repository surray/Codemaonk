const canvas = document.querySelector("#canvas");
//code here

function myFunction(e) {
    let x = e.clientX;
    let y = e.clientY;
   
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI,true);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.stroke();

  }
  
  function clearCoor() {
    document.getElementById("demo").innerHTML = "";
  }
