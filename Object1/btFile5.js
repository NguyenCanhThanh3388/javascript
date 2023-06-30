class Rectangle {
    constructor(chieudai, chieurong) {
        this.chieudai = chieudai
        this.chieurong = chieurong

    }
    getDienTich = function () {
        return this.chieudai * this.chieurong
    }
    getChuVi = function () {
        return (this.chieudai + this.chieurong) * 2
    }
}

let value = new Rectangle(4, 6)
let DienTich = value.getDienTich()
let ChuVi = value.getChuVi()

console.log("dien tich la : " + DienTich + " chu vi la : " + ChuVi)