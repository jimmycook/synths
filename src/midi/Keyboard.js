import Note from '@/midi/Note'
import PressedNotes from '@/midi/PressedNotes'

class Keyboard {
  constructor () {
    if (window.navigator.requestMIDIAccess) {
      window.navigator.requestMIDIAccess({ sysex: true })
        .then((res) => {
          this.midiAccess = res
          this.input = this.midiAccess.inputs.values().next().value
          this.input.onmidimessage = (midiEvent) => {
            if (midiEvent.data[0] === 144) {
              this._noteEvent(midiEvent)
            }
          }
        })
    } else {
      console.log('No Web MIDI support')
    }

    this.notes = new PressedNotes()
    this.noteCallback
    this.midiAccess = null
    this.input
  }

  _noteEvent (midiEvent) {
    const note = new Note(midiEvent)
      // console.log(note)
    if (!note.velocity) {
      this.notes.delete(note)
    } else {
      this.notes.push(note)
    }

    this.noteCallback(note, this.notes)
  }
}

export default new Keyboard()
