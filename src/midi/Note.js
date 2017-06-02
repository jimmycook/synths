const notes = [
  'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
]

export default class Note {
  constructor (midiEvent) {
    this.active = midiEvent.data[0]
    this.note = this._decode(midiEvent.data[1])
    let velocity
    if (midiEvent.data[2]) {
      velocity = midiEvent.data[2] / 128
    } else {
      velocity = 0
    }
    this.velocity = velocity
    console.log(this)
  }

  _decode (noteNum) {
    const octave = Math.floor(noteNum / 12)
    const note = noteNum % 12

    const name = notes[note] + octave
    return name
  }
}
