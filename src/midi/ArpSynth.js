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
  constructor() {
    this.synth = new Tone.Synth(options).toMaster()
  }

  init() {
    Keyboard.onNote((note, notes) => {
      // const n = notes.active()
      // if (!n.velocity) {
      //   this.synth.triggerRelease()
      // } else {
      //   this.synth.triggerAttack(n.note)
      // }
      Tone.Transport.cancel()
      const allNotes = notes.all
      console.log(allNotes)
      let playing = false

      if (allNotes.length < 1) {
        Tone.Transport.stop()
        this.playing = false
      } else if (!playing && allNotes.length) {
        Tone.Transport.start()
      }

      allNotes.forEach((note, index) => {
          Tone.Transport.schedule(() => {
          this.synth.triggerAttackRelease(note.note, '8n')
        }, `0:0:${index}`)
      })

      // const reversed = Array.from(allNotes)
      // reversed.pop()
      // reversed.reverse()
      // reversed.forEach((note, index) => {
      //   Tone.Transport.schedule(() => {
      //     this.synth.triggerAttackRelease(note.note, '8n')
      //   }, `0:${index}`)
      // })


      
      // const triggerSynth = (time) => {
      //   //the time is the sample-accurate time of the event
      //   this.synth.triggerAttackRelease('C2', '8n', time)
      // }

      // //schedule a few notes
      // Tone.Transport.schedule(triggerSynth, 0)
      // Tone.Transport.schedule(triggerSynth, '0:2')
      // Tone.Transport.schedule(triggerSynth, '0:2:2.5')

      //set the transport to repeat
      
      const loopEnd = Tone.Time("8n").mult(allNotes.length)
      console.log(allNotes.length, loopEnd.toNotation())
      Tone.Transport.loopEnd = loopEnd.toNotation()
      Tone.Transport.loop = true

      Tone.Transport.start()
    })
  }

  triggerAttackRelease(note, time) {
    this.synth.triggerAttackRelease(note, time)
  }
}
