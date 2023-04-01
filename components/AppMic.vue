<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Debug from '@/helpers/Debug';

const isRecording = ref(false);
const emit = defineEmits(['onEnd']);
const props = defineProps({ lang: { type: String, required: true } });
const Recognition = window.speechRecognition || window.webkitSpeechRecognition;
const sr = new Recognition();
onMounted(() => {
  sr.continuous = true;
  sr.interimResults = true;
  sr.lang = props.lang;
  sr.start();
  sr.onstart = () => {
    Debug.log('SR Started');
    isRecording.value = true;
  };
  sr.onend = () => {
    Debug.log('SR Stopped');
    isRecording.value = false;
  };
  sr.onresult = (evt) => {
    for (let i = 0; i < evt.results.length; i++) {
      const result = evt.results[i];
      if (result.isFinal) {
        emit('onEnd', { res: result[0].transcript.replace(/\./g, '') });
        sr.stop();
      }
    }
  };
});

onUnmounted(() => {
  isRecording.value = false;
});

</script>

<template>
  <div>
  </div>
</template>
