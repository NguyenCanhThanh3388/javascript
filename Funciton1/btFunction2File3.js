function bt1() {
    //hmtl body
    // <button onclick="alertMessage()">click</button>
    //html body
    function alertMessage() {
        document.write("Xin Chao")
    }
}

function bt2() {
    //html body
    // <main>
    //     <input type="" id="value">
    //         <button onclick="input()">click</button>
    //         <p id="abc"> </p>
    // </main>
    //html body
    function input() {
        let number = Number(document.getElementById("value").value) + 1
        document.getElementById("abc").innerHTML = number
    }
}

function bt3() {
    function number(input1, input2) {
        input1 = Number(prompt("nhap so thu 1: "))
        input2 = Number(prompt("nhap so thu 2: "))
        if (input1 > input2) {
            alert(" so 1 lon so 2")
        } else {
            let sum = input1 + input2
            alert("tong = " + sum)
        }

    }
    number()
}

function bt4() {
    function addNumbers() {
        firstNum = 4;
        secondNum = 8;
        result = firstNum + secondNum;
        return result;
    }
    result = 0;
    result = addNumbers();
    alert(result)
}

function bt5() {
    //html
    // <main>
    //     <input type="" id="value">
    //         <button onclick={check()}>Check</button>
    //         <p id="retuln"></p>
    // </main>
    //html
    let star = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
    let Constellation = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]

    function check() {
        let input = document.getElementById("value").value
        for (let i = 0; i < star.length; i++) {
            if (input === star[i]) {
                document.getElementById("retuln").innerHTML = Constellation[i]
                break
            } else if (input === Constellation[i]) {
                document.getElementById("retuln").innerHTML = star[i]
                break
            } else {
                document.getElementById("retuln").innerHTML = "khong co trong data"
            }
        }
    }
}