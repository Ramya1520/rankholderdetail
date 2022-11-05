var subButton = document.getElementById("submitButton");
subButton.addEventListener("click",function(){
  //console.log("hi")
  var name = document.getElementById("name_s").value
  var age = document.getElementById("age").value
  var mark1 = document.getElementById("mark1").value
  var mark2 = document.getElementById("mark2").value
  console.log(typeof parseInt(mark1));
  var details = document.getElementById("details")
  details.innerHTML = `<p>name : ${name}</p> 
<p>age : ${age}</p> 
<p>mark1 : ${mark1}</p> 
<p>mark2 : ${mark2}</p> 
<p>total : ${parseInt(mark1) + parseInt(mark2)}</p>`
},false)


 
