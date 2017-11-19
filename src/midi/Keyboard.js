import Note from '@/midi/Note'
import PressedNotes from '@/midi/PressedNotes'
// import Midi from '@/midi/Midi'
import WebMidi from 'webmidi'

class Keyboard {
  constructor () {
    WebMidi.enable((err) => {
      if (err) {
        console.log('WebMidi could not be enabled.', err)
      }

      const input = WebMidi.inputs[0]
      this.notes = new PressedNotes()

      input.addListener('noteon', 'all', (e) => this._noteEvent(e))
      input.addListener('noteoff', 'all', (e) => this._noteEvent(e))

      this.notes = new PressedNotes()
    })
  }

  setUp (access) {
    const midiCallback = (midiEvent) => {
      if (midiEvent.data[0] === 144) {
        this._noteEvent(midiEvent)
      }
    }
    access.inputs.forEach((element) => {
      element.onmidimessage = midiCallback
    })

    this.noteCallback
  }

  onNote (callback) {
    console.log('setting on note callback')
    this.noteCallback = callback
  }

  _noteEvent (e) {
    const note = new Note(e)
    if (note.velocity) {
      this.notes.push(note)
    } else {
      this.notes.delete(note)
    }

    this.noteCallback(note, this.notes)
  }
}

export default new Keyboard()
