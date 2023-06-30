let nhanso1
let nhanso2
function getValue(){
     nhanso1 = parseInt(document.getElementById("so1").value)
     nhanso2 = parseInt(document.getElementById("so2").value)
}

function pheptru() {
    getValue()
    document.getElementById("result").innerHTML = nhanso1 - nhanso2
}
function phepcong() {
    getValue()
    document.getElementById("result").innerHTML = nhanso1 + nhanso2
}
function phepnhan() {
    getValue()
    document.getElementById("result").innerHTML = nhanso1 * nhanso2
}
function phepchia() {
    getValue()
    document.getElementById("result").innerHTML = nhanso1 / nhanso2
}


