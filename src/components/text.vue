<template>
<div class="cont">
<div class="sitename">LOOM VOICE</div>

<div class="home">

<div class="row">
<div class="col-md-4 settings" id="settings">
<h4 class="set">Settings</h4>

<div class="cfunctions">
<div class="f1 fcont">
<select name="" id="voices" v-model="voice" class="select">
<option value="" disabled>Select a preferable voice</option>

</select>
</div>
<div class="f2 fcont"><span class="set" >Pitch</span> <input type="range" name="" id="r" v-model="pitch" max="2" min="0" step="0.1"></div>
<div class="f3 fcont"><span class="set">Rate</span> <input type="range" name="" id="r" v-model="rate" max="10" min="0.1" step="0.1"></div>
<div class="f3 fcont"><span class="set">Volume</span> <input type="range" name="" id="r" v-model="volume" max="1.0" min="0" step="0.1"></div>
</div>
</div>
<div class="col-md-8 text-center">

<div class="class-speech-cont">
<textarea name="" id="msg" class="speech_input" placeholder="write something..." v-model="textin"></textarea>

<!--funtion1--->


<!--funtion2--->
<div class="advancedf functions">
<div class="f4 avancedfcont" @click="play()" id="play">Play <img src="./../assets/play.png" class="btn_img"></div>
<div class="f4 avancedfcont" id="stop">Stop <img src="./../assets/pause.png" class="btn_img"></div>
<div class="f4 avancedfcont download" id="download">Download <img src="./../assets/download.png" class="btn_img"></div>
<!-- <a href="" class="f4 avancedfcont download" id="download">Download <img src="./../assets/download.png" class="btn_img"></a> -->

</div>
</div>
</div>
<!--
<div class="col-md-4 history"  id="history">
<h4>Cached History</h4>
<div >

<div class="flexrow headflex">
<div class="text ib hh1">Message</div>
<div class="time ib hh2">Time</div>
</div>

</div>
</div>
-->

</div>
</div>



<Footer />
</div>

</template>

<script>
//import $ from "jquery"

import Footer from './plugins/Footer.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

//import {startAudioRecording,StopAudioRecording} from './recorder.js'


export default {
name: 'HomePage',
components: {
Footer,
},
data() { 
return {textin:"",pitch:1,volume:1,voice:'',rate:1}
},

methods:{
play: function(){

if ('speechSynthesis' in window) {
console.log('Speech Synthesis supported 🎉')

var msg = new SpeechSynthesisUtterance();
//var voices = window.speechSynthesis.getVoices();
//msg.voice = this.voice; 
msg.volume = this.volume; // From 0 to 1
msg.rate = this.rate; // From 0.1 to 10
msg.pitch = this.pitch; // From 0 to 2
//msg.lang = 'french';
msg.text = this.textin;
// msg.text = "Echelon tech is the number one web development firm in Umu-ahia";

var voiceSelect = document.getElementById('voices')
if (voiceSelect.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
	}
  
var MSG = document.getElementById('msg')


//verifying if the user wrote somthing in the input
if (MSG.value.length > 0) {
window.speechSynthesis.speak(msg);

//startAudioRecording()
//#############################################################################

/*
//writing code for appending sent texts
//#############################################################################
var time = new Date()
var H = time.getHours()
var M = time.getMinutes()
//var D = time.getDay()
var ampm = H >=12 ? "pm":"am"
H = H % 12 
H = H ? H :12;
M = M < 10 ? "0" + M : M;
var ctime = H + " : " + M + " " + ampm

//#############################################################################
//#############################################################################
var parent = document.getElementById('history')
let flexrow  = document.createElement('div')


//toright.className = "toright"
flexrow.style =`display: flex;flex-direction: row;margin-top:5px;padding:15px;font-size:14px;background-color:#182830,width:100%`

let thetext  = document.createElement('div')

//var chatin   =this.chat
var mtext  = document.createTextNode(this.textin)
thetext.appendChild(mtext)
thetext.style =`display:inline-block;width: 80%;font-size:15px;`

let ttime  = document.createElement('div')
ttime.style =`display:inline-bloc;width: 18%;font-size:10px;color:yellow`
var thetime = document.createTextNode(ctime)
ttime.appendChild(thetime)


flexrow.appendChild(thetext)
flexrow.appendChild(ttime)
parent.appendChild(flexrow)
*/
}
else{
    alert('write something')
}
}else{
// Speech Synthesis Not Supported 😣
console.log("Sorry, your browser doesn't support text to speech!");}

}},
mounted() {
AOS.init()




//showing all supported voices
//speechSynthesis.getVoices().forEach(function(voice) { console.log(voice.name, voice.default ? voice.default :''); });
var voiceSelect = document.getElementById('voices')
function loadVoices() {
// Fetch the available voices.

var voices = speechSynthesis.getVoices();

// Loop through each of the voices.
voices.forEach(function(voice) {
// Create a new option element.
var option = document.createElement('option');

// Set the options value and text.
option.value = voice.name;
option.innerHTML = voice.name;

// Add the option to the voice selector.
voiceSelect.appendChild(option);
});
}

// Execute loadVoices.
loadVoices();
window.speechSynthesis.onvoiceschanged = function() {
  loadVoices();
};


// Set up an event listener for when the 'speak' button is clicked.
var button = document.getElementById('play')
button.addEventListener('click', function() {
//this will be used fort recorder
//startAudioRecording()
	})

var button2 = document.getElementById('stop')
button2.addEventListener('click', function() {
//StopAudioRecording()

speechSynthesis.cancel()
})
 

//const amISpeaking = synth.speaking;

}}
</script>

