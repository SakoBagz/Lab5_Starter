// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const playButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = i;
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();
  synth.addEventListener('voiceschanged', populateVoiceList);

  playButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (!text) return;

    const utterThis = new SpeechSynthesisUtterance(text);
    const selected = voiceSelect.value;
    if (selected !== 'select') {
      utterThis.voice = voices[parseInt(selected)];
    }

    utterThis.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  });
}