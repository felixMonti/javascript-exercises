const fibonacci = function(arg) {
    
    let count;
    if (typeof arg !== 'number') {
        count = parseInt(arg)
    } else {
        count = arg
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let primero = 1;
    let segundo = 0;

    for(let i = 2; i <= count; i++){
        let fib = primero + segundo;
        segundo = primero;
        primero = fib;
    }

    return primero;
};

// Do not edit below this line
module.exports = fibonacci;
