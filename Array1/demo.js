let number = [-3, 5, 1, 3, 2, 10]
let max = number[0]
let index = 0
for (let i = 1; i < number.length; i++) {
    if (number[i] > max) {
        max = number[i];
        index = i;
    }
}

console.log("max: " + max + " at position " + index);
