    function calci(x,y,operator){
        let result=0;
        if(operator=="+"){
            result=x+y;
            alert("Addition is:"+ result);

        }
        else if(operator=="-"){
            if(x>y){
            result=x-y;
            alert("Substraction is:"+ result);
            }
            else{
                result=y-x;
                alert("Substration is :"+result)
            }
        }
        else if(operator=="*"){
            result=x*y;
            alert("Multiplication is:"+result);
        }
        else if(operator=="/"){
            if(y==0){
                alert("Division by zero is not allowed");
            }
            else{
            result=x/y;
            alert("Division is:"+result);
            }
        }
        else if(operator=="%"){
            result=x%y;
            alert("Modulus is:"+result);
        }
        else{
            alert("Invalid operator");
        }
    }

let x=+prompt("Enter Operand 1:")
let y=+prompt("Enter Operand 2:")
let operator=prompt("Enter operator:")
calci(x,y,operator);