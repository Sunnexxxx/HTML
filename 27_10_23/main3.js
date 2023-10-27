//const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function f1(arr){
//    for(let i = 0; i < arr.length; i++){
//        if(arr[i]%2 == 0)
//            console.log(arr[i]);
//
//    }
//}
//let sum = list.reduce((previousValue, currentValue) => {
//    return previousValue + currentValue
//})
//function f2(arr){
//    max_num = arr[0]
//    for(let i = 0; i < arr.length; i++){
//        if(arr[i] > max_num)
//            max_num = arr[i]
//    }
//}
//
////function f3(arr){
////    num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
////    for(let i = 0; i < arr.length; i++){
////        if(num.indexOf(arr[i]) == -1){
////            rev = num.push(arr[i])
////            console.log(rev);
////        else
////            console.log(false)
////        }
////    }
////}
//console.log(Math.max(...list));
//console.log(sum)
//f1(list)
//
//function s(arr){
//    let minIndex = 0
//    let maxIndex =0
//    for(let i = 1; i < arr.length; i++){
//        if(arr[i] < arr[minIndex]){
//            minIndex = i;
//        }
//        if(arr[i] > arr[maxIndex]){
//            maxIndex = i;
//        }
//    }
//    let q = arr[minIndex];
//    arr[minIndex] = arr[maxIndex]
//    arr[maxIndex] = q
//}
//
////function addNumToArray(inputNum, pointerNum, arr) {
////  const index = arr.findIndex(el => el === pointerNum);
////
////  return index !== -1 ? [
////    ...arr.slice(0, index + 1),
////    inputNum,
////    ...arr.slice(index + 1)
////  ] : arr;
////}
////
////console.log(addNumToArray(60, 12, [1, 2, 3, 4, 5, 12, 18, 23, 46]))
//
//
//
//
//Array.prototype.insert = function(index, item) {
//    this.splice(index, 0, item);
//};
//
//let arr = [1, 2, 4, 5];
//const item = 3, index = 2;
//
//arr.insert(index, item);
//console.log(arr);


//function addNumToArray(array){
//    for(let i = 1; i < array.length; i++){
//        if(array[i] < array[i-1]){
//            let temp = array[i];
//            array[i] = array[i-1];
//            array[i-1] = temp;
//        }
//    }
//    return array;
//}

//let array = [1, 2, 4, 5];
//function qwerty(arr, list_index, ...value) {
//    const new_list = [];
//    for(let i = 0; i < arr.length; i++){
//        if(i != list_index){
//            new_list.push(arr[i]);
//        }
//        else{
//            new_list.push(...value);
//            new_list.push(arr[i]);
//        }
//    }
//    return new_list;
//}
//console.log(qwerty(array, 3, ...["123", "456", false]));

let students = [{"name": "Sam", "age": "16", "group": "Slipknot"},
                {"name": "John", "age": "17", "group": "Linkin Park"},
                {"name": "Jane", "age": "18", "group": "FunMode"},
                {"name": "Mary", "age": "19", "group": "Queen"}];

function rock(students){
        const arr = Object.value(students)
            for(let j = 0; j < arr.length; j++){
                if(arr[j].age < 17){
                    students.splice(i, 1);
                }
            }
        }


