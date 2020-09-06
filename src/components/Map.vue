<template>
    <v-container > 
        <GmapMap
            :center="coordinates"
            :zoom="8"
            style="width:100%; height:200px;"
            ref="mapRef"
        ></GmapMap>
    </v-container>
</template>
<script>
export default {
    data() {
        return{
            coordinates: {
                lat: 0,
                lng: 0
            }
        }
    },
    created(){
        this.$getLocation(this.$options)
        .then(coordinates => {
            this.coordinates = coordinates;
        })
        .catch(erro => console.log(erro));
    }
}
</script>

<style scoped>
#map{
    width:'100px'; height:'100px'
}
</style>