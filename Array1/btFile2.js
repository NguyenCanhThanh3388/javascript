function bt1() {
    let abc = ["red", "green", "white", "black"]
    console.log(abc.join)

}

function bt2() {
    const num = window.prompt()
    const str = num.toString()
    const result = [str[0]]

    if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
        result.push('-', str[x])
    }
    else {
        result.push(str[x]);
    }
    console.log(result.join(''))
}

function bt3() {
    let str = 'c';
    let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LOWER = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];

    for (let i = 0; x < str.length; x++) {
        if (UPPER.indexOf(str[i]) !== -1) {
            result.push(str[i].toLowerCase());
        }
        else if (LOWER.indexOf(str[i]) !== -1) {
            result.push(str[i].toUpperCase());
        }
        else {
            result.push(str[i]);
        }
    }
    console.log(result.join(''));
}