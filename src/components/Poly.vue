<template>
  <div class="hello">
    PolySynth
  </div>
</template>

<script>
import PolySynth from '@/midi/PolySynth.js'
export default {
  name: 'poly',
  mounted () {
    const poly = new PolySynth()
    poly.init()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