<!-- #182830 #20282f Add "scoped" attribute to limit CSS to this component only #2c3e50 ;box-shadow: 4px 4px 4px 4px rgb(236, 236, 236)-->
<style scoped>
*{outline: none;}
body{overflow: hidden;}
.home{padding: 60px;overflow: hidden; margin-top: 40px;margin-bottom:50px ;background-color: rgba(255, 255, 255, 0.789);border-radius: 20px;}
.main{font-size: 18px;color:white;text-align: justify;}

.speech_input{width: 90%;height: 210px;border: 4px solid #00212e;border-radius: 19px;padding: 15px;margin-top: 40px;background-color: transparent;overflow-y: hidden;}
.functions{display: flex;flex-direction: row;margin-top: 40px;}
.cfunctions{display: flex;flex-direction: column;margin-top: 0px;}
.fcont{width: 100%;margin-top: 20px;}

#voices{height: 40px;width: 100%;background-color: #00212e;color: white;border-radius: 8px;border: none;}
#r{margin-top: 10px;float: right;margin-right: 5px;width: 100px;}
.set{margin-top: 8px;display: inline-block;}

.advancedf{text-align: center;width: 60%;margin-left: 20%;}


.avancedfcont{width: 200px;height: 40px;background-color: #00212e;color: white;margin: 10px;padding: 5px;border-radius: 8px;}

.settings{color:  #00212e;height:auto;}


.flexrow{display: flex;flex-direction: row;margin-bottom: 40px;}

.set{color:#00212e}
.ib{display: inline-block;}

.sitename{color: #00212e;font-size: 25px;text-align: center;font-family: "Rockwell Extra Bold", Tahoma, Courier;
	letter-spacing: 5px;}

.btn_img{width:30px;height:30px;padding: 6px;margin-left: 5px;}
.download{width: 400px;text-decoration: none;background-color: #00212e77;}

@media screen and (max-width:480px){
.sitename{margin-top: 20px;margin-bottom: -40px;}

#app {overflow-x: visible;}
.home{padding: 20px;overflow: hidden; margin-top: 60px;margin-bottom:10px ;border-radius: 20px;}
.speech_input{width: 100%;margin-top: 40px;height: 180px;font-size: 14px;padding: 8px;}
.advancedf{text-align: center;width: 100%;margin-left: 0%;margin-top: 5px;}

.btn_img{width:20px;height:20px;padding: 6px;margin-left: 1px;}
.avancedfcont{width: 200px;height: 25px;background-color: #00212e;color: white;margin: 2px;padding: 4px;font-size: 12px;}
.download{width: 350px;text-decoration: none;background-color: #00212e77;}
}
</style>
