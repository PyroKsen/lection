export default class IpAdres {
  isNorm(adr) {
    return adr.toString().startsWith('ZIP')
  }

  setPostalCodeLengthConstraint(min, max = Infinity) {
    this.min = min
    this.max = max
    return this
  }

  proverka (adr) {
    let mas = adr.split('_')
    if (this.min === undefined) {
      return true
    }
    return this.max >= mas[1].length && this.min <= mas[1].length
  }

  isValid(adr) {
    return this.isNorm(adr) && this.proverka(adr)
  }
}