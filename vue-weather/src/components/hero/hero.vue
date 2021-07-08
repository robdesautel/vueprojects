<template>
    <div>
        <section>
                <img v-for="img, i in heroimages" :src="img"  :key="i" alt="testing"/>
                <!-- <img :src="image2"  alt="testing"/>
                <img :src="image3"  alt="testing"/>
                <img :src="image4"  alt="testing"/>
                <img :src="image5"  alt="testing"/> -->
        </section>
    </div>   
    
</template>

<script>
export default {
    props:{
        imagesrc: String
    },
        data(){
            return{
                    heroimages:[
                    '/img/YinYangTornado.jpg',
                    '/img/SnowStorm.jpg',
                    '/img/RainyDay.jpg',
                    '/img/LightningWeatherStormThunderstorm.jpg',
                    '/img/ForestFire.png',
                    ]
            }
        
    },

}
</script>