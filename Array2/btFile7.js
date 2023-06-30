

function bt2() {
    let input = prompt("nhap so luong phan tu")
    let result = []

    for (let i = 0; i < input; i++) {
        result.unshift(prompt("nhap phan tu thu " + i))

    }
    alert(result.join(""))
}

function bt3() {
  
    let str = new Array(5)

    alert(str.split().length - 1)
}

function bt4() {
    let str = ("thanh thanh thanh thanh thanh thanh thanh thanh")
    console.log(str.split(" ").length)
}

function bt5() {
    let s1 = 'abc'
    let s2 = 'abd'
    let result = true
    let a
    let b
    if (s1.length === s2.length) {
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] === s2[i]) {
                result = true

            } else {
                a = s1[i]
                b = s2[i]
                result = false



            }

        }

    }
    result ? console.log("giong") : console.log("ko giong vi " + a + " va " + b + " ko giong nhau")
}

function bt6(){

}