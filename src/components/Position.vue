<template>
  <span>{{ position }}</span>
</template>

<script>
import Tone from 'tone'

export default {
  data () {
    return {
      position: ''
    }
  },
  mounted () {
    const updateTime = () => {
      requestAnimationFrame(updateTime)
      this.position = Tone.Transport.position
    }
    updateTime()
  }
}
</script>
