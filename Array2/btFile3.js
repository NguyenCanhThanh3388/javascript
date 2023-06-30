const Es = ["Attractive", "Beautiful", "Body shape", "Charming"]
const Tv = ["Quyến rũ", "đẹp", "thân hình", "thu hút"]
function tuDien() {
    let input = document.getElementById("value").value
    for (let i = 0; i <= Tv.length; i++) {
        if (input == Tv[i]) {
            document.getElementById("result").innerHTML = Es[i]
        } else if (input == Es[i]) {
            document.getElementById("result").innerHTML = Tv[i]
        }
    }
}



