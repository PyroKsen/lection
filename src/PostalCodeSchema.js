export default class Apostol {
  ip (ipadr) {
    return ipadr.toString().startsWith('27')
  }

  ipAddressValues() {
    return this
  }

  provvv(ipadr) {
    let mas = ipadr.split('.')
    if (mas.length < 4) {return false}
    let mem = mas.map((el) => Number(el) < 256 && Number(el) > -1)
    if (mem.indexOf(false) === -1) {
      return true
    } else {
      return false
    }
  }

  isValid(ipadr) {
    return this.ip(ipadr) && this.provvv(ipadr)
  }
}