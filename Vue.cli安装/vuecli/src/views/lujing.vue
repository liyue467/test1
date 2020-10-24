<template>
    <div>
        路径传参
        <!-- {{$route.params.id}}
        {{$route.params.name}} -->
        {{id}}
        {{name}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:this.$route.params.id,
                name:this.$route.params.name
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>