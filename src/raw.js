
if ('speechSynthesis' in window) {
  console.log('Speech Synthesis supported 🎉')
  
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[10]; 
  msg.volume = 1; // From 0 to 1
  msg.rate = 1; // From 0.1 to 10
  msg.pitch = 1; // From 0 to 2
  msg.lang = 'en-US';
  msg.text = "Echelon tech is the number one web development firm in Umu-ahia";
  
  window.speechSynthesis.speak(msg);
  
  
  
  }else{
    // Speech Synthesis Not Supported 😣
    console.log("Sorry, your browser doesn't support text to speech!");
  }
  
  
  
  //showing all supported voices
  
  speechSynthesis.getVoices().forEach(function(voice) { console.log(voice.name, voice.default ? voice.default :''); });
  
  