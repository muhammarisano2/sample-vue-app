<template>
    <div>
        <h2>halaman Home</h2>
        <button @click="linkHistory">ke history</button>
    </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    linkHistory () {
      this.$router.push({ name: 'history', params: { id: 5, name: 'risano', email: 'risa@gamil.com' }, query: { search: 'akbar' } })
    }
  }
}
</script>

<style scoped>

</style>
