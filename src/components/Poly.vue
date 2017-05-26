<template>
  <div class="hello">
    <p>PolySynth</p>
    <p>Connect a midi keyboard to use the synth</p>
    <button class="button" @click="testChord">Play a test chord</button>
  </div>
</template>

<script>
import PolySynth from '@/midi/PolySynth.js'
export default {
  name: 'poly',
  data () {
    return {
      synth: null
    }
  },
  mounted () {
    this.synth = new PolySynth()
    this.synth.init()
  },
  methods: {
    testChord () {
      this.synth.triggerAttackRelease(['C4', 'E4', 'G4'], '1n')
    }
  }
}
</script>
