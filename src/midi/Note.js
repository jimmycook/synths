export default class Note {
  constructor (midiEvent) {
    this.active = midiEvent.data[0]
    this.note = midiEvent.note.name + midiEvent.note.octave
    this.event = midiEvent
    this.velocity = midiEvent.rawVelocity
  }
}
