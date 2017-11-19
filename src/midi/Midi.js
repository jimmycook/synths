class Midi {
  constructor () {
    if (window.navigator.requestMIDIAccess) {
      this.midiSupport = true
      this.requestAccess()
    } else {
      this.midiSupport = false
    }
  }

  async requestAccess () {
    if (!this.access) {
      try {
        this.access = await window.navigator.requestMIDIAccess({ sysex: true })
        this.getIO()
      } catch (e) {
        this.access = null
        return false
      }
    }
    return this.access
  }

  getIO () {
    if (!this.access) {
      return false
    }

    this.inputs = []
    this.outputs = []

    for (let i of this.access.inputs.values()) {
      // console.log(i)
      this.inputs.push(i)
    }
    for (let o of this.access.outputs.values()) {
      this.outputs.push(o)
    }

    if (!this.active) {
      this.active = {
        input: this.inputs[0],
        output: this.outputs[0]
      }
    }
    return { inputs: this.inputs, outputs: this.outputs }
  }
}

export default new Midi()
