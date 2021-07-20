<template >
    <section class="row">
            <div v-for="img, i in getImages" :key="i" class="col d-flex justify-content-center align-items-center"  > <!--class=" justify-content-evenly " -->
                <img  :src="img"  alt="testing" class="heroImageBanner"/>
            </div>
    </section>
</template>

<script>
export default {
    props:{
        imagesrc: String
    },
        data(){
            return{
            }
        
    },
    computed:{
        getImages(){
            
            const images = [
                    '/img/YinYangTornado.jpg',
                    '/img/SnowStorm.jpg',
                    '/img/RainyDay.jpg',
                    '/img/LightningWeatherStormThunderstorm.jpg',
                    '/img/ForestFire.png',
                    ]
            console.log(images)
            return images
        }
    }

}
</script>

<style scoped>
/* .herobackground{
    background-color:red;
    width: 100%;
    height: 25em;
} */

section, section div{
    height: inherit;
}
section div{
    width: 100%
}

.heroImageBanner{
    width: 100%;
    height: auto;
    transition: width 2s 1s, height 2s 1s, border-radius 3s 5s, ease-in-out 1s ; ;
}
.heroImageBanner:hover{
    width: 119%;
    height: auto;
    border-radius: 150px;
}

section div:first-child{
    margin-left: .5%;
}
section div:last-child{
    margin-right: 1.5%;
}
</style>