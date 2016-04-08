//iterative factorial
function iterFac(n) {
    if (n < 0) return -1;
    if (n === 1) return 1;
    var total = n;
    while (n-- > 2) {
        total *= n;
    }
    return total;
}

function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }
    return tmp;
}
// var result = factorial(8);
// document.write(result);
// Output: 40320

function recurFac(n) {
    if (n < 0) {
        return -1;
    }
    if (n === 0) {
        return 1;
    }
    return n * recurFac(n - 1);
}
console.log(iterFac(170));
console.log(recurFac(170));

// You can make the example recursive very simply. Instead of using a while loop to calculate the value, you can simply call factorial again, passing in the next lowest value. The recursion stops when the value is 1.
function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
}
// var result = factorial(8);
// document.write(result);
// Output: 40320