let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let result = []
for (let i = 0; i <= number.length; i++) {
    if (ktra(number[i]) == 1) {
        result.push(number[i])

    }
}
console.log(result)
function ktra(n) {
    let SN = 1

    if (n < 2) {
        return SN = 0
    }
    let i = 2
    while (i < n) {
        if (n % i == 0) {
            return SN = 0

        }
        i++
    }
    return SN
}


function bt2() {
    let number = [10, 12, 25, 38, 43, 59, 68, 107, 80, 19]
    let max = 0
    let max_index = 0
    for (i = 0; i <= number.length; i++) {
        if (number[i] > max) {
            max = number[i]
            max_index = i

        }
    }
    console.log("so lon nhat : " + max + " index : " + max_index)
}

function bt3() {
    let number = [1, 2, 3]
    let max = 0
    let Tb = 0
    for (i = 0; i < number.length; i++) {
        if (number[i] > max) {
            max = number[i]
        }
        Tb += parseInt(number[i])
    }
    console.log("so lon nhat : " + max + " trung binh : " + Tb / number.length)
}

function bt4() {
    let input = prompt("nhap so")
    let number = []
    for (let i = 1; i < input; i++) {
        let str = prompt("nhap phan tu thu " + i)
        number.unshift(str)


    }
    alert(number)
}

function bt5() {
    let value = [-11, -8, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
    let result = 0
    for (let i = 0; i < value.length; i++) {
        if (value[i] < 0) {
            result++
        }
    }
    console.log("tong so nguyen am la : " + result)
}

function bt6() {
    const value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let V = Number(prompt('nhap so'));
    if (value.includes(V) === false) {
        alert(V + ' không có trong mảng');
    } else {
        for (let i = 0; i < value.length; i++) {
            if (V == value[i]) {
                value.splice(value[i], 1);
                break;
            }
        }
    }
    alert(value);
}

function bt7() {
    let dodai = prompt("nhập độ dài mảng cần sắp xếp")
    let value = []
    for (let i = 0; i < dodai; i++) {
        let input = prompt("nhap phan tu thu : " + i)
        value.push(input)
    }
    value.sort(function (a, b) { return b - a })
    alert(value)
}

function bt8() {
    let dodai_a = prompt('nhạp do dai a');
    let dodai_b = prompt('nhạp do dai b');

    let value_a = [];
    let value_b = [];
    let value_c = [];
    let result = value_c.concat(Array_a(), Array_b());
    function Array_a() {
        for (let i = 0; i < dodai_a; i++) {
            let input_a = prompt('nhập phần tử thứ ' + i + ' của mảng a');
            value_a.push(input_a);
        }
        return value_a;
    }
    function Array_b() {
        for (let i = 0; i < dodai_b; i++) {
            let input_b = prompt('nhập phần tử thứ ' + i + ' của mảng b');
            value_b.push(input_b);
        }
        return value_b;
    }
    alert(result);
}