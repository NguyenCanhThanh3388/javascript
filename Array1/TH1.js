function TH2(){
    let x = 0
    let array = Array()
    function addArray() {
        array[x] = document.getElementById("txtValue").value
        alert("Element: " + array[x] + "Add at index " + x)
        x++
        document.getElementById("txtValue").value = ""
    }
    
    function DisplayArray() {
        let e = "<hr/>"
        for (let i = 0; i <= array.length; i++) {
            e += "Element " + i + " = " + array[i] + "<br/>"
        }
        document.getElementById("result").innerHTML = e
    }
}

function TH3(){
    let x = [-3,5,1,3,2,10]
    let first = 0
    let last = x.length -1
    while(first<last){
        let b = x[first]
        x[first] = x[last]
        x[last] = b
        first++
        last--
    }
    console.log(x);
}

function TH4(){
    let value =1 
    // let value = prompt("Enter a number: ")
    let number = [-3,5,1,3,2,10]
    for(let i =0 ; i<number.length;i++){
        if(value==number[i]){
            // alert("Value " +number[i]+ "found at "+i)
            console.log("Value " +number[i]+ "found at "+i)
        }

    }
}