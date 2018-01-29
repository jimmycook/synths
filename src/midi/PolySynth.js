import Keyboard from './Keyboard'
import Poly from './synths/Poly'

export default class PolySynth {
  constructor () {
    this.synth = Poly
  }

  init () {
    Keyboard.onNote((note, notes) => {
      if (!note.velocity) {
        const release = [note.note]
        Poly.triggerRelease(release)
      } else {
        Poly.triggerAttack(note.note)
      }
    })
  }

  triggerAttackRelease (notes, time) {
    Poly.triggerAttackRelease(notes, time)
  }
}
