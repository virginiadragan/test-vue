<template>
    <div>
      Numbers
      <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
export default {
  name: 'Results',
  computed: {
    items () {
      return this.$store.getters.getNumbers
    }
  },
  mounted () {
    this.$store.dispatch('fetchData').then(() => {})
  }
}
</script>

<style scoped>
</style>