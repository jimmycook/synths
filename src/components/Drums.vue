<template>
  <div class="hello">
    <button class="button" @click="play('kick')">Kick</button>
    <button class="button" @click="play('snare')">Snare</button>
    <button class="button" @click="play('hh')">Hat</button>
    <p class="left"><position></position></p>
    <button class="button" @click="loop">Loop</button>
    <button class="button" @click="stop">Stop</button>
    <div class="drums">
      <p>Kick</p>
      <row :beats="kick" @updated="updateKick"></row>
      <p>Snare</p>
      <row :beats="snare" @updated="updateSnare"></row>
    </div>
  </div>
</template>

<script>
import Drums from '@/midi/synths/Drums'
import Row from '@/components/Row'
import Position from '@/components/Position'
import Tone from 'tone'
console.log(Tone)
export default {
  components: { Row, Position },
  data () {
    return {
      kick: [false, false, false, false, false, false, false, false],
      snare: [false, false, false, false, false, false, false, false]
    }
  },
  mounted () {
    document.addEventListener('keydown', (e) => {
      const key = e.key
      if (key === 'q') {
        this.play('kick')
      } else if (key === 'w') {
        this.play('snare')
      } else if (key === 'e') {
        this.play('hh')
      } else if (key === 'r') {
        this.play('hho')
      } else if (e.keyCode === 32) {
        Drums.loop()
      }
    })
  },
  methods: {
    updateKick (n) {
      this.kick = n
    },
    updateSnare (n) {
      this.snare = n
    },
    play (name) {
      Drums[name].triggerAttack()
    },
    loop () {
      Drums.loop()
    },
    stop () {
      Drums.stop()
    }
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

.left {
  text-align: left;
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
