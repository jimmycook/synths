import Keyboard from '@/midi/Keyboard'
import Tone from 'tone'

export default class MonoSynth {
  constructor () {
    this.synth = new Tone.FMSynth().toMaster()
  }

  init () {
    Keyboard.noteCallback = (note, notes) => {
      const n = notes.active()
      if (!n.velocity) {
        this.synth.triggerRelease()
      } else {
        this.synth.triggerAttack(n.note, '4n')
      }
    }
  }

  callback (note) {

  }
}
