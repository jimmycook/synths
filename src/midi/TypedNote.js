export default class TypedNote {
  constructor(name, octave, velocity = 1) {
    this.note = name + octave
    this.velocity = velocity
  }

  setVelocity(velocity) {
    this.velocity = 0
  }
}