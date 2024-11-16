// 1. sum of the array except highest and lowest number
// 2. create a variable called result make it equl to 0
// 3. start the for loop on the array
// 4. add num value in result variable
const arr = [ 6, 2, 1, 8, 10 ]
let result = 0
const sortedArr = arr.sort((a,b) => a-b)
for(let i=1; i<sortedArr.length - 1; i++){
    const num = sortedArr[i]
    result += num
}
console.log(result)