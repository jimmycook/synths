import Keyboard from '@/midi/Keyboard'
import Poly from '@/midi/synths/Poly'

export default class PolySynth {
  init () {
    Keyboard.noteCallback = (note, notes) => {
      if (!note.velocity) {
        const release = [note.note]
        Poly.triggerRelease(release)
      } else {
        Poly.triggerAttack(note.note)
      }
    }
  }
}
