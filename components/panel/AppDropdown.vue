<template>
  <div>
    <input id='input' ref='file' type='file' multiple style='display: none' @change='onChange' />
    <label for='input' class='dropdown-container' :style="cssVars"   @drop='onDrop' @dragover='allowDrop'>
      <div class='up'>
        <img src='~/assets/images/icons/AdminLayout/Panel/img-icon-new.svg' alt=''>
        <span>{{ placeholder }}</span>

      </div>
      <div v-for='file in filelist' :key='file.name'>
        <span>
          {{ file.name }}
        </span>
      </div>
      <div class='down'>
        <button class='btn' @click='$refs.file.click()'>Додати файл</button>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppDropdown',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    maxWidth: {
      type: String,
      required: false,
      default: '287px'
    },
    marginTop: {
      type: String,
      required: false,
      default: '0'
    },
    borderColor: {
      type: String,
      required: false,
      default: '#222525'
    },



  },
  data() {
    return {
      filelist: [],
    };
  },
  computed:{
    cssVars() {
      return {
        '--border-color': this.borderColor,
        '--max-width':this.maxWidth,
        '--margin-top':this.marginTop +'px'
      }
    }
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
      this.$emit('input', this.filelist);
    },
    onDrop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange();
      // console.log(data);
    },
    allowDrop(event) {
      event.preventDefault();
    },
  }
};
</script>

<style scoped lang='scss'>

* {
  white-space: normal;
}

.dropdown-container {
  //max-width: 287px;
  //width: 100%;
  min-height: 230px;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: 2px solid;
  border-color: var(--border-color);
  margin-top: var(--margin-top);
  max-width: var(--max-width);
  border-radius: 10px;

  .up {
    display: flex;

    img {
      padding-right: 10px;
    }
  }

  .down {
    display: flex;
    justify-content: right;

    button {
      background-color: #06665A;
      color: white;
      padding: 10px 30px;
      border: 0;
      border-radius: 10px;
    }
  }
}
</style>
