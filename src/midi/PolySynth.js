import Keyboard from '@/midi/Keyboard'
import Poly from '@/midi/synths/Poly'

export default class PolySynth {
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
