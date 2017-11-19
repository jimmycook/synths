<template>
  <div>
    <div v-if="access">
      You have access.
      <div class="devices">
        <div>Inputs: {{ access.inputs.size }}</div>
        <div class="devices">
          <div class="device" v-for="input in inputs" :key="input.id" :class="active.input.id === input.id ? 'active' : ''">
            {{ input.manufacturer }} {{ input.name }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <button @click="requestAccess">Request Midi Access</button>
    </div>
  </div>
</template>

<script>
import Midi from '@/midi/Midi'

export default {
  mounted () {
    this.requestAccess()
  },
  computed: {
    active () {
      return Midi.active
    }
  },
  data () {
    return {
      access: null,
      inputs: null,
      outputs: null
    }
  },
  methods: {
    async requestAccess () {
      console.log('trying to get access')
      this.access = await Midi.requestAccess()

      if (this.access) {
        const io = Midi.getIO()
        console.log(io)
        this.inputs = io.inputs
        this.outputs = io.outputs
      }
    }

    // getIO ()
  }
}
</script>

<style>
.device:before {
  content: 'status';
  color: red;
}
.active:before {
  color: green;
}
</style>
