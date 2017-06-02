<template>
  <div class="slider">
    <input type="range" min="-60" max="0" v-model="vol" @change="update(vol)" @input="update(vol)">
  </div>
</template>

<script>
import Tone from 'tone'
export default {
  data () {
    return {
      vol: 0
    }
  },
  methods: {
    update (vol) {
      Tone.Master.volume.value = vol
      if (vol === -60) {
        Tone.Master.mute = true
      } else {
        Tone.Master.mute = false
      }
    }
  }
}
</script>

<style scoped>
  span {
    width: 40px;
  }
</style>
