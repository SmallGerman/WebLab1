exports.Fib = function fibNum(n) {
    let prev = 0,
        next = 1;
    for (let i = 0; i < n; i++){
        next = prev + next;
        prev = next - prev;
    }
    return prev;
};