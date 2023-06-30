//bai1
// let a = prompt("nhap so a")
// let b = prompt("nhap so b")
// if(a%b==0){
// alert("a chia het cho b")
// }else {
//     alert("a ko chia het cho b")
// }
//bai2
// let sotuoi = prompt("nhap so tuoi")

// if(sotuoi>=16){
// alert("đủ tuổi")
// }else{
//     alert(sotuoi+" khong đủ tuổi")
// }

//bai3
// let so = prompt("nhập số tự nhiên")
// var abc = so > 0 ? alert(so + " lớn hơn 0")  
// : so< 0 ? alert( so + " nhỏ hơn 0")
// : alert(so + " bằng 0") 
// if (so == 0) {
//     alert(so + " bang 0")
// } else if (so > 0) {
//     alert(so + " lớn hơn 0")
//     console.log(so)
// } else {
//     alert(so + " nhỏ hơn 0")
// }



//bai4
// let a = parseInt(prompt("nhap so a")) 
// let b = parseInt(prompt("nhap so b")) 
// let c = parseInt(prompt("nhap so c")) 

// if (a > b) {
//     if (a > c) {
//         alert(a + " la so lon nhat")
//     }
// } else if (b > c) {
//     alert(b + " la so lon nhat")
// } else {
//     alert(c + " la so lon nhat")
// }


// //bai5
// let diemtoan = parseInt(prompt("nhap diem mon toan"))
// let diemli = parseInt(prompt("nhap diem mon li"))
// let diemhoa = parseInt(prompt("nhap diem mon hoa"))
// let abc1 = diemhoa + diemli + diemtoan / 3
// if (abc1 >= 8) {
//     alert(abc1 + " xếp hạng giỏi ")
// } else if (abc1 >= 6.5) {
//     alert(abc1 + " xếp hạng khá ")
// }else if (abc1>=5){
//     alert(abc1 + " xếp hạng trung bình ")
// }else{
//     alert(abc1 + " xếp hạng yếu ")
// }

//bai6 
// let tong = parseInt(prompt("tổng doanh số bán hàng"))

// if (tong <= 100) {
//     let hoahong = tong * 5 / 100
//     alert("hoa hồng nhận dc tháng này là " + hoahong)
// } else if (tong < 150) {
//     let hoahong = tong * 7 / 100
//     alert("hoa hồng nhận dc tháng này là " + hoahong)
// } else {
//     let hoahong = tong * 10 / 100
//     alert("hoa hồng nhận dc tháng này là " + hoahong)
// }

//bai8
// let doC = parseInt(prompt("nhập số độ C cần chuyển"))
// let abc = doC * 9/5 + 32
// alert (abc+" độ F")
//bai9
// let M = parseInt(prompt("nhập số M cần chuyển"))
// let feet = M * 3.2808
// alert(feet+" feet")
//bai10
// let a = parseInt(prompt("nhập độ dài cạnh a"))
// let dientich = a * a
// alert("diện tích hình vuông là " + dientich)
//bai11
// let a = parseInt(prompt("nhập đọ dài cạnh a"))
// let b = parseInt(prompt("nhập độ dài cạnh b"))
// let dientichCN = a * b
// alert("diện tích hình chữ nhật là " + dientichCN)
//bai12 chưa xong
// let a = parseInt(prompt("nhập a"))
// let b = parseInt(prompt("nhập b"))
// let c = parseInt(prompt("nhập c"))

// if (c == 0) {
//     let x = -b / a
//     alert("x = " + x)
// } else if (c > 0) {
//     let x = -b - c / a
//     alert("x = " + x)
// } else {
//     let x = -b + c / a
//     alert("x = " + x)

// }
//bai 13
let so = parseInt(prompt("nhập số cần nhận diện"))
if (so > 0 & so < 120) {
    alert(so + " là tuổi của 1 người")
} else {
    alert(so + " ko pải là tuổi của 1 người")
}


