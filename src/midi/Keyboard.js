import Note from '@/midi/Note'
import PressedNotes from '@/midi/PressedNotes'

class Keyboard {
  constructor () {
    if (window.navigator.requestMIDIAccess) {
      window.navigator.requestMIDIAccess({ sysex: true })
        .then((res) => {
          this.midiAccess = res
          const midiCallback = (midiEvent) => {
            if (midiEvent.data[0] === 144) {
              this._noteEvent(midiEvent)
            }
          }
          this.midiAccess.inputs.forEach((element) => {
            element.onmidimessage = midiCallback
          })
        })
    } else {
      console.log('No Web MIDI support')
    }

    this.notes = new PressedNotes()
    this.noteCallback
    this.midiAccess = null
  }

  onNote (callback) {
    this.noteCallback = callback
  }

  _noteEvent (midiEvent) {
    const note = new Note(midiEvent)

    if (!note.velocity) {
      this.notes.delete(note)
    } else {
      this.notes.push(note)
    }

    this.noteCallback(note, this.notes)
  }
}

export default new Keyboard()
