function bt1() {
    function BP(number) {
        let retuln = Math.pow(number, 2)
        console.log(retuln)
    }
    BP(2)
}

function bt2() {
    function DtCvD() {
        let value = prompt("nhap duong kinh ")
        let retulnCV = value * 3.14
        let retulnDT = 3.14 * Math.pow(value / 2, 2)
        alert("Chu vi: " + retulnCV + " dien tich: " + retulnDT)
    }

    function DtCvR() {
        let value = prompt("nhap ban kinh ")
        let retulnCV = (value * 2) * 3.14
        let retulnDT = Math.pow(value, 2) * 3.14
        alert("Chu vi: " + retulnCV + " dien tich: " + retulnDT)

    }

    let tinhtoan = prompt("1: duong kinh, 2: ban kinh")
    if (tinhtoan == 1) {
        DtCvD()
    } else {
        DtCvR()
    }
}


function bt3() {
    function GT(a) {
        let n = 1
        for (let i = 1; i <= a; ++i) {
            n = n * i
        }
        console.log(n)
    }
    GT(7)

}

function bt4() {
    function KTNumber(n) {
        let a = Number.isInteger(n)
        console.log(a)
    }
    KTNumber("abc")
}
Number.isFinite

function bt5() {
    function min(n) {
        // let n = Number(prompt()) // cach ep kieu
        let a = Math.min(n)
        console.log(a)

    }
    min(3, 2, 1)
}
function bt6() {
    function kt(n) {
        let a = Number.isInteger(n) && n > 0
        console.log(a)


    }
    kt(1)
}
function bt7() {
    function hd(a, b) {
        a = a + b
        b = a - b
        a = a - b
        console.log(a, b)

    }
    hd(1, 2)
}

function bt8() {
    let n = [1, 2, 3, 4, 5]
    function dn() {
        for (let i = 0; i < n.length; i++) {
            n.reverse()
        }
        console.log(n)
    }
    dn()
}

function bt9() {
    let n = [1, 2, 1, 4, 5]
    let x = 1
    cont = 0

    for (let i = 0; i < n.length; i++) {
        if (n[i] == x) {

            cont++
        }
    }
    cont != 0 ? console.log(x + " xuấn hiện " + cont + " lần") : console.log("-1")

}

