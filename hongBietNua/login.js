let userName
let password

function valueLogin() {
    userName = document.getElementById("Name").value
    password = document.getElementById("Pass").value
}
console.log(valueLogin)
function login() {
    valueLogin()
    if (userName == 'Admin') {
        if (password == 'TheMaster') {
            alert('Welcome!');
        } else if (password == null) {
            alert('Canceled.');
        } else {
            alert('Wrong password');
        }
    } else if (userName == null) {
        alert('Canceled');
    } else {
        alert("I don't know you");
    }
}







