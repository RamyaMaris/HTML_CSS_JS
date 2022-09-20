let n1 = 0; n2 = 0; opr = ""; new_eq = false;
let res = document.getElementById("res");

// function to capture operator
function capture_opr(n) {
  switch(n){
    case "+":
      opr="+";
      n1= res.innerHTML;
      res.innerHTML = '0';
      break;
    case "-":
      opr="-";
      n1= res.innerHTML;
      res.innerHTML=  '0';
      break;
    case "*":
      opr="*";
      n1= res.innerHTML;
      res.innerHTML = '0';
      break;
    case "/":
      opr="/";
      n1= res.innerHTML;
      res.innerHTML =  '0';
      break;
  }
}

// function to capture clicks on digits
 function calc(n){
  if (res.innerHTML == "0" || new_eq == true){
    res.innerHTML = n;
    new_eq = false;
  }
  else
    res.innerHTML += n;
  }

// function to handle the equals button click
  function equals(){
    n2 = res.innerHTML ;
    res.innerHTML = eval_nums();
    opr = "";
    n1 = 0;
    n2 = 0;
    new_eq = true;  // flags
  }

// function to evaluate the expression
  function eval_nums(){
    switch(opr){
      case "+":
      return parseInt(n1) + parseInt(n2);
      break;
      case "-":
      return parseInt(n1) - parseInt(n2);
      break;
      case "*":
      return parseInt(n1) * parseInt(n2);
      break;
      case "/":
      return parseInt(n1) / parseInt(n2);
      break;
    }
  }

// function to clear the results
  function cls(){
    res.innerHTML = "0";
    opr = "";
    n1 = 0;
    n2 = 0;
  }