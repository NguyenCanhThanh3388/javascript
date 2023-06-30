
function isPrime(number) {
    let KT = true
    if (number < 2) {
        return KT = false
    }
    let i = 2
    while (i < number) {
        if (number % i == 0) {
            return KT = false
        } i++
    }
    return KT

}



let number = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
let result = []
for (let i = 0; i < number.length; i++) {
    if (number[i] < 1000) {
        if (isPrime(number[i]) == true) {
            result.push(number[i])
        }
    }
}
console.log(result)




