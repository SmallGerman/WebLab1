exports.Unique = function uniqueArr(arr) {
    let NewArr = [];
    for (let item in arr){
        if (!NewArr.includes(arr[item])){
            NewArr += `${arr[item]} `;
        }
    }
    return NewArr;
};