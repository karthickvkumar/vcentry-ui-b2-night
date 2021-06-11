function addition(a, b){ 
  // var a = 250; 
  // var b = 250;
  var result = a + b;
  console.log(result)
};

function calculation(){
  var result;
  var num1 = prompt("Enter first value");
  var num2 = prompt("Enter second value");
  var mode = prompt("Enter calculation symbol");

  if(mode == "+"){
    result = parseInt(num1) + parseInt(num2);
  }
  else if(mode == "-"){
    result = parseInt(num1) - parseInt(num2);
  }
  else if(mode == "*"){
    result = parseInt(num1) * parseInt(num2);
  }
  else if(mode == "/"){
    result = parseInt(num1) / parseInt(num2);
  }
  else{
    result = "The given calculation symbol is not correct";
  }

  console.log(result);

}


