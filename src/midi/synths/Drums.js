import Tone from 'tone'

const samples = {
  'kick': './static/audio/kick.mp3',
  'snare': './static/audio/snare.mp3',
  'hh': './static/audio/hh.mp3',
  'hho': './static/audio/hho.mp3'
}

window.Tone = Tone

Tone.Transport.bpm.value = 120
Tone.Transport.loop = true

class Drums {
  constructor () {
    this._makeKit()
  }

  _makeKit () {
    for (var key in samples) {
      this[key] = new Tone.Sampler(samples[key]).toMaster()
    }

    Tone.Transport.scheduleRepeat((time) => {
      this.hh.triggerAttackRelease(0, '8n')
    }, '8n')
  }

  loop () {
    if (Tone.Transport.state !== 'started') {
      Tone.Transport.start()
    } else {
      Tone.Transport.stop()
    }
  }

  stop () {
    Tone.Transport.stop()
  }
}

export default new Drums()
