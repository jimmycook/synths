export default class PressedNotes {
  constructor () {
    this._notes = []
    window.notes = this._notes
  }

  get all () {
    return this._notes
  }

  delete (note) {
    this._notes = this._notes.filter((i) => i.note !== note.note)
  }

  push (note) {
    this._notes.push(note)
  }

  active () {
    return this._notes[this._notes.length - 1] || false
  }
}
