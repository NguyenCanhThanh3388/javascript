class Temperature {
    constructor(DoC) {
        this.DoC = DoC
    }

    getDoF = function () {
        return this.DoC * 9 / 5 + 32
    }
    getDoK = function () {
        return this.DoC + 273.15
    }


}

let value = new Temperature(30)
let DoF = value.getDoF()
let DoK = value.getDoK()

console.log("Do F la : " + DoF + " Do K la : " + DoK)
