console.log("hii");

function basicOp(operation, value1, value2)
{
    switch (operation) {
        case '+':
            return value1 + value2;
            break;
        case '-':
            return value1 - value2;
            break;
        case '*':
            return value1 * value2;
            break;
        case '/':
            return value1 / value2;
            break;
    
    }
}

function basicOp(operation, value1, value2){
    return eval(value1 + operation + value2);
}

console.log(basicOp('*', 5,2));