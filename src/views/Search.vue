<template>
    <div id="search">
        <!-- I'M:{{this.HOSPITAL__INIT}}
        <br>
        <br>
        <br>
        <br>
        <br> -->
        {{this.HOSPITAL__INIT}}    
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";


export default {
    mounted(){
        this.map()
        // this.TTT()
    },
    computed: {
        ...mapState(['searchResult']),
        ...mapGetters(['HOSPITAL__INIT'])
    },
    methods:{
        map(){

        }
    }
}
</script>