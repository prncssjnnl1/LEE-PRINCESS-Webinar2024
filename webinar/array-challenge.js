const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


console.log('EVEN NUNBERS:')
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        console.log(arr[i])
    }
}
console.log('ODD NUBERS:')
for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        console.log(arr[i])
    }
}