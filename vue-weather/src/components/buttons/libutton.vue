<template>
    <li type='button'>{{mytitle}}</li>
</template>

<script>
export default {
    name: 'libutton',
    props:{
        title: String,
        },
    data(){
        return{
            mytitle: this.title
        }
    }
        
    
}
</script>
