<template>
    <div>
        <Navbar/>
        <div class="cos-container">
        <router-view/>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../../components/_base/Navbar'
import Footer from '../../components/_base/Footer'

export default {
  name: 'Main',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
    .cos-container{
        min-height: 500px;
    }
</style>
