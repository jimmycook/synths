import Keyboard from './Keyboard'
import Tone from 'tone'

const options = {
  'oscillator': {
    'partials': [
      1,
      0,
      2,
      0,
      3
    ]
  },
  'envelope': {
    'attack': 0.001,
    'decay': 1.2,
    'sustain': 0,
    'release': 1.2
  }
}

export default class MonoSynth {
  constructor () {
    this.synth = new Tone.Synth(options).toMaster()
  }

  init () {
    Keyboard.onNote((note, notes) => {
      const n = notes.active()
      if (!n.velocity) {
        this.synth.triggerRelease()
      } else {
        this.synth.triggerAttack(n.note)
      }
    })
  }

  triggerAttackRelease (note, time) {
    this.synth.triggerAttackRelease(note, time)
  }
}


