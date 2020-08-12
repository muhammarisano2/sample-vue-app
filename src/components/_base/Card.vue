<template>
    <div class="card">
  <img :src="url" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{name}}</h5>
    <p class="card-text">{{price}}</p>
    <button class="btn btn-primary" @click="$emit('toggle-event', id)">Hapus item</button>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: ['name', 'url', 'id']
}
</script>

<style scoped>
.card{
    margin: 10px !important;
}
</style>
