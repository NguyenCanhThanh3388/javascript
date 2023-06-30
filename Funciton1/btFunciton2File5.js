let str = "acac"
let arr = []
let a = true
for (let i = 0; i < str.length; i++) {
    arr.push(str[i])
}
if (arr.length % 2 !== 0) {
    a = false

} else {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - i - 1]) {
            a = false
        }

    }
}
a == true ? console.log("oke") : console.log("not oke")