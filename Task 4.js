exports.Unique = (text) => {
    let arr = ['lol', 'kek', 'lmao', 'kek', 'kek', 'kekw', 'lol'];
    function uniqueArr() {
        let NewArr = [];
        for (let item in arr){
            if (!NewArr.includes(arr[item])){
                NewArr += `${arr[item]} `;
            }
        }
        return NewArr;
    }
    console.log(uniqueArr());
};