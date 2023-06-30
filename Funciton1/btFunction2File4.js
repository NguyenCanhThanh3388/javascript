let value = []
// let Sl = 0
function addValue() {
    let input = document.getElementById("input").value

    if (input == "") {
        alert("erro")
    } else {
        value.push(input)
        alert("add SP thanh cong")
        danhSachSp()
    }
    document.getElementById("input").value = ''

}

function danhSachSp() {

    let tr = "<tr>"
    for (let i = 0; i < value.length; i++) {
        tr += "<td class='col-8'>" + value[i] + "</td>" +
            "<td class = 'col-2'><button class='button' onclick='Edit(" + i + ")'>Edit</button></td>" +
            "<td class = 'col-2'><button class='button' onclick='Delete(" + i + ")'>Delete</button></td> " + "</tr>"
    }
    document.getElementById("danhSachSP").innerHTML = tr 
    document.getElementById("SlSp").innerHTML = "product: " + value.length 

}

function Edit(index) {
    let editValue = prompt("nhap SP")
    value[index] = editValue
    console.log(editValue)
    danhSachSp()



}

function Delete(index) {
    value.splice(value[index], 1)
    console.log(value, index)
    danhSachSp()


}