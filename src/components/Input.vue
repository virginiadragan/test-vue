<template>
  <div>
    x:<input  v-model="x">
    y:<input  v-model="y">
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
      return{
        x: this.$store.state['x'],
        y: this.$store.state['y']
      }
  },
  watch: {
    x: function (val) {
      this.x = parseInt(val)
      this.$store.commit('setX', val)
    },
     y: function (val) {
      this.y = parseInt(val)
      this.$store.commit('setY', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>