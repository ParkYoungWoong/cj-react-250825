class User {
  constructor() {
    this._name = 'Neo'
  }
  // Getter
  get name() {
    return this._name
  }
  // Setter
  set name(val) {
    this._name = val
  }
}
const user = new User()
console.log(user.name) // 'Neo'
user.name = 'Evan'
console.log(user.name) // 'Evan'
