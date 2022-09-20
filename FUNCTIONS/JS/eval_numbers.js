function eval_nums(opr, n,m){
  switch(opr){
    case "+":
    return n+m;
    break;
    case "-":
    return n-m;
    break;
    case "*":
    return n*m;
    break;
    case "/":v
    return n/m;
    break;
    case "%":
    return n%m;
    break;
  }
}
function ans(){
  x= document.getElementById('n1').value;
  y= document.getElementById('n2').value;
  opr = document.getElementById('opr').value;
  if(x=="" || y==""){
    alert("Enter a number");
  }
  else{
    document.getElementById('res').value=eval_nums(opr,parseInt(x),parseInt(y));
  }


}
