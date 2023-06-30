
function feetToMeter(value) {
    let Meter = 0.305 * value
    alert(Meter)
}
function meterToFeet(value) {

    let feet = 3.279 * value
    alert(feet)

}

let input = prompt("")
if (input == 1) {
    alert("chúc mừng bạn đã chọn feet To Meter")
    value = prompt("nhap feet")
    feetToMeter(value)

} else {
    alert("chúc mừng bạn đã chọn meter To Feet")
    value = prompt("nhap meter")
    meterToFeet(value)
}