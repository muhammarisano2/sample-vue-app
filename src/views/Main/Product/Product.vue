/* eslint-disable eqeqeq */
<template>
    <div class="container">
        <h2>product</h2>
        <div class="row">
        <div class="col-md-3 card-cos" v-for="item in products" :key="item.id">
             <Card :name="item.title" :url="item.url" :id="item.id" v-on:toggle-event="clikBtn"/>
        </div>
        </div>

    </div>
</template>

<script>
import Card from '../../../components/_base/Card'
import axios from 'axios'

export default {
  name: 'Product',
  components: {
    Card
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    clikBtn (val) {
      this.products = this.products.filter((item) => {
        return item.id !== val
      })
    },
    getData () {
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
          this.products = res.data
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped>
    .card-cos{
        padding: 10px !important;
    }
</style>
