import Tone from 'tone'

// var reverb = new Tone.JCReverb(0.3).connect(Tone.Master)
// var delay = new Tone.FeedbackDelay(0.1)
// connecting the synth to reverb through delay
const synth = new Tone.PolySynth(4, Tone.Synth).chain(reverb)

export default synth
