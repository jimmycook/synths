<template>
  <div class="hello">
    <p>MonoSynth</p>
    <p>Connect a midi keyboard to use the synth</p>
    <button class="button" @click="synth.triggerAttackRelease('C4', '1n')">Play a test note</button>
  </div>
</template>

<script>
import MonoSynth from '@/midi/MonoSynth.js'
export default {
  name: 'hello',
  data () {
    return {
      synth: null
    }
  },
  mounted () {
    this.synth = new MonoSynth()
    this.synth.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.button {
  background-color: white;
  outline: none;
  border: 1px solid #4fc08d;
  padding: 9px;
  border-radius: 3px;
  color: #2c3e50
}
</style>
