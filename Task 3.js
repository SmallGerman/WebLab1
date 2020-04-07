exports.Fib = (text) => {
    function fibNum(n) {
        let prev = 0,
            next = 1;
        for (let i = 0; i < n; i++){
            next = prev + next;
            prev = next - prev;
        }
        return n;
    }
    console.log(fibNum(5));
};