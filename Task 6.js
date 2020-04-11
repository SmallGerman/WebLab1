exports.Merge = (text) => {
    let arr1 = [1, 4, 6, 7];
    let arr2 = [2, 3, 5];
    function mergeList() {
        let list = [];
        while (arr1.length && arr2.length){
            if (arr1[0] < arr2[0]){
                list.push(arr1.shift())
            }else {
                list.push(arr2.shift())
            }
        }
        if (arr1.length){
            return list.concat(arr1);
        }
        return list.concat(arr2);
    }
    console.log(mergeList());
};
