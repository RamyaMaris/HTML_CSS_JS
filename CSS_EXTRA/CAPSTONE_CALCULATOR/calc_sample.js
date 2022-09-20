let n1 = 0; n2 = 0; opr= "", new_eq = false;
let res = document.getElementById("inp");
// console.log(res-->+res);
function capture_opr(n) {
  switch(n){
    case "+":
      opr="+";
      n1= res.value;
      res.value = '0';
      break;
    case "-":
      opr="-";
      n1= res.value;
      res.value=  '0';
      break;
    case "*":
      opr="*";
      n1= res.value;
      res.value = '0';
      break;
    case "/":
      opr="/";
      n1= res.value;
      res.value =  '0';
      break;
  }
}

// function capture_opr(n){
//
// console.log(res.value);
//   n1 = res.value;
//   res.value = "";
//   opr = n;
//   switch(opr){
//     case "+":
//     n1 = res.value;
//     console.log(n1);
//     res.value = 0;
//     return n1+n2;
//     break;
//     case "-":
//     return n1-n2;
//     break;
//     case "*":
//     return n1*n2;
//     break;
//     case "/":
//     return n1/n2;
//     break;
//     case "%":
//     return n1%n2;
//     break;
//   }
// }
function calc(n){
console.log(res.value);
 if (res.value == "0" || new_eq == true){
   res.value = n;
   new_eq = false;
 }
 else
 {
   // console.log("n value else part-->"+n);
    res.value += n;
    // console.log("after value-->"+res);
 }

    // console.log("n value-->"+n);
 }
 function equals(){
   n2 = res.value ;
   res.value = eval_nums();
   opr = "";
   n1 = 0;
   n2 = 0;
   new_eq = true;
 }

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
 function cls(){
   res.value = "0";
   opr = "";
   n1 = 0;
   n2 = 0;
 }
