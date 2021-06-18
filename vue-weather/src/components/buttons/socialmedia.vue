<template>
    <div>
        <a :href="link">

        </a>
    </div>
</template>

<script>
export default {
    name: 'socialmedialink',
    props:{
        herf: String,
    },
    data(){
        return{
            link: this.herf
        }
    }
}
</script>