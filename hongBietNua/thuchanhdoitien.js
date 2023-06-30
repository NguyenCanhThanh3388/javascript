
function abc() {
    let amount = document.getElementById("value").value
    let fromcurrency = document.getElementById("get").value
    let tocurrency = document.getElementById("to").value

    if (fromcurrency === "vnd" && tocurrency === "usd") {
        let currency = amount/24
        document.getElementById("result").innerHTML = currency
    } else {
        let currency = amount*24
        document.getElementById("result").innerHTML = currency
    }
}

