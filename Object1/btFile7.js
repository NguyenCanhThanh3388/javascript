class Mobile {
  constructor(phone) {
    this.pin = 100
    this.imess = []
    this.inbox = []
    this.sentMess = []
    this.status = false
    this.nameMobile = phone
  }

  getStatus() {
    return this.status
  }

  getPin() {
    return this.pin

  }

  batTatDT() {
    this.status = !this.status

  }

  getImess(mess) {
    this.imess.push(mess)
    this.pin = this.pin - 1
    console.log("imess" + this.pin)
  }

  getInbox(mess) {
    this.inbox.push(mess)
    this.pin = this.pin - 1
    console.log(2)
  }

  getReceiveMess(phone,mess) {
    this.getImess(mess)
    this.sentMess = this.imess
    this.getabc(mess)
    phone.getInbox(mess)
    this.pin = this.pin - 1

  }


  showSoanTinNhan() {
    this.pin = this.pin - 1
    return this.imess
  }

  showSentMess() {
    this.pin = this.pin - 1
    return this.sentMess
  }

  showInbox() {
    this.pin = this.pin - 1
    return this.inbox
  }

}

let iphone = new Mobile("iphone")
let motorola = new Mobile("motorola")
iphone.batTatDT()
iphone.getStatus()
if (iphone.getStatus() == true) {
  iphone.getReceiveMess(motorola, "hi thông, cúc đi")
  console.log(iphone.getPin())
}

if (motorola.getStatus() == true) {
  console.log(motorola.showInbox())
}










