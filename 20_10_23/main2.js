const list = [1, 2, 3, 4, 5, 6, 7]
console.log(list.length);


function fill(value, count, arr=[]){
    let new_arr = [...arr]
    for(let i = 0; i < arr.length; i++){
        new_arr[i] = value;
    }
    return new_arr
}
console.log(fill(4,3,list));
console.log(...list)


function isArray(arr){
    if(arr.length){
        return true
    } else{
        return false
    }
}
console.log(isArray(list))

function join(symbol, arr = []){
    let str = ""
    for (let i = 0; i < arr.length; i++){
        str = str + arr[1] + symbol
}
    return str
}
console.log(join("*", list))

function reverse(arr){
    let newArray = []
    for(let i = arr.length-1; i >= 0; i--){
        newArray.push(arr[i])
    }
    return newArray
}
console.log(reverse(list))



function split(str, symbol = ' '){
  let arr = []
  let s = ''
  for (let i = 0; i < str.length; i++){
    if (str[i] == symbol){
        arr.push(s)
        s = ''
    }else{
        s += str[i]
        }
  }
  return arr
}
console.log(split("How are you doing today?", " "))



function slice(start, end, arr = []){
    const newArr = []
    if(start < 0){
        start = arr.length-start
    }
    if(end < 0){
        end = arr.length+end
    }end
    for (let i = start; i < end; i++){
        newArr.push(arr[i])
    }
    return newArr
}
console.log(slice(1, -3, list))

function splice(start, deleteCount, arr = [], ...args){
    const newArray = []
    if (deleteCount == 0){
        for (let i = start; i < arr.length; i++){
            if(i == start){
                newArray.push(...args)
            }
            else{
                newArray.delete(arr)
                }
        }
    }
}
console.log(splice(2, 0, list, "a", "a","a"));
