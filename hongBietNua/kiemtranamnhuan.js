let year = parseInt(prompt("enter a Year"))

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + "la nam nhuan")
        } else {
            alert(year + "ko pai la nam nhuan")
        }

    } else {
        alert(year + "la nam nhuan")
    }
} else {
    alert(year + "not nam nhuan")
}

// nâng cao

let year1 = parseInt(prompt("enter a Year"))
let isnamnhuan = false

if (year1 % 4 == 0) {
    if (year1 % 100 == 0) {
        if (year1 % 400 == 0) {
            isnamnhuan = true
        }
    } else {
        isnamnhuan = true
    }
}

if (isnamnhuan) {
    alert(year1 + "la nam nhuan")
} else {
    alert(year1 + "not nam nhuan")
}

//nang cao hon nua 
let year2 = parseInt(prompt("enter a Year"))
let isnamnhuan1 = false
let isnamnhuan4 = year2 % 4 == 0

if (isnamnhuan4) {
    let isnamnhuan100 = year % 100 == 0
    if (isnamnhuan100) {
        let isnamnhuan400 = year2 % 400 == 0
        if (isnamnhuan400) {
            isnamnhuan1 = true
        }
    } else {
        isnamnhuan1 = true
    }
}

if(isnamnhuan1){
    alert(year2+"la nam nhuan")
}else{
    alert(year2+"not nam nhuan")
}
