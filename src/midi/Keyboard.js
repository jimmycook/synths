import Note from './Note'
import PressedNotes from './PressedNotes'
// import Midi from './Midi'
import WebMidi from 'webmidi'
import TypedNote from './TypedNote'

class Keyboard {
  constructor () {
    this.octave = 3
    
    this.notes = new PressedNotes()

    WebMidi.enable((err) => {
      if (err)
        console.log('WebMidi could not be enabled.', err)    

      const input = WebMidi.inputs[0]
      if (input) {      
        input.addListener('noteon', 'all', (e) => this._noteEvent(e))
        input.addListener('noteoff', 'all', (e) => this._noteEvent(e))
      }

    })
    
    this.musicalTyping()    
  }

  musicalTyping () {

    window.addEventListener('keydown', (e) => {
      const note = this._getKeyNote(e.keyCode)
      if (note) {
        if (this.notes.isPressed(note) === undefined) {
          this.notes.push(note)        
          this.noteCallback(note, this.notes)
        }
      }
    }, true)

    window.addEventListener('keyup', (e) => {
      const note = this._getKeyNote(e.keyCode)
      if (note) {
        note.setVelocity(0)      
        this.notes.delete(note)
        this.noteCallback(note, this.notes)
      }
    }, true)
  }

  _getKeyNote (keyCode) {
    switch (keyCode) {
      case 65:
        return new TypedNote('C', 0 + this.octave)
      case 87:
        return new TypedNote('C#', 0 + this.octave)
      case 83:
        return new TypedNote('D', 0 + this.octave)
      case 69:
        return new TypedNote('D#', 0 + this.octave)
      case 68:
        return new TypedNote('E', 0 + this.octave)
      case 70:
        return new TypedNote('F', 0 + this.octave)
      case 84:
        return new TypedNote('F#', 0 + this.octave)
      case 71:
        return new TypedNote('G', 0 + this.octave)
      case 89:
        return new TypedNote('G#', 0 + this.octave)
      case 72:
        return new TypedNote('A', 0 + this.octave)
      case 85:
        return new TypedNote('A#', 0 + this.octave)
      case 74:
        return new TypedNote('B', 0 + this.octave)
      case 75:
        return new TypedNote('C', 1 + this.octave)
      case 79:
        return new TypedNote('C#', 1 + this.octave)
      case 76:
        return new TypedNote('D', 1 + this.octave)
      default:
        return false
    }
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
