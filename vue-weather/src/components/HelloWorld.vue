<template>
  <div>
    <div>
      <div class="herobackground">
        <HeroSection/>
      </div>
    </div>

    <div class="row row-cols-3">

      <div class="col-2">
        <ul>
          <LiButton v-for="name, i in buttonNames" :title="name" :key="i" class="d-flex flex-column btn btn-primary"/>
        </ul>
      </div>

      <div class="col"></div>      
    </div> 
  </div>
</template>

<script>
import LiButton from "@/components/buttons/libutton.vue"
import HeroSection from "@/components/hero/hero.vue"
export default {
  name: 'HelloWorld',
  components: {
    LiButton,
    HeroSection
  },
  data(){
    return{
      buttonNames: ['home', 'about', 'contact me', 'profile', 'another button', 'cool buttons'],
    }
  }
}
</script>

<style scoped>
.herobackground{
    /* background-color:red; */
    background-image: url('../../public/img/partlycloudy.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 25em;
}

li {
  margin-bottom: 5%;
}
</style>
