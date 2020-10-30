<template>

   <!-- <Head></Head> -->

   <!-- <Category> </Category> -->
   <div>
       <Head></Head>
       <Category></Category>
       <List></List>
   </div>
   


   
</template>

<script>
    import Head from './Head'
    import Category from './Category'
    import List from './List'
    export default {
        components:{
            Head,
            Category,
            List
        }
        
    }
</script>

<style lang="scss" scoped>

</style>