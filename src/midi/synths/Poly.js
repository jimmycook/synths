import Tone from 'tone'

const options = {
  // 'oscillator': {
  //   'partials': [
  //     1,
  //     0,
  //     2,
  //     0,
  //     3
  //   ]
  // },
  // 'envelope': {
  //   'attack': 0.1,
  //   'decay': 1.2,
  //   'sustain': 1,
  //   'release': 1.2
  // }
}

const poly = new Tone.PolySynth(4, Tone.Synth).toMaster()
poly.set(options)
window.poly = poly
export default poly
