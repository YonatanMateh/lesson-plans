class TwoWayArray {
  constructor() {
    this.data = []
  }

  push(val) {
    this.data.push(val)
    this.data.unshift(val)
  }

  getUnique() {
    return this.data.splice(this.data.length/2)
  }

  getData() {
    return this.data
  }
}

const arr = new TwoWayArray()
arr.push(2)
arr.push(3)
arr.push(4)
arr.push(2)
console.log(arr.getUnique())