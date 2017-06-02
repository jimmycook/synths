<template>
  <div class="row">
    <div v-for="(beat, key) in beats"      
           @click="toggle(key)" 
           :class="beat ? 'is-active' : ''" 
           class="beat"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'beats' ],
  methods: {
    toggle (key) {
      this.beats[key] = !this.beats[key]
      this.$emit('updated', this.beats)
      this.$forceUpdate()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
}

.beat {
  flex-grow: 1;
  border: 1px solid #42b983;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: white;
}

.is-active {
  background-color: #2c3e50;
  /*border: none;*/
}
</style>
