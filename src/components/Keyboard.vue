<template>
  <div>
  </div>
</template>

<script>
import Tone from 'tone'
import Note from '@/midi/Note'
import PressedNotes from '@/midi/PressedNotes'

const notes = new PressedNotes()

export default {
  mounted () {
    this.synth = new Tone.FMSynth().toMaster()
    window.synth = this.synth

    if (window.navigator.requestMIDIAccess) {
      window.navigator.requestMIDIAccess({ sysex: true })
        .then(this.initMidi)
    } else {
      console.log('No Web MIDI support')
    }
  },
  data () {
    return {
      synth: null,
      midiAccess: null,
      input: null,
      lastNote: null
    }
  },
  methods: {
    note () {
      this.synth.triggerAttackRelease('C4', '8n')
    },

    initMidi (res) {
      this.midiAccess = res

      this.input = this.midiAccess.inputs.values().next().value
      this.input.onmidimessage = this.onMIDIMessage
    },

    onMIDIMessage (midiEvent) {
      const note = new Note(midiEvent)
      // console.log(note)
      if (!note.velocity) {
        notes.delete(note)
      } else {
        notes.push(note)
      }
      console.log(notes.active())
      this.play(notes.active())
    },

    play (note) {
      if (!note) {
        this.synth.triggerRelease()
      } else {
        this.synth.triggerAttack(note.note, '4n')
      }
    }
  }
}
</script>
