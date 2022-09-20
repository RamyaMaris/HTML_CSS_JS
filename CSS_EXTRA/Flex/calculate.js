function set_input(number){
  console.log(number);
  document.getElementById('dis').value += number;

}
function set_input_opr(opr){
  var op = opr;
  var n1 = document.getElementById('dis').value;
  document.getElementById('dis').value += opr;
  // console.log("n1-->"+n1);
  var n2 = document.getElementById('dis').value;
  console.log("n2-->"+n2);
  // var n2 = "7.2*6+3/2-5*6+(7-2)*5";
  var parameters = n2.match(/[^\d()]+|[\d.]+/g);
  console.log("par-->"+parameters);
  // var p1=parameters.split(',');
  // console.log("p1--->"+p1);
// var fn=n2.substr(0,n2.indexOf('('));
// console.log("fn-->"+fn);
// if(typeof(window[fn])=='function')
//     window[fn](p1[0],p1[1]);
// console.log("---"+p1[0]);
  // var temp = document.getElementById('dis').value;
  // console.log(eval('temp'));
  //
  // var x = document.getElementById('dis').value;
  // console.log(x);

  // switch(opr){
  //   case "+":
  //   return n+m;
  //   break;
  //   case "-":
  //   return n-m;
  //   break;
  //   case "*":
  //   return n*m;
  //   break;
  //   case "/":v
  //   return n/m;
  //   break;
  //   case "%":
  //   return n%m;
  //   break;
  // }
}
function eval_nums(opr, n,m){

}
