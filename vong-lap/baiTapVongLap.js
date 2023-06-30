function file1() {
    let bang
    bang = "<table border = '1' width='600' cellspacing ='0' cellpadding='3'>"
    for (i = 1; i <= 9; i++) {
        bang = bang + "<tr>"
        for (j = 2; j <= 9; j++) {
            let abc = j * i
            bang = bang + "<td>" + (j + "*" + i + '= ' + abc) + "</td>"

        }
        bang = bang + "</tr>"
    }
    bang = bang + "</table>"
    document.write(bang)
}
function bai1() {
    let i1
    for (i = 1; i < 100; i++) {
        if (i == 99) {
            i1 = "da hoan thanh"
        } else {
            i1 = i
        }
        console.log(i1)
    }
}

function bai2() {
    let i = parseInt(prompt("nhap do"))
    do {
        if (i < 20) {
            alert("tang do ")
            i = parseInt(prompt("nhap do"))
        } else if (i2 > 100) {
            alert("giam nhiet do")
            i = parseInt(prompt("nhap do"))
        } else {
            alert("nhiet do bth")
        }
    } while (i < 20 && i > 100)
}

function bai3() {
    let F = 0, F0 = 0, F1 = 0
    let fibonacci = "";
    for (let i = 0; i < 25; i++) {
        if (i == 0) {
            F = 1
            F1 = 1
            fibonacci += F0 + " " + F1 + " "
        } else {
            F = F0 + F1
            F0 = F1
            F1 = F
        }
    }
    console.log(fibonacci)
}
function bai4() {
    let F = 0, F0 = 0, F1 = 0
    let fibonacci = ""
    let tong = 0
    let D = 2
    for (let i = 0; i < 100; i++) {
        if (i == 0) {
            F = 1
            F1 = 1
            fibonacci += F0 + " " + F1 + " "
        } else {
            F = F0 + F1
            F0 = F1
            F1 = F
            fibonacci += F + " "
            tong += F
            D++
            if (D == 20) {
                break
            }

        }
    }
    console.log("dãy fibonacci là " + fibonacci)
    console.log("tổng các số là " + tong)
}


function bai5() {
    let Fa = 0, Fb = 0, Fc = 0
    let fibonaccic
    let abc
    let D = 0
    for (let i = 0; i < 100; i++) {
        if (i == 0) {
            Fa = 1
            Fc = 1
            fibonaccic += Fb + " " + Fc + " "
        } else {
            Fa = Fb + Fc
            Fb = Fc
            Fc = Fa
            if (Fa % 5 == 0) {
                abc = Fa
                console.log(abc)
                D++
                if (D == 5) {
                    break
                }
            }
        }
    }
    console.log(fibonaccic)

}
function bai6() {
    let tong = 0
    for (i = 0; i <= 180; i++) {
        if (i % 7 == 0) {
            console.log(i)
            tong += i

        }
    }
    console.log("tong 30 so dau tien chia het cho 7 la " + tong)
}

function bai7() {
    let i1
    for (let i = 0; i < 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            i1 = "FizzBuzz"
        }
        else if (i % 5 == 0) {
            i1 = "BUZZ"

        } else if (i % 3 == 0) {
            i1 = "Fizz"
        } else {
            i1 = i
        }
        console.log(i1)
    }
}

function bai8() {
    let num = 3
    // let num = Number(prompt("nhập số"))
    let count = 0
    let N = 2
    for (i = 0; i < 20; i++) {
        if (count < num) {
            N++
            if (N % 2 != 0) {
                count++
                console.log(N)
                if (count == num) {
                    break
                }
            }

        }
    }
}



