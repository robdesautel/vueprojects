<template>
  <div class="row row-cols-3">
    <div class="col-2">
      <ul>
        <LiButton v-for="name, i in buttonNames" :title="name" :key="i" class="d-flex flex-column btn btn-primary"/>
      </ul>
    </div>
    <div class="col">

    </div>
    <div class="col">

    </div>
  </div> 
</template>

<script>
import LiButton from "./buttons/libutton.vue"
export default {
  name: 'HelloWorld',
  components: {
    LiButton,
  },
  data(){
    return{
      buttonNames: ['home', 'about', 'contact me', 'profile', 'another button', 'cool buttons']
    }
  }
}
//This is my test comment
</script>

<style scoped>
li {
  margin-bottom: 5%;
}
</style>
