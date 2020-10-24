<template>
  <div id="app">
    <router-link to="/yes"> </router-link>
    <div id="nav">
      <!-- <router-link to="/home">Home</router-link> | -->
      <router-link to="/about">About</router-link>|
      
    
     <router-link :to="{path:'/test2',query:{id:20183164,name:'姓名：李悦  学校:黑龙江大学'}}">TEST2|</router-link>
     <router-link :to="{path:'/home',query:{id:2112018020228,name :'姓名：张石洋学校：哈尔滨工程大学'}}">  Home</router-link>
    </div>
    <transition>
    <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter{
  opacity: 1;
}
.fade-enter-active{
  transition: opacity 2s ease;
}
.fade-enter-to{
  opacity: 1;
}
.fade-leave{
  transform: translateX(0);

}
.fade-leave-to{
  transform: translateX(100%);
}
.fade-leave-active{
   transition: opacity 2s ease;
}
</style>
